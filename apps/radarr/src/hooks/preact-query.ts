import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getContentKey() {
  return ['content'] as const
}

export function getFeedKey() {
  return ['feed'] as const
}

export function getLoggedoutKey() {
  return ['loggedout'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getApiV3AlttitleQueryKey(
  args: InferRequestType<typeof client.api.v3.alttitle.$get>,
) {
  return ['api', '/api/v3/alttitle', args] as const
}

export function getApiV3AlttitleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.alttitle.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlttitleQueryKey>
  >({
    queryKey: getApiV3AlttitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alttitle.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Alttitle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alttitle.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlttitleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AlttitleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Alttitle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alttitle.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alttitle.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlttitleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AlttitleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3AlttitleIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.alttitle)[':id']['$get']>,
) {
  return ['api', '/api/v3/alttitle/:id', args] as const
}

export function getApiV3AlttitleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.alttitle)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlttitleIdQueryKey>
  >({
    queryKey: getApiV3AlttitleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alttitle[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3AlttitleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.alttitle)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlttitleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AlttitleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AlttitleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.alttitle)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.alttitle)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlttitleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AlttitleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >({
    queryKey: getApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLoginSsoQueryKey(args: InferRequestType<typeof client.login.sso.$get>) {
  return ['login', '/login/sso', args] as const
}

export function getLoginSsoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.login.sso.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginSsoQueryKey>
  >({
    queryKey: getLoginSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.login.sso.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLoginSso<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.login.sso.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLoginSsoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoginSsoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLoginSso<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.login.sso.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.sso.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLoginSsoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoginSsoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLoginQueryKey() {
  return ['login', '/login'] as const
}

export function getLoginQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoginQueryKey>
  >({
    queryKey: getLoginQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoginQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogin<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoginQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
        TError,
        InferRequestType<typeof client.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLogoutQueryKey() {
  return ['logout', '/logout'] as const
}

export function getLogoutQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutQueryKey>
  >({
    queryKey: getLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3AutotaggingQueryKey() {
  return ['api', '/api/v3/autotagging'] as const
}

export function getApiV3AutotaggingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingQueryKey>
  >({
    queryKey: getApiV3AutotaggingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.autotagging.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Autotagging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AutotaggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AutotaggingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Autotagging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AutotaggingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AutotaggingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3AutotaggingMutationKey() {
  return ['api', '/api/v3/autotagging', 'POST'] as const
}

export function getPostApiV3AutotaggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.autotagging.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AutotaggingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.autotagging.$post>) {
      return parseResponse(client.api.v3.autotagging.$post(args, options))
    },
  })
}

export function usePostApiV3Autotagging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.autotagging.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3AutotaggingMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3AutotaggingIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
) {
  return ['api', '/api/v3/autotagging/:id', args] as const
}

export function getApiV3AutotaggingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingIdQueryKey>
  >({
    queryKey: getApiV3AutotaggingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.autotagging[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3AutotaggingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AutotaggingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AutotaggingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AutotaggingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AutotaggingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AutotaggingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3AutotaggingIdMutationKey() {
  return ['api', '/api/v3/autotagging/:id', 'PUT'] as const
}

export function getPutApiV3AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>) {
      return parseResponse(client.api.v3.autotagging[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.autotagging)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3AutotaggingIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3AutotaggingIdMutationKey() {
  return ['api', '/api/v3/autotagging/:id', 'DELETE'] as const
}

export function getDeleteApiV3AutotaggingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AutotaggingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>) {
      return parseResponse(client.api.v3.autotagging[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3AutotaggingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.autotagging)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.autotagging)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3AutotaggingIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3AutotaggingSchemaQueryKey() {
  return ['api', '/api/v3/autotagging/schema'] as const
}

export function getApiV3AutotaggingSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AutotaggingSchemaQueryKey>
  >({
    queryKey: getApiV3AutotaggingSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.autotagging.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3AutotaggingSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AutotaggingSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3AutotaggingSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3AutotaggingSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.autotagging.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AutotaggingSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3AutotaggingSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3SystemBackupQueryKey() {
  return ['api', '/api/v3/system/backup'] as const
}

export function getApiV3SystemBackupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemBackupQueryKey>
  >({
    queryKey: getApiV3SystemBackupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.backup.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3SystemBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3SystemBackupQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3SystemBackup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.backup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemBackupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3SystemBackupQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV3SystemBackupIdMutationKey() {
  return ['api', '/api/v3/system/backup/:id', 'DELETE'] as const
}

export function getDeleteApiV3SystemBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.system.backup)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3SystemBackupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.system.backup[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3SystemBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.system.backup)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.system.backup)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3SystemBackupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3SystemBackupRestoreIdMutationKey() {
  return ['api', '/api/v3/system/backup/restore/:id', 'POST'] as const
}

export function getPostApiV3SystemBackupRestoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemBackupRestoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v3.system.backup.restore[':id'].$post(args, options))
    },
  })
}

export function usePostApiV3SystemBackupRestoreId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.system.backup.restore)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3SystemBackupRestoreIdMutationOptions<
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

export function getPostApiV3SystemBackupRestoreUploadMutationKey() {
  return ['api', '/api/v3/system/backup/restore/upload', 'POST'] as const
}

export function getPostApiV3SystemBackupRestoreUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.system.backup.restore.upload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemBackupRestoreUploadMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.backup.restore.upload.$post(undefined, options))
    },
  })
}

export function usePostApiV3SystemBackupRestoreUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.system.backup.restore.upload.$post>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3SystemBackupRestoreUploadMutationOptions<
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

export function getApiV3BlocklistQueryKey(
  args: InferRequestType<typeof client.api.v3.blocklist.$get>,
) {
  return ['api', '/api/v3/blocklist', args] as const
}

export function getApiV3BlocklistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.blocklist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BlocklistQueryKey>
  >({
    queryKey: getApiV3BlocklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.blocklist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Blocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.blocklist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BlocklistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3BlocklistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Blocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.blocklist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BlocklistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3BlocklistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3BlocklistMovieQueryKey(
  args: InferRequestType<typeof client.api.v3.blocklist.movie.$get>,
) {
  return ['api', '/api/v3/blocklist/movie', args] as const
}

export function getApiV3BlocklistMovieQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.blocklist.movie.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BlocklistMovieQueryKey>
  >({
    queryKey: getApiV3BlocklistMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.blocklist.movie.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3BlocklistMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.blocklist.movie.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BlocklistMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3BlocklistMovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3BlocklistMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.blocklist.movie.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.movie.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BlocklistMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3BlocklistMovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV3BlocklistIdMutationKey() {
  return ['api', '/api/v3/blocklist/:id', 'DELETE'] as const
}

export function getDeleteApiV3BlocklistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.blocklist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3BlocklistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>) {
      return parseResponse(client.api.v3.blocklist[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3BlocklistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.blocklist)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.blocklist)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3BlocklistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3BlocklistBulkMutationKey() {
  return ['api', '/api/v3/blocklist/bulk', 'DELETE'] as const
}

export function getDeleteApiV3BlocklistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3BlocklistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>) {
      return parseResponse(client.api.v3.blocklist.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3BlocklistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.blocklist.bulk.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.blocklist.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3BlocklistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CalendarQueryKey(
  args: InferRequestType<typeof client.api.v3.calendar.$get>,
) {
  return ['api', '/api/v3/calendar', args] as const
}

export function getApiV3CalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CalendarQueryKey>
  >({
    queryKey: getApiV3CalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.calendar.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CalendarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.calendar.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.calendar.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CalendarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFeedV3CalendarRadarrIcsQueryKey(
  args: InferRequestType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>,
) {
  return ['feed', '/feed/v3/calendar/radarr.ics', args] as const
}

export function getFeedV3CalendarRadarrIcsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedV3CalendarRadarrIcsQueryKey>
  >({
    queryKey: getFeedV3CalendarRadarrIcsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feed.v3.calendar['radarr.ics'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFeedV3CalendarRadarrIcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeedV3CalendarRadarrIcsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFeedV3CalendarRadarrIcsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFeedV3CalendarRadarrIcs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.feed.v3.calendar)['radarr.ics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeedV3CalendarRadarrIcsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFeedV3CalendarRadarrIcsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3CollectionQueryKey(
  args: InferRequestType<typeof client.api.v3.collection.$get>,
) {
  return ['api', '/api/v3/collection', args] as const
}

export function getApiV3CollectionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.collection.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CollectionQueryKey>
  >({
    queryKey: getApiV3CollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.collection.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Collection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.collection.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CollectionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Collection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.collection.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CollectionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3CollectionMutationKey() {
  return ['api', '/api/v3/collection', 'PUT'] as const
}

export function getPutApiV3CollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.collection.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.collection.$put>) {
      return parseResponse(client.api.v3.collection.$put(args, options))
    },
  })
}

export function usePutApiV3Collection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.collection.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.collection.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3CollectionMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CollectionIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.collection)[':id']['$get']>,
) {
  return ['api', '/api/v3/collection/:id', args] as const
}

export function getApiV3CollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.collection)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CollectionIdQueryKey>
  >({
    queryKey: getApiV3CollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.collection[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3CollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.collection)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CollectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CollectionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3CollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.collection)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CollectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CollectionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3CollectionIdMutationKey() {
  return ['api', '/api/v3/collection/:id', 'PUT'] as const
}

export function getPutApiV3CollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.collection)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CollectionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.collection)[':id']['$put']>) {
      return parseResponse(client.api.v3.collection[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3CollectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.collection)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.collection)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3CollectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CommandQueryKey() {
  return ['api', '/api/v3/command'] as const
}

export function getApiV3CommandQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CommandQueryKey>
  >({
    queryKey: getApiV3CommandQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.command.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Command<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CommandQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CommandQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Command<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CommandQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CommandQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3CommandMutationKey() {
  return ['api', '/api/v3/command', 'POST'] as const
}

export function getPostApiV3CommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.command.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CommandMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.command.$post>) {
      return parseResponse(client.api.v3.command.$post(args, options))
    },
  })
}

export function usePostApiV3Command<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.command.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.command.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3CommandMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CommandIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
) {
  return ['api', '/api/v3/command/:id', args] as const
}

export function getApiV3CommandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CommandIdQueryKey>
  >({
    queryKey: getApiV3CommandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.command[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3CommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CommandIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CommandIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3CommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.command)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CommandIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CommandIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV3CommandIdMutationKey() {
  return ['api', '/api/v3/command/:id', 'DELETE'] as const
}

export function getDeleteApiV3CommandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CommandIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>) {
      return parseResponse(client.api.v3.command[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3CommandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.command)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.command)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3CommandIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CreditQueryKey(args: InferRequestType<typeof client.api.v3.credit.$get>) {
  return ['api', '/api/v3/credit', args] as const
}

export function getApiV3CreditQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.credit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CreditQueryKey>
  >({
    queryKey: getApiV3CreditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.credit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Credit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.credit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CreditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CreditQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Credit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.credit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.credit.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CreditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CreditQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3CreditIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.credit)[':id']['$get']>,
) {
  return ['api', '/api/v3/credit/:id', args] as const
}

export function getApiV3CreditIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.credit)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CreditIdQueryKey>
  >({
    queryKey: getApiV3CreditIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.credit[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3CreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.credit)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CreditIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CreditIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3CreditId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.credit)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.credit)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CreditIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CreditIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3CustomfilterQueryKey() {
  return ['api', '/api/v3/customfilter'] as const
}

export function getApiV3CustomfilterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomfilterQueryKey>
  >({
    queryKey: getApiV3CustomfilterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customfilter.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Customfilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomfilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CustomfilterQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Customfilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomfilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CustomfilterQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3CustomfilterMutationKey() {
  return ['api', '/api/v3/customfilter', 'POST'] as const
}

export function getPostApiV3CustomfilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.customfilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CustomfilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customfilter.$post>) {
      return parseResponse(client.api.v3.customfilter.$post(args, options))
    },
  })
}

export function usePostApiV3Customfilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customfilter.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.customfilter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3CustomfilterMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomfilterIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
) {
  return ['api', '/api/v3/customfilter/:id', args] as const
}

export function getApiV3CustomfilterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomfilterIdQueryKey>
  >({
    queryKey: getApiV3CustomfilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customfilter[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3CustomfilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomfilterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CustomfilterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3CustomfilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomfilterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CustomfilterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3CustomfilterIdMutationKey() {
  return ['api', '/api/v3/customfilter/:id', 'PUT'] as const
}

export function getPutApiV3CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomfilterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>) {
      return parseResponse(client.api.v3.customfilter[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.customfilter)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3CustomfilterIdMutationKey() {
  return ['api', '/api/v3/customfilter/:id', 'DELETE'] as const
}

export function getDeleteApiV3CustomfilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomfilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.customfilter[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3CustomfilterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customfilter)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.customfilter)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3CustomfilterIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomformatQueryKey() {
  return ['api', '/api/v3/customformat'] as const
}

export function getApiV3CustomformatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatQueryKey>
  >({
    queryKey: getApiV3CustomformatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customformat.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Customformat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomformatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CustomformatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Customformat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomformatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CustomformatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3CustomformatMutationKey() {
  return ['api', '/api/v3/customformat', 'POST'] as const
}

export function getPostApiV3CustomformatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3CustomformatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.$post>) {
      return parseResponse(client.api.v3.customformat.$post(args, options))
    },
  })
}

export function usePostApiV3Customformat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.customformat.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3CustomformatMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomformatIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
) {
  return ['api', '/api/v3/customformat/:id', args] as const
}

export function getApiV3CustomformatIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatIdQueryKey>
  >({
    queryKey: getApiV3CustomformatIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customformat[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3CustomformatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomformatIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CustomformatIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3CustomformatId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomformatIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CustomformatIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3CustomformatIdMutationKey() {
  return ['api', '/api/v3/customformat/:id', 'PUT'] as const
}

export function getPutApiV3CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomformatIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>) {
      return parseResponse(client.api.v3.customformat[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.customformat)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3CustomformatIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3CustomformatIdMutationKey() {
  return ['api', '/api/v3/customformat/:id', 'DELETE'] as const
}

export function getDeleteApiV3CustomformatIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomformatIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.customformat[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3CustomformatId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.customformat)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.customformat)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3CustomformatIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3CustomformatBulkMutationKey() {
  return ['api', '/api/v3/customformat/bulk', 'PUT'] as const
}

export function getPutApiV3CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.bulk.$put>) {
      return parseResponse(client.api.v3.customformat.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.customformat.bulk.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3CustomformatBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3CustomformatBulkMutationKey() {
  return ['api', '/api/v3/customformat/bulk', 'DELETE'] as const
}

export function getDeleteApiV3CustomformatBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.customformat.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3CustomformatBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.customformat.bulk.$delete>) {
      return parseResponse(client.api.v3.customformat.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3CustomformatBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.customformat.bulk.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.customformat.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3CustomformatBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3CustomformatSchemaQueryKey() {
  return ['api', '/api/v3/customformat/schema'] as const
}

export function getApiV3CustomformatSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3CustomformatSchemaQueryKey>
  >({
    queryKey: getApiV3CustomformatSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.customformat.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3CustomformatSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomformatSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3CustomformatSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3CustomformatSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.customformat.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3CustomformatSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3CustomformatSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3WantedCutoffQueryKey(
  args: InferRequestType<typeof client.api.v3.wanted.cutoff.$get>,
) {
  return ['api', '/api/v3/wanted/cutoff', args] as const
}

export function getApiV3WantedCutoffQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.wanted.cutoff.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedCutoffQueryKey>
  >({
    queryKey: getApiV3WantedCutoffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.wanted.cutoff.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3WantedCutoff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.wanted.cutoff.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3WantedCutoffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3WantedCutoffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3WantedCutoff<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.wanted.cutoff.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.cutoff.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3WantedCutoffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3WantedCutoffQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3DelayprofileQueryKey() {
  return ['api', '/api/v3/delayprofile'] as const
}

export function getApiV3DelayprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DelayprofileQueryKey>
  >({
    queryKey: getApiV3DelayprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.delayprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Delayprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DelayprofileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3DelayprofileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Delayprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DelayprofileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3DelayprofileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3DelayprofileMutationKey() {
  return ['api', '/api/v3/delayprofile', 'POST'] as const
}

export function getPostApiV3DelayprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.delayprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DelayprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.delayprofile.$post>) {
      return parseResponse(client.api.v3.delayprofile.$post(args, options))
    },
  })
}

export function usePostApiV3Delayprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.delayprofile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.delayprofile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3DelayprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DelayprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
) {
  return ['api', '/api/v3/delayprofile/:id', args] as const
}

export function getApiV3DelayprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DelayprofileIdQueryKey>
  >({
    queryKey: getApiV3DelayprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.delayprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3DelayprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DelayprofileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3DelayprofileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3DelayprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DelayprofileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3DelayprofileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3DelayprofileIdMutationKey() {
  return ['api', '/api/v3/delayprofile/:id', 'PUT'] as const
}

export function getPutApiV3DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DelayprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.delayprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3DelayprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3DelayprofileIdMutationKey() {
  return ['api', '/api/v3/delayprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3DelayprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DelayprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.delayprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3DelayprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.delayprofile)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.delayprofile)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3DelayprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3DelayprofileReorderIdMutationKey() {
  return ['api', '/api/v3/delayprofile/reorder/:id', 'PUT'] as const
}

export function getPutApiV3DelayprofileReorderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DelayprofileReorderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.delayprofile.reorder[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3DelayprofileReorderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.delayprofile.reorder)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3DelayprofileReorderIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DiskspaceQueryKey() {
  return ['api', '/api/v3/diskspace'] as const
}

export function getApiV3DiskspaceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DiskspaceQueryKey>
  >({
    queryKey: getApiV3DiskspaceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.diskspace.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Diskspace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DiskspaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3DiskspaceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Diskspace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.diskspace.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DiskspaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3DiskspaceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3DownloadclientQueryKey() {
  return ['api', '/api/v3/downloadclient'] as const
}

export function getApiV3DownloadclientQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientQueryKey>
  >({
    queryKey: getApiV3DownloadclientQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Downloadclient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DownloadclientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3DownloadclientQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Downloadclient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DownloadclientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3DownloadclientQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3DownloadclientMutationKey() {
  return ['api', '/api/v3/downloadclient', 'POST'] as const
}

export function getPostApiV3DownloadclientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.$post>) {
      return parseResponse(client.api.v3.downloadclient.$post(args, options))
    },
  })
}

export function usePostApiV3Downloadclient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.downloadclient.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3DownloadclientMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DownloadclientIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
) {
  return ['api', '/api/v3/downloadclient/:id', args] as const
}

export function getApiV3DownloadclientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientIdQueryKey>
  >({
    queryKey: getApiV3DownloadclientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.downloadclient[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3DownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DownloadclientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3DownloadclientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3DownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DownloadclientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3DownloadclientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3DownloadclientIdMutationKey() {
  return ['api', '/api/v3/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV3DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DownloadclientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>) {
      return parseResponse(client.api.v3.downloadclient[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3DownloadclientIdMutationKey() {
  return ['api', '/api/v3/downloadclient/:id', 'DELETE'] as const
}

export function getDeleteApiV3DownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.downloadclient[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3DownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.downloadclient)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.downloadclient)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3DownloadclientIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3DownloadclientBulkMutationKey() {
  return ['api', '/api/v3/downloadclient/bulk', 'PUT'] as const
}

export function getPutApiV3DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>) {
      return parseResponse(client.api.v3.downloadclient.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.downloadclient.bulk.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3DownloadclientBulkMutationKey() {
  return ['api', '/api/v3/downloadclient/bulk', 'DELETE'] as const
}

export function getDeleteApiV3DownloadclientBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3DownloadclientBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>) {
      return parseResponse(client.api.v3.downloadclient.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3DownloadclientBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.downloadclient.bulk.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.downloadclient.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3DownloadclientBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3DownloadclientSchemaQueryKey() {
  return ['api', '/api/v3/downloadclient/schema'] as const
}

export function getApiV3DownloadclientSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3DownloadclientSchemaQueryKey>
  >({
    queryKey: getApiV3DownloadclientSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.downloadclient.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3DownloadclientSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DownloadclientSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3DownloadclientSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3DownloadclientSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.downloadclient.schema.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DownloadclientSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3DownloadclientSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3DownloadclientTestMutationKey() {
  return ['api', '/api/v3/downloadclient/test', 'POST'] as const
}

export function getPostApiV3DownloadclientTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v3.downloadclient.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.downloadclient.test.$post>) {
      return parseResponse(client.api.v3.downloadclient.test.$post(args, options))
    },
  })
}

export function usePostApiV3DownloadclientTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.downloadclient.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v3.downloadclient.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3DownloadclientTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3DownloadclientTestallMutationKey() {
  return ['api', '/api/v3/downloadclient/testall', 'POST'] as const
}

export function getPostApiV3DownloadclientTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.downloadclient.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.downloadclient.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3DownloadclientTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.downloadclient.testall.$post>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3DownloadclientTestallMutationOptions<
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

export function getPostApiV3DownloadclientActionNameMutationKey() {
  return ['api', '/api/v3/downloadclient/action/:name', 'POST'] as const
}

export function getPostApiV3DownloadclientActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3DownloadclientActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.downloadclient.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3DownloadclientActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.downloadclient.action)[':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3DownloadclientActionNameMutationOptions<
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

export function getApiV3ConfigDownloadclientQueryKey() {
  return ['api', '/api/v3/config/downloadclient'] as const
}

export function getApiV3ConfigDownloadclientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigDownloadclientQueryKey>
  >({
    queryKey: getApiV3ConfigDownloadclientQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.downloadclient.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigDownloadclient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigDownloadclientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigDownloadclientQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigDownloadclient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.config.downloadclient.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigDownloadclientQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigDownloadclientQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigDownloadclientIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/downloadclient/:id', args] as const
}

export function getApiV3ConfigDownloadclientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigDownloadclientIdQueryKey>
  >({
    queryKey: getApiV3ConfigDownloadclientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.downloadclient[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigDownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigDownloadclientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3ConfigDownloadclientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigDownloadclientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigDownloadclientIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3ConfigDownloadclientIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3ConfigDownloadclientIdMutationKey() {
  return ['api', '/api/v3/config/downloadclient/:id', 'PUT'] as const
}

export function getPutApiV3ConfigDownloadclientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigDownloadclientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.downloadclient[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigDownloadclientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.downloadclient)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigDownloadclientIdMutationOptions<
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

export function getApiV3ExtrafileQueryKey(
  args: InferRequestType<typeof client.api.v3.extrafile.$get>,
) {
  return ['api', '/api/v3/extrafile', args] as const
}

export function getApiV3ExtrafileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.extrafile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExtrafileQueryKey>
  >({
    queryKey: getApiV3ExtrafileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.extrafile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Extrafile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.extrafile.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExtrafileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ExtrafileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Extrafile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.extrafile.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.extrafile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExtrafileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ExtrafileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3FilesystemQueryKey(
  args: InferRequestType<typeof client.api.v3.filesystem.$get>,
) {
  return ['api', '/api/v3/filesystem', args] as const
}

export function getApiV3FilesystemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.filesystem.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemQueryKey>
  >({
    queryKey: getApiV3FilesystemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.filesystem.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Filesystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FilesystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3FilesystemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Filesystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FilesystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3FilesystemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3FilesystemTypeQueryKey(
  args: InferRequestType<typeof client.api.v3.filesystem.type.$get>,
) {
  return ['api', '/api/v3/filesystem/type', args] as const
}

export function getApiV3FilesystemTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.type.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemTypeQueryKey>
  >({
    queryKey: getApiV3FilesystemTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.filesystem.type.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3FilesystemType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.type.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FilesystemTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3FilesystemTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3FilesystemType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.type.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.type.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FilesystemTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3FilesystemTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3FilesystemMediafilesQueryKey(
  args: InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
) {
  return ['api', '/api/v3/filesystem/mediafiles', args] as const
}

export function getApiV3FilesystemMediafilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FilesystemMediafilesQueryKey>
  >({
    queryKey: getApiV3FilesystemMediafilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.filesystem.mediafiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3FilesystemMediafiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FilesystemMediafilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3FilesystemMediafilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3FilesystemMediafiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.filesystem.mediafiles.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.filesystem.mediafiles.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FilesystemMediafilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3FilesystemMediafilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3HealthQueryKey() {
  return ['api', '/api/v3/health'] as const
}

export function getApiV3HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HealthQueryKey>
  >({
    queryKey: getApiV3HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3HealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3HealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3HistoryQueryKey(args: InferRequestType<typeof client.api.v3.history.$get>) {
  return ['api', '/api/v3/history', args] as const
}

export function getApiV3HistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistoryQueryKey>
  >({
    queryKey: getApiV3HistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.history.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3HistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3HistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3HistorySinceQueryKey(
  args: InferRequestType<typeof client.api.v3.history.since.$get>,
) {
  return ['api', '/api/v3/history/since', args] as const
}

export function getApiV3HistorySinceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.history.since.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistorySinceQueryKey>
  >({
    queryKey: getApiV3HistorySinceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.history.since.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3HistorySince<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.history.since.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistorySinceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3HistorySinceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3HistorySince<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.history.since.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.since.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistorySinceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3HistorySinceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3HistoryMovieQueryKey(
  args: InferRequestType<typeof client.api.v3.history.movie.$get>,
) {
  return ['api', '/api/v3/history/movie', args] as const
}

export function getApiV3HistoryMovieQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.history.movie.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3HistoryMovieQueryKey>
  >({
    queryKey: getApiV3HistoryMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.history.movie.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3HistoryMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.history.movie.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistoryMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3HistoryMovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3HistoryMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.history.movie.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.history.movie.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3HistoryMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3HistoryMovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3HistoryFailedIdMutationKey() {
  return ['api', '/api/v3/history/failed/:id', 'POST'] as const
}

export function getPostApiV3HistoryFailedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.history.failed)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3HistoryFailedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
    ) {
      return parseResponse(client.api.v3.history.failed[':id'].$post(args, options))
    },
  })
}

export function usePostApiV3HistoryFailedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.history.failed)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.history.failed)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3HistoryFailedIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigHostQueryKey() {
  return ['api', '/api/v3/config/host'] as const
}

export function getApiV3ConfigHostQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigHostQueryKey>
  >({
    queryKey: getApiV3ConfigHostQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.host.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigHostQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigHostQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.host.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigHostQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigHostQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigHostIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/host/:id', args] as const
}

export function getApiV3ConfigHostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigHostIdQueryKey>
  >({
    queryKey: getApiV3ConfigHostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.host[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigHostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigHostIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigHostIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigHostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigHostIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigHostIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3ConfigHostIdMutationKey() {
  return ['api', '/api/v3/config/host/:id', 'PUT'] as const
}

export function getPutApiV3ConfigHostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigHostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.host[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigHostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.host)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.host)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigHostIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistQueryKey() {
  return ['api', '/api/v3/importlist'] as const
}

export function getApiV3ImportlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistQueryKey>
  >({
    queryKey: getApiV3ImportlistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Importlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ImportlistQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Importlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ImportlistQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ImportlistMutationKey() {
  return ['api', '/api/v3/importlist', 'POST'] as const
}

export function getPostApiV3ImportlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.$post>) {
      return parseResponse(client.api.v3.importlist.$post(args, options))
    },
  })
}

export function usePostApiV3Importlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.importlist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ImportlistMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
) {
  return ['api', '/api/v3/importlist/:id', args] as const
}

export function getApiV3ImportlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistIdQueryKey>
  >({
    queryKey: getApiV3ImportlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlist[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ImportlistIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ImportlistIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3ImportlistIdMutationKey() {
  return ['api', '/api/v3/importlist/:id', 'PUT'] as const
}

export function getPutApiV3ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>) {
      return parseResponse(client.api.v3.importlist[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.importlist)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ImportlistIdMutationKey() {
  return ['api', '/api/v3/importlist/:id', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>) {
      return parseResponse(client.api.v3.importlist[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3ImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.importlist)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.importlist)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3ImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3ImportlistBulkMutationKey() {
  return ['api', '/api/v3/importlist/bulk', 'PUT'] as const
}

export function getPutApiV3ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.bulk.$put>) {
      return parseResponse(client.api.v3.importlist.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.importlist.bulk.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ImportlistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ImportlistBulkMutationKey() {
  return ['api', '/api/v3/importlist/bulk', 'DELETE'] as const
}

export function getDeleteApiV3ImportlistBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ImportlistBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.bulk.$delete>) {
      return parseResponse(client.api.v3.importlist.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3ImportlistBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.bulk.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.importlist.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3ImportlistBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistSchemaQueryKey() {
  return ['api', '/api/v3/importlist/schema'] as const
}

export function getApiV3ImportlistSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistSchemaQueryKey>
  >({
    queryKey: getApiV3ImportlistSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlist.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ImportlistSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ImportlistSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ImportlistSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ImportlistSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ImportlistTestMutationKey() {
  return ['api', '/api/v3/importlist/test', 'POST'] as const
}

export function getPostApiV3ImportlistTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v3.importlist.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.test.$post>) {
      return parseResponse(client.api.v3.importlist.test.$post(args, options))
    },
  })
}

export function usePostApiV3ImportlistTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.test.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v3.importlist.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ImportlistTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ImportlistTestallMutationKey() {
  return ['api', '/api/v3/importlist/testall', 'POST'] as const
}

export function getPostApiV3ImportlistTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.importlist.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3ImportlistTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.testall.$post>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ImportlistTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ImportlistActionNameMutationKey() {
  return ['api', '/api/v3/importlist/action/:name', 'POST'] as const
}

export function getPostApiV3ImportlistActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.importlist.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.importlist.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3ImportlistActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.importlist.action)[':name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.importlist.action)[':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ImportlistActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigImportlistQueryKey() {
  return ['api', '/api/v3/config/importlist'] as const
}

export function getApiV3ConfigImportlistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigImportlistQueryKey>
  >({
    queryKey: getApiV3ConfigImportlistQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.importlist.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigImportlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigImportlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigImportlistQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigImportlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.importlist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigImportlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigImportlistQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigImportlistIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/importlist/:id', args] as const
}

export function getApiV3ConfigImportlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigImportlistIdQueryKey>
  >({
    queryKey: getApiV3ConfigImportlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.importlist[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigImportlistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3ConfigImportlistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigImportlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigImportlistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3ConfigImportlistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3ConfigImportlistIdMutationKey() {
  return ['api', '/api/v3/config/importlist/:id', 'PUT'] as const
}

export function getPutApiV3ConfigImportlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigImportlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.importlist[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigImportlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.importlist)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.importlist)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigImportlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ExclusionsQueryKey() {
  return ['api', '/api/v3/exclusions'] as const
}

export function getApiV3ExclusionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExclusionsQueryKey>
  >({
    queryKey: getApiV3ExclusionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.exclusions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Exclusions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExclusionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ExclusionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Exclusions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExclusionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ExclusionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ExclusionsMutationKey() {
  return ['api', '/api/v3/exclusions', 'POST'] as const
}

export function getPostApiV3ExclusionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.exclusions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ExclusionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.exclusions.$post>) {
      return parseResponse(client.api.v3.exclusions.$post(args, options))
    },
  })
}

export function usePostApiV3Exclusions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.exclusions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ExclusionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ExclusionsPagedQueryKey(
  args: InferRequestType<typeof client.api.v3.exclusions.paged.$get>,
) {
  return ['api', '/api/v3/exclusions/paged', args] as const
}

export function getApiV3ExclusionsPagedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.exclusions.paged.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExclusionsPagedQueryKey>
  >({
    queryKey: getApiV3ExclusionsPagedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.exclusions.paged.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ExclusionsPaged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.exclusions.paged.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExclusionsPagedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ExclusionsPagedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ExclusionsPaged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.exclusions.paged.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.paged.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExclusionsPagedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ExclusionsPagedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ExclusionsIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$get']>,
) {
  return ['api', '/api/v3/exclusions/:id', args] as const
}

export function getApiV3ExclusionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ExclusionsIdQueryKey>
  >({
    queryKey: getApiV3ExclusionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.exclusions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ExclusionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExclusionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ExclusionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ExclusionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ExclusionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ExclusionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3ExclusionsIdMutationKey() {
  return ['api', '/api/v3/exclusions/:id', 'PUT'] as const
}

export function getPutApiV3ExclusionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.exclusions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ExclusionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$put']>) {
      return parseResponse(client.api.v3.exclusions[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ExclusionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.exclusions)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ExclusionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ExclusionsIdMutationKey() {
  return ['api', '/api/v3/exclusions/:id', 'DELETE'] as const
}

export function getDeleteApiV3ExclusionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.exclusions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ExclusionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.exclusions)[':id']['$delete']>) {
      return parseResponse(client.api.v3.exclusions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3ExclusionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.exclusions)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.exclusions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3ExclusionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ExclusionsBulkMutationKey() {
  return ['api', '/api/v3/exclusions/bulk', 'POST'] as const
}

export function getPostApiV3ExclusionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.exclusions.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ExclusionsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.exclusions.bulk.$post>) {
      return parseResponse(client.api.v3.exclusions.bulk.$post(args, options))
    },
  })
}

export function usePostApiV3ExclusionsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.exclusions.bulk.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ExclusionsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ExclusionsBulkMutationKey() {
  return ['api', '/api/v3/exclusions/bulk', 'DELETE'] as const
}

export function getDeleteApiV3ExclusionsBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.exclusions.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ExclusionsBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.exclusions.bulk.$delete>) {
      return parseResponse(client.api.v3.exclusions.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3ExclusionsBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.exclusions.bulk.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.exclusions.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3ExclusionsBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ImportlistMovieQueryKey(
  args: InferRequestType<typeof client.api.v3.importlist.movie.$get>,
) {
  return ['api', '/api/v3/importlist/movie', args] as const
}

export function getApiV3ImportlistMovieQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.importlist.movie.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ImportlistMovieQueryKey>
  >({
    queryKey: getApiV3ImportlistMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.importlist.movie.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ImportlistMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.importlist.movie.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ImportlistMovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ImportlistMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.importlist.movie.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ImportlistMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ImportlistMovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ImportlistMovieMutationKey() {
  return ['api', '/api/v3/importlist/movie', 'POST'] as const
}

export function getPostApiV3ImportlistMovieMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.importlist.movie.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ImportlistMovieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.importlist.movie.$post>) {
      return parseResponse(client.api.v3.importlist.movie.$post(args, options))
    },
  })
}

export function usePostApiV3ImportlistMovie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.importlist.movie.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.importlist.movie.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ImportlistMovieMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3IndexerQueryKey() {
  return ['api', '/api/v3/indexer'] as const
}

export function getApiV3IndexerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerQueryKey>
  >({
    queryKey: getApiV3IndexerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexer.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Indexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3IndexerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Indexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3IndexerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3IndexerMutationKey() {
  return ['api', '/api/v3/indexer', 'POST'] as const
}

export function getPostApiV3IndexerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.$post>) {
      return parseResponse(client.api.v3.indexer.$post(args, options))
    },
  })
}

export function usePostApiV3Indexer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.indexer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3IndexerMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3IndexerIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
) {
  return ['api', '/api/v3/indexer/:id', args] as const
}

export function getApiV3IndexerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerIdQueryKey>
  >({
    queryKey: getApiV3IndexerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexer[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3IndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3IndexerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3IndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3IndexerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3IndexerIdMutationKey() {
  return ['api', '/api/v3/indexer/:id', 'PUT'] as const
}

export function getPutApiV3IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v3.indexer[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.indexer)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3IndexerIdMutationKey() {
  return ['api', '/api/v3/indexer/:id', 'DELETE'] as const
}

export function getDeleteApiV3IndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3IndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>) {
      return parseResponse(client.api.v3.indexer[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3IndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.indexer)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.indexer)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3IndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3IndexerBulkMutationKey() {
  return ['api', '/api/v3/indexer/bulk', 'PUT'] as const
}

export function getPutApiV3IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.bulk.$put>) {
      return parseResponse(client.api.v3.indexer.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.indexer.bulk.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3IndexerBulkMutationKey() {
  return ['api', '/api/v3/indexer/bulk', 'DELETE'] as const
}

export function getDeleteApiV3IndexerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.indexer.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3IndexerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.bulk.$delete>) {
      return parseResponse(client.api.v3.indexer.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3IndexerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.bulk.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.indexer.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3IndexerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3IndexerSchemaQueryKey() {
  return ['api', '/api/v3/indexer/schema'] as const
}

export function getApiV3IndexerSchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerSchemaQueryKey>
  >({
    queryKey: getApiV3IndexerSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexer.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3IndexerSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3IndexerSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3IndexerSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3IndexerSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3IndexerTestMutationKey() {
  return ['api', '/api/v3/indexer/test', 'POST'] as const
}

export function getPostApiV3IndexerTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v3.indexer.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.indexer.test.$post>) {
      return parseResponse(client.api.v3.indexer.test.$post(args, options))
    },
  })
}

export function usePostApiV3IndexerTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.test.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v3.indexer.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3IndexerTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3IndexerTestallMutationKey() {
  return ['api', '/api/v3/indexer/testall', 'POST'] as const
}

export function getPostApiV3IndexerTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.indexer.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3IndexerTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexer.testall.$post>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3IndexerTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3IndexerActionNameMutationKey() {
  return ['api', '/api/v3/indexer/action/:name', 'POST'] as const
}

export function getPostApiV3IndexerActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.indexer.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3IndexerActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.indexer.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3IndexerActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.indexer.action)[':name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.indexer.action)[':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3IndexerActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigIndexerQueryKey() {
  return ['api', '/api/v3/config/indexer'] as const
}

export function getApiV3ConfigIndexerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigIndexerQueryKey>
  >({
    queryKey: getApiV3ConfigIndexerQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.indexer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigIndexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigIndexerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigIndexerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigIndexer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.indexer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigIndexerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigIndexerQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigIndexerIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/indexer/:id', args] as const
}

export function getApiV3ConfigIndexerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigIndexerIdQueryKey>
  >({
    queryKey: getApiV3ConfigIndexerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.indexer[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigIndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigIndexerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigIndexerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigIndexerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigIndexerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigIndexerIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3ConfigIndexerIdMutationKey() {
  return ['api', '/api/v3/config/indexer/:id', 'PUT'] as const
}

export function getPutApiV3ConfigIndexerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigIndexerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.indexer[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigIndexerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.indexer)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.indexer)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigIndexerIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3IndexerflagQueryKey() {
  return ['api', '/api/v3/indexerflag'] as const
}

export function getApiV3IndexerflagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3IndexerflagQueryKey>
  >({
    queryKey: getApiV3IndexerflagQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.indexerflag.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Indexerflag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerflagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3IndexerflagQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Indexerflag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.indexerflag.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3IndexerflagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3IndexerflagQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LanguageQueryKey() {
  return ['api', '/api/v3/language'] as const
}

export function getApiV3LanguageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageQueryKey>
  >({
    queryKey: getApiV3LanguageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.language.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Language<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LanguageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LanguageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Language<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.language.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LanguageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LanguageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LanguageIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
) {
  return ['api', '/api/v3/language/:id', args] as const
}

export function getApiV3LanguageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LanguageIdQueryKey>
  >({
    queryKey: getApiV3LanguageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.language[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3LanguageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LanguageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LanguageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3LanguageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.language)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.language)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LanguageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LanguageIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LocalizationQueryKey() {
  return ['api', '/api/v3/localization'] as const
}

export function getApiV3LocalizationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationQueryKey>
  >({
    queryKey: getApiV3LocalizationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.localization.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Localization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LocalizationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LocalizationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Localization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LocalizationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LocalizationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LocalizationLanguageQueryKey() {
  return ['api', '/api/v3/localization/language'] as const
}

export function getApiV3LocalizationLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LocalizationLanguageQueryKey>
  >({
    queryKey: getApiV3LocalizationLanguageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.localization.language.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3LocalizationLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LocalizationLanguageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LocalizationLanguageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3LocalizationLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.localization.language.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LocalizationLanguageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LocalizationLanguageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LogQueryKey(args: InferRequestType<typeof client.api.v3.log.$get>) {
  return ['api', '/api/v3/log', args] as const
}

export function getApiV3LogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.log.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3LogQueryKey>
  >({
    queryKey: getApiV3LogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Log<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.log.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LogQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Log<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.log.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LogQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LogFileQueryKey() {
  return ['api', '/api/v3/log/file'] as const
}

export function getApiV3LogFileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileQueryKey>
  >({
    queryKey: getApiV3LogFileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3LogFile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LogFileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3LogFile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LogFileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LogFileFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
) {
  return ['api', '/api/v3/log/file/:filename', args] as const
}

export function getApiV3LogFileFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileFilenameQueryKey>
  >({
    queryKey: getApiV3LogFileFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3LogFileFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LogFileFilenameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3LogFileFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file)[':filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.log.file)[':filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LogFileFilenameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ManualimportQueryKey(
  args: InferRequestType<typeof client.api.v3.manualimport.$get>,
) {
  return ['api', '/api/v3/manualimport', args] as const
}

export function getApiV3ManualimportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.manualimport.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ManualimportQueryKey>
  >({
    queryKey: getApiV3ManualimportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.manualimport.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Manualimport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.manualimport.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ManualimportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ManualimportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Manualimport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.manualimport.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ManualimportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ManualimportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ManualimportMutationKey() {
  return ['api', '/api/v3/manualimport', 'POST'] as const
}

export function getPostApiV3ManualimportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.manualimport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ManualimportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.manualimport.$post>) {
      return parseResponse(client.api.v3.manualimport.$post(args, options))
    },
  })
}

export function usePostApiV3Manualimport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.manualimport.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.manualimport.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ManualimportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MediacoverMovieIdFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>,
) {
  return ['api', '/api/v3/mediacover/:movieId/:filename', args] as const
}

export function getApiV3MediacoverMovieIdFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MediacoverMovieIdFilenameQueryKey>
  >({
    queryKey: getApiV3MediacoverMovieIdFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.mediacover[':movieId'][':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MediacoverMovieIdFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MediacoverMovieIdFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3MediacoverMovieIdFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3MediacoverMovieIdFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v3.mediacover)[':movieId'][':filename']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MediacoverMovieIdFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3MediacoverMovieIdFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3ConfigMediamanagementQueryKey() {
  return ['api', '/api/v3/config/mediamanagement'] as const
}

export function getApiV3ConfigMediamanagementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMediamanagementQueryKey>
  >({
    queryKey: getApiV3ConfigMediamanagementQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.mediamanagement.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigMediamanagement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMediamanagementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigMediamanagementQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigMediamanagement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.config.mediamanagement.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMediamanagementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigMediamanagementQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigMediamanagementIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/mediamanagement/:id', args] as const
}

export function getApiV3ConfigMediamanagementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMediamanagementIdQueryKey>
  >({
    queryKey: getApiV3ConfigMediamanagementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.mediamanagement[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigMediamanagementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMediamanagementIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3ConfigMediamanagementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigMediamanagementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMediamanagementIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3ConfigMediamanagementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3ConfigMediamanagementIdMutationKey() {
  return ['api', '/api/v3/config/mediamanagement/:id', 'PUT'] as const
}

export function getPutApiV3ConfigMediamanagementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigMediamanagementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.mediamanagement[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigMediamanagementId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.mediamanagement)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigMediamanagementIdMutationOptions<
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

export function getApiV3MetadataQueryKey() {
  return ['api', '/api/v3/metadata'] as const
}

export function getApiV3MetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataQueryKey>
  >({
    queryKey: getApiV3MetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Metadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Metadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3MetadataMutationKey() {
  return ['api', '/api/v3/metadata', 'POST'] as const
}

export function getPostApiV3MetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.metadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.metadata.$post>) {
      return parseResponse(client.api.v3.metadata.$post(args, options))
    },
  })
}

export function usePostApiV3Metadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.metadata.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3MetadataMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MetadataIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
) {
  return ['api', '/api/v3/metadata/:id', args] as const
}

export function getApiV3MetadataIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataIdQueryKey>
  >({
    queryKey: getApiV3MetadataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.metadata[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MetadataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MetadataIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MetadataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MetadataIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3MetadataIdMutationKey() {
  return ['api', '/api/v3/metadata/:id', 'PUT'] as const
}

export function getPutApiV3MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>) {
      return parseResponse(client.api.v3.metadata[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.metadata)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3MetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MetadataIdMutationKey() {
  return ['api', '/api/v3/metadata/:id', 'DELETE'] as const
}

export function getDeleteApiV3MetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MetadataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>) {
      return parseResponse(client.api.v3.metadata[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3MetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.metadata)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.metadata)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3MetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MetadataSchemaQueryKey() {
  return ['api', '/api/v3/metadata/schema'] as const
}

export function getApiV3MetadataSchemaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MetadataSchemaQueryKey>
  >({
    queryKey: getApiV3MetadataSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.metadata.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MetadataSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MetadataSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MetadataSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MetadataSchema<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MetadataSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MetadataSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3MetadataTestMutationKey() {
  return ['api', '/api/v3/metadata/test', 'POST'] as const
}

export function getPostApiV3MetadataTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v3.metadata.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.metadata.test.$post>) {
      return parseResponse(client.api.v3.metadata.test.$post(args, options))
    },
  })
}

export function usePostApiV3MetadataTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.test.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v3.metadata.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3MetadataTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3MetadataTestallMutationKey() {
  return ['api', '/api/v3/metadata/testall', 'POST'] as const
}

export function getPostApiV3MetadataTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.metadata.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3MetadataTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.metadata.testall.$post>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3MetadataTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3MetadataActionNameMutationKey() {
  return ['api', '/api/v3/metadata/action/:name', 'POST'] as const
}

export function getPostApiV3MetadataActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.metadata.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MetadataActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.metadata.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3MetadataActionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.metadata.action)[':name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.metadata.action)[':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3MetadataActionNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigMetadataQueryKey() {
  return ['api', '/api/v3/config/metadata'] as const
}

export function getApiV3ConfigMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMetadataQueryKey>
  >({
    queryKey: getApiV3ConfigMetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.metadata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.metadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigMetadataIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/metadata/:id', args] as const
}

export function getApiV3ConfigMetadataIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigMetadataIdQueryKey>
  >({
    queryKey: getApiV3ConfigMetadataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.metadata[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigMetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMetadataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3ConfigMetadataIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigMetadataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigMetadataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3ConfigMetadataIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3ConfigMetadataIdMutationKey() {
  return ['api', '/api/v3/config/metadata/:id', 'PUT'] as const
}

export function getPutApiV3ConfigMetadataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigMetadataIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.config.metadata[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigMetadataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.metadata)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.metadata)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigMetadataIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3WantedMissingQueryKey(
  args: InferRequestType<typeof client.api.v3.wanted.missing.$get>,
) {
  return ['api', '/api/v3/wanted/missing', args] as const
}

export function getApiV3WantedMissingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.wanted.missing.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WantedMissingQueryKey>
  >({
    queryKey: getApiV3WantedMissingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.wanted.missing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3WantedMissing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.wanted.missing.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3WantedMissingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3WantedMissingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3WantedMissing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.wanted.missing.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.wanted.missing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3WantedMissingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3WantedMissingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3MovieQueryKey(args: InferRequestType<typeof client.api.v3.movie.$get>) {
  return ['api', '/api/v3/movie', args] as const
}

export function getApiV3MovieQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.movie.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieQueryKey>
  >({
    queryKey: getApiV3MovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.movie.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Movie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Movie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MovieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3MovieMutationKey() {
  return ['api', '/api/v3/movie', 'POST'] as const
}

export function getPostApiV3MovieMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MovieMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.$post>) {
      return parseResponse(client.api.v3.movie.$post(args, options))
    },
  })
}

export function usePostApiV3Movie<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.movie.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3MovieMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3MovieIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['$get']>,
) {
  return ['api', '/api/v3/movie/:id', args] as const
}

export function getApiV3MovieIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieIdQueryKey>
  >({
    queryKey: getApiV3MovieIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.movie[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3MovieId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MovieIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MovieId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MovieIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3MovieIdMutationKey() {
  return ['api', '/api/v3/movie/:id', 'PUT'] as const
}

export function getPutApiV3MovieIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.movie)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MovieIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.movie)[':id']['$put']>) {
      return parseResponse(client.api.v3.movie[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3MovieId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.movie)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3MovieIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV3MovieIdMutationKey() {
  return ['api', '/api/v3/movie/:id', 'DELETE'] as const
}

export function getDeleteApiV3MovieIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.movie)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MovieIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.movie)[':id']['$delete']>) {
      return parseResponse(client.api.v3.movie[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3MovieId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.movie)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3MovieIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3MovieEditorMutationKey() {
  return ['api', '/api/v3/movie/editor', 'PUT'] as const
}

export function getPutApiV3MovieEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MovieEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.editor.$put>) {
      return parseResponse(client.api.v3.movie.editor.$put(args, options))
    },
  })
}

export function usePutApiV3MovieEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.movie.editor.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3MovieEditorMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MovieEditorMutationKey() {
  return ['api', '/api/v3/movie/editor', 'DELETE'] as const
}

export function getDeleteApiV3MovieEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.editor.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MovieEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.editor.$delete>) {
      return parseResponse(client.api.v3.movie.editor.$delete(args, options))
    },
  })
}

export function useDeleteApiV3MovieEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.editor.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.movie.editor.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3MovieEditorMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MoviefileQueryKey(
  args: InferRequestType<typeof client.api.v3.moviefile.$get>,
) {
  return ['api', '/api/v3/moviefile', args] as const
}

export function getApiV3MoviefileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.moviefile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MoviefileQueryKey>
  >({
    queryKey: getApiV3MoviefileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.moviefile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Moviefile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.moviefile.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MoviefileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MoviefileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Moviefile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.moviefile.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MoviefileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MoviefileQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3MoviefileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$get']>,
) {
  return ['api', '/api/v3/moviefile/:id', args] as const
}

export function getApiV3MoviefileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MoviefileIdQueryKey>
  >({
    queryKey: getApiV3MoviefileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.moviefile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MoviefileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MoviefileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MoviefileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MoviefileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MoviefileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MoviefileIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3MoviefileIdMutationKey() {
  return ['api', '/api/v3/moviefile/:id', 'PUT'] as const
}

export function getPutApiV3MoviefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.moviefile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MoviefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$put']>) {
      return parseResponse(client.api.v3.moviefile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3MoviefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.moviefile)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3MoviefileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MoviefileIdMutationKey() {
  return ['api', '/api/v3/moviefile/:id', 'DELETE'] as const
}

export function getDeleteApiV3MoviefileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.moviefile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MoviefileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.moviefile)[':id']['$delete']>) {
      return parseResponse(client.api.v3.moviefile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3MoviefileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.moviefile)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.moviefile)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3MoviefileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3MoviefileEditorMutationKey() {
  return ['api', '/api/v3/moviefile/editor', 'PUT'] as const
}

export function getPutApiV3MoviefileEditorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.editor.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.moviefile.editor.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MoviefileEditorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.moviefile.editor.$put>) {
      return parseResponse(client.api.v3.moviefile.editor.$put(args, options))
    },
  })
}

export function usePutApiV3MoviefileEditor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.editor.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.moviefile.editor.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3MoviefileEditorMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV3MoviefileBulkMutationKey() {
  return ['api', '/api/v3/moviefile/bulk', 'PUT'] as const
}

export function getPutApiV3MoviefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.moviefile.bulk.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3MoviefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.moviefile.bulk.$put>) {
      return parseResponse(client.api.v3.moviefile.bulk.$put(args, options))
    },
  })
}

export function usePutApiV3MoviefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.moviefile.bulk.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3MoviefileBulkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3MoviefileBulkMutationKey() {
  return ['api', '/api/v3/moviefile/bulk', 'DELETE'] as const
}

export function getDeleteApiV3MoviefileBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.moviefile.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3MoviefileBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.moviefile.bulk.$delete>) {
      return parseResponse(client.api.v3.moviefile.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3MoviefileBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.moviefile.bulk.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.moviefile.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3MoviefileBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MovieIdFolderQueryKey(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['folder']['$get']>,
) {
  return ['api', '/api/v3/movie/:id/folder', args] as const
}

export function getApiV3MovieIdFolderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['folder']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieIdFolderQueryKey>
  >({
    queryKey: getApiV3MovieIdFolderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.movie[':id'].folder.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MovieIdFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['folder']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieIdFolderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MovieIdFolderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MovieIdFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.movie)[':id']['folder']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.movie)[':id']['folder']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieIdFolderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MovieIdFolderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3MovieImportMutationKey() {
  return ['api', '/api/v3/movie/import', 'POST'] as const
}

export function getPostApiV3MovieImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.movie.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3MovieImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.movie.import.$post>) {
      return parseResponse(client.api.v3.movie.import.$post(args, options))
    },
  })
}

export function usePostApiV3MovieImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.movie.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3MovieImportMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3MovieLookupTmdbQueryKey(
  args: InferRequestType<typeof client.api.v3.movie.lookup.tmdb.$get>,
) {
  return ['api', '/api/v3/movie/lookup/tmdb', args] as const
}

export function getApiV3MovieLookupTmdbQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.tmdb.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieLookupTmdbQueryKey>
  >({
    queryKey: getApiV3MovieLookupTmdbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.movie.lookup.tmdb.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MovieLookupTmdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.tmdb.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieLookupTmdbQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MovieLookupTmdbQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MovieLookupTmdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.tmdb.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.tmdb.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieLookupTmdbQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MovieLookupTmdbQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3MovieLookupImdbQueryKey(
  args: InferRequestType<typeof client.api.v3.movie.lookup.imdb.$get>,
) {
  return ['api', '/api/v3/movie/lookup/imdb', args] as const
}

export function getApiV3MovieLookupImdbQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.imdb.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieLookupImdbQueryKey>
  >({
    queryKey: getApiV3MovieLookupImdbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.movie.lookup.imdb.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3MovieLookupImdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.imdb.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieLookupImdbQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MovieLookupImdbQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MovieLookupImdb<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.imdb.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.imdb.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieLookupImdbQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MovieLookupImdbQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3MovieLookupQueryKey(
  args: InferRequestType<typeof client.api.v3.movie.lookup.$get>,
) {
  return ['api', '/api/v3/movie/lookup', args] as const
}

export function getApiV3MovieLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.movie.lookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3MovieLookupQueryKey>
  >({
    queryKey: getApiV3MovieLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.movie.lookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3MovieLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3MovieLookupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3MovieLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.movie.lookup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.movie.lookup.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MovieLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3MovieLookupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigNamingQueryKey() {
  return ['api', '/api/v3/config/naming'] as const
}

export function getApiV3ConfigNamingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingQueryKey>
  >({
    queryKey: getApiV3ConfigNamingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.naming.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigNaming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigNamingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigNamingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigNaming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigNamingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigNamingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigNamingIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/naming/:id', args] as const
}

export function getApiV3ConfigNamingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingIdQueryKey>
  >({
    queryKey: getApiV3ConfigNamingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.naming[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigNamingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigNamingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigNamingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigNamingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigNamingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigNamingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3ConfigNamingIdMutationKey() {
  return ['api', '/api/v3/config/naming/:id', 'PUT'] as const
}

export function getPutApiV3ConfigNamingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigNamingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.naming[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigNamingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.naming)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.naming)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigNamingIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigNamingExamplesQueryKey(
  args: InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
) {
  return ['api', '/api/v3/config/naming/examples', args] as const
}

export function getApiV3ConfigNamingExamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigNamingExamplesQueryKey>
  >({
    queryKey: getApiV3ConfigNamingExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.naming.examples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigNamingExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigNamingExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3ConfigNamingExamplesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigNamingExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.config.naming.examples.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.config.naming.examples.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigNamingExamplesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3ConfigNamingExamplesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3NotificationQueryKey() {
  return ['api', '/api/v3/notification'] as const
}

export function getApiV3NotificationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationQueryKey>
  >({
    queryKey: getApiV3NotificationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.notification.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Notification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NotificationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3NotificationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Notification<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NotificationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3NotificationQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3NotificationMutationKey() {
  return ['api', '/api/v3/notification', 'POST'] as const
}

export function getPostApiV3NotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.notification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.notification.$post>) {
      return parseResponse(client.api.v3.notification.$post(args, options))
    },
  })
}

export function usePostApiV3Notification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.notification.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3NotificationMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3NotificationIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
) {
  return ['api', '/api/v3/notification/:id', args] as const
}

export function getApiV3NotificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationIdQueryKey>
  >({
    queryKey: getApiV3NotificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.notification[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3NotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NotificationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3NotificationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3NotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.notification)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NotificationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3NotificationIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3NotificationIdMutationKey() {
  return ['api', '/api/v3/notification/:id', 'PUT'] as const
}

export function getPutApiV3NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3NotificationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>) {
      return parseResponse(client.api.v3.notification[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.notification)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3NotificationIdMutationKey() {
  return ['api', '/api/v3/notification/:id', 'DELETE'] as const
}

export function getDeleteApiV3NotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3NotificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.notification[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3NotificationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.notification)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.notification)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3NotificationIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3NotificationSchemaQueryKey() {
  return ['api', '/api/v3/notification/schema'] as const
}

export function getApiV3NotificationSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NotificationSchemaQueryKey>
  >({
    queryKey: getApiV3NotificationSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.notification.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3NotificationSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NotificationSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3NotificationSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3NotificationSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.schema.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NotificationSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3NotificationSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3NotificationTestMutationKey() {
  return ['api', '/api/v3/notification/test', 'POST'] as const
}

export function getPostApiV3NotificationTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.v3.notification.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.notification.test.$post>) {
      return parseResponse(client.api.v3.notification.test.$post(args, options))
    },
  })
}

export function usePostApiV3NotificationTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v3.notification.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.api.v3.notification.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3NotificationTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3NotificationTestallMutationKey() {
  return ['api', '/api/v3/notification/testall', 'POST'] as const
}

export function getPostApiV3NotificationTestallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.notification.testall.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationTestallMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.notification.testall.$post(undefined, options))
    },
  })
}

export function usePostApiV3NotificationTestall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.notification.testall.$post>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3NotificationTestallMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3NotificationActionNameMutationKey() {
  return ['api', '/api/v3/notification/action/:name', 'POST'] as const
}

export function getPostApiV3NotificationActionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.notification.action)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3NotificationActionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
    ) {
      return parseResponse(client.api.v3.notification.action[':name'].$post(args, options))
    },
  })
}

export function usePostApiV3NotificationActionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.notification.action)[':name']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.notification.action)[':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3NotificationActionNameMutationOptions<
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

export function getApiV3ParseQueryKey(args: InferRequestType<typeof client.api.v3.parse.$get>) {
  return ['api', '/api/v3/parse', args] as const
}

export function getApiV3ParseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.parse.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3ParseQueryKey>
  >({
    queryKey: getApiV3ParseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.parse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Parse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.parse.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ParseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ParseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Parse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.parse.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.parse.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ParseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ParseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >({
    queryKey: getPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHeadPingMutationKey() {
  return ['ping', '/ping', 'HEAD'] as const
}

export function getHeadPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadPingMutationKey(),
    async mutationFn() {
      return parseResponse(client.ping.$head(undefined, options))
    },
  })
}

export function useHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3QualitydefinitionIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
) {
  return ['api', '/api/v3/qualitydefinition/:id', args] as const
}

export function getApiV3QualitydefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionIdQueryKey>
  >({
    queryKey: getApiV3QualitydefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualitydefinition[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3QualitydefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualitydefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3QualitydefinitionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3QualitydefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualitydefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3QualitydefinitionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3QualitydefinitionIdMutationKey() {
  return ['api', '/api/v3/qualitydefinition/:id', 'PUT'] as const
}

export function getPutApiV3QualitydefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualitydefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.qualitydefinition[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3QualitydefinitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.qualitydefinition)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3QualitydefinitionIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QualitydefinitionQueryKey() {
  return ['api', '/api/v3/qualitydefinition'] as const
}

export function getApiV3QualitydefinitionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionQueryKey>
  >({
    queryKey: getApiV3QualitydefinitionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualitydefinition.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Qualitydefinition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualitydefinitionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3QualitydefinitionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Qualitydefinition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualitydefinitionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3QualitydefinitionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3QualitydefinitionUpdateMutationKey() {
  return ['api', '/api/v3/qualitydefinition/update', 'PUT'] as const
}

export function getPutApiV3QualitydefinitionUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.qualitydefinition.update.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualitydefinitionUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>) {
      return parseResponse(client.api.v3.qualitydefinition.update.$put(args, options))
    },
  })
}

export function usePutApiV3QualitydefinitionUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.qualitydefinition.update.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.qualitydefinition.update.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3QualitydefinitionUpdateMutationOptions<
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

export function getApiV3QualitydefinitionLimitsQueryKey() {
  return ['api', '/api/v3/qualitydefinition/limits'] as const
}

export function getApiV3QualitydefinitionLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualitydefinitionLimitsQueryKey>
  >({
    queryKey: getApiV3QualitydefinitionLimitsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualitydefinition.limits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3QualitydefinitionLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualitydefinitionLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3QualitydefinitionLimitsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3QualitydefinitionLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.qualitydefinition.limits.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualitydefinitionLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3QualitydefinitionLimitsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV3QualityprofileQueryKey() {
  return ['api', '/api/v3/qualityprofile'] as const
}

export function getApiV3QualityprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileQueryKey>
  >({
    queryKey: getApiV3QualityprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualityprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Qualityprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualityprofileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3QualityprofileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Qualityprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualityprofileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3QualityprofileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3QualityprofileMutationKey() {
  return ['api', '/api/v3/qualityprofile', 'POST'] as const
}

export function getPostApiV3QualityprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.qualityprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QualityprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.qualityprofile.$post>) {
      return parseResponse(client.api.v3.qualityprofile.$post(args, options))
    },
  })
}

export function usePostApiV3Qualityprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.qualityprofile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3QualityprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QualityprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
) {
  return ['api', '/api/v3/qualityprofile/:id', args] as const
}

export function getApiV3QualityprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileIdQueryKey>
  >({
    queryKey: getApiV3QualityprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualityprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3QualityprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualityprofileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3QualityprofileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3QualityprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualityprofileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3QualityprofileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3QualityprofileIdMutationKey() {
  return ['api', '/api/v3/qualityprofile/:id', 'PUT'] as const
}

export function getPutApiV3QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3QualityprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.qualityprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3QualityprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3QualityprofileIdMutationKey() {
  return ['api', '/api/v3/qualityprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3QualityprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QualityprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.qualityprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3QualityprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.qualityprofile)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3QualityprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QualityprofileSchemaQueryKey() {
  return ['api', '/api/v3/qualityprofile/schema'] as const
}

export function getApiV3QualityprofileSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QualityprofileSchemaQueryKey>
  >({
    queryKey: getApiV3QualityprofileSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.qualityprofile.schema.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3QualityprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualityprofileSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3QualityprofileSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3QualityprofileSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.qualityprofile.schema.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QualityprofileSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3QualityprofileSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV3QueueIdMutationKey() {
  return ['api', '/api/v3/queue/:id', 'DELETE'] as const
}

export function getDeleteApiV3QueueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.queue)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QueueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>) {
      return parseResponse(client.api.v3.queue[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3QueueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.queue)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.queue)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3QueueIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3QueueBulkMutationKey() {
  return ['api', '/api/v3/queue/bulk', 'DELETE'] as const
}

export function getDeleteApiV3QueueBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.bulk.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.queue.bulk.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3QueueBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.queue.bulk.$delete>) {
      return parseResponse(client.api.v3.queue.bulk.$delete(args, options))
    },
  })
}

export function useDeleteApiV3QueueBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.bulk.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.queue.bulk.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3QueueBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QueueQueryKey(args: InferRequestType<typeof client.api.v3.queue.$get>) {
  return ['api', '/api/v3/queue', args] as const
}

export function getApiV3QueueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.queue.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueQueryKey>
  >({
    queryKey: getApiV3QueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.queue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Queue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.queue.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3QueueQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Queue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.queue.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3QueueQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3QueueGrabIdMutationKey() {
  return ['api', '/api/v3/queue/grab/:id', 'POST'] as const
}

export function getPostApiV3QueueGrabIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.queue.grab)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QueueGrabIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>) {
      return parseResponse(client.api.v3.queue.grab[':id'].$post(args, options))
    },
  })
}

export function usePostApiV3QueueGrabId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.queue.grab)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.queue.grab)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3QueueGrabIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3QueueGrabBulkMutationKey() {
  return ['api', '/api/v3/queue/grab/bulk', 'POST'] as const
}

export function getPostApiV3QueueGrabBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.grab.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3QueueGrabBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>) {
      return parseResponse(client.api.v3.queue.grab.bulk.$post(args, options))
    },
  })
}

export function usePostApiV3QueueGrabBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.grab.bulk.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.queue.grab.bulk.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3QueueGrabBulkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3QueueDetailsQueryKey(
  args: InferRequestType<typeof client.api.v3.queue.details.$get>,
) {
  return ['api', '/api/v3/queue/details', args] as const
}

export function getApiV3QueueDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.queue.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueDetailsQueryKey>
  >({
    queryKey: getApiV3QueueDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.queue.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3QueueDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.queue.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QueueDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3QueueDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3QueueDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.queue.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QueueDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3QueueDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3QueueStatusQueryKey() {
  return ['api', '/api/v3/queue/status'] as const
}

export function getApiV3QueueStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3QueueStatusQueryKey>
  >({
    queryKey: getApiV3QueueStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.queue.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3QueueStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QueueStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3QueueStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3QueueStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.queue.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3QueueStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3QueueStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ReleaseQueryKey(args: InferRequestType<typeof client.api.v3.release.$get>) {
  return ['api', '/api/v3/release', args] as const
}

export function getApiV3ReleaseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.release.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseQueryKey>
  >({
    queryKey: getApiV3ReleaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.release.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Release<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.release.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ReleaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ReleaseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Release<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.release.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ReleaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ReleaseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ReleaseMutationKey() {
  return ['api', '/api/v3/release', 'POST'] as const
}

export function getPostApiV3ReleaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.release.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleaseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.release.$post>) {
      return parseResponse(client.api.v3.release.$post(args, options))
    },
  })
}

export function usePostApiV3Release<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.release.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ReleaseMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ReleaseprofileQueryKey() {
  return ['api', '/api/v3/releaseprofile'] as const
}

export function getApiV3ReleaseprofileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseprofileQueryKey>
  >({
    queryKey: getApiV3ReleaseprofileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.releaseprofile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Releaseprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ReleaseprofileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ReleaseprofileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Releaseprofile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ReleaseprofileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ReleaseprofileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3ReleaseprofileMutationKey() {
  return ['api', '/api/v3/releaseprofile', 'POST'] as const
}

export function getPostApiV3ReleaseprofileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.releaseprofile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleaseprofileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.releaseprofile.$post>) {
      return parseResponse(client.api.v3.releaseprofile.$post(args, options))
    },
  })
}

export function usePostApiV3Releaseprofile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.releaseprofile.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.releaseprofile.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ReleaseprofileMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ReleaseprofileIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
) {
  return ['api', '/api/v3/releaseprofile/:id', args] as const
}

export function getApiV3ReleaseprofileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ReleaseprofileIdQueryKey>
  >({
    queryKey: getApiV3ReleaseprofileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.releaseprofile[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ReleaseprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ReleaseprofileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3ReleaseprofileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3ReleaseprofileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ReleaseprofileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3ReleaseprofileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3ReleaseprofileIdMutationKey() {
  return ['api', '/api/v3/releaseprofile/:id', 'PUT'] as const
}

export function getPutApiV3ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ReleaseprofileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>) {
      return parseResponse(client.api.v3.releaseprofile[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3ReleaseprofileIdMutationKey() {
  return ['api', '/api/v3/releaseprofile/:id', 'DELETE'] as const
}

export function getDeleteApiV3ReleaseprofileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3ReleaseprofileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.releaseprofile[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3ReleaseprofileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.releaseprofile)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3ReleaseprofileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3ReleasePushMutationKey() {
  return ['api', '/api/v3/release/push', 'POST'] as const
}

export function getPostApiV3ReleasePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.push.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.release.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ReleasePushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.release.push.$post>) {
      return parseResponse(client.api.v3.release.push.$post(args, options))
    },
  })
}

export function usePostApiV3ReleasePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.release.push.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.release.push.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3ReleasePushMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3RemotepathmappingQueryKey() {
  return ['api', '/api/v3/remotepathmapping'] as const
}

export function getApiV3RemotepathmappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RemotepathmappingQueryKey>
  >({
    queryKey: getApiV3RemotepathmappingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.remotepathmapping.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Remotepathmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RemotepathmappingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3RemotepathmappingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Remotepathmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RemotepathmappingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3RemotepathmappingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3RemotepathmappingMutationKey() {
  return ['api', '/api/v3/remotepathmapping', 'POST'] as const
}

export function getPostApiV3RemotepathmappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v3.remotepathmapping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RemotepathmappingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.remotepathmapping.$post>) {
      return parseResponse(client.api.v3.remotepathmapping.$post(args, options))
    },
  })
}

export function usePostApiV3Remotepathmapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.remotepathmapping.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.remotepathmapping.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3RemotepathmappingMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3RemotepathmappingIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
) {
  return ['api', '/api/v3/remotepathmapping/:id', args] as const
}

export function getApiV3RemotepathmappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RemotepathmappingIdQueryKey>
  >({
    queryKey: getApiV3RemotepathmappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.remotepathmapping[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3RemotepathmappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RemotepathmappingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3RemotepathmappingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3RemotepathmappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RemotepathmappingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3RemotepathmappingIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV3RemotepathmappingIdMutationKey() {
  return ['api', '/api/v3/remotepathmapping/:id', 'PUT'] as const
}

export function getPutApiV3RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v3.remotepathmapping[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3RemotepathmappingIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV3RemotepathmappingIdMutationKey() {
  return ['api', '/api/v3/remotepathmapping/:id', 'DELETE'] as const
}

export function getDeleteApiV3RemotepathmappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3RemotepathmappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v3.remotepathmapping[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3RemotepathmappingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.remotepathmapping)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3RemotepathmappingIdMutationOptions<
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

export function getApiV3RenameQueryKey(args: InferRequestType<typeof client.api.v3.rename.$get>) {
  return ['api', '/api/v3/rename', args] as const
}

export function getApiV3RenameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.rename.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RenameQueryKey>
  >({
    queryKey: getApiV3RenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rename.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Rename<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.rename.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3RenameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Rename<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.rename.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rename.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3RenameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3RootfolderQueryKey() {
  return ['api', '/api/v3/rootfolder'] as const
}

export function getApiV3RootfolderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RootfolderQueryKey>
  >({
    queryKey: getApiV3RootfolderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rootfolder.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3Rootfolder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RootfolderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3RootfolderQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Rootfolder<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RootfolderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3RootfolderQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3RootfolderMutationKey() {
  return ['api', '/api/v3/rootfolder', 'POST'] as const
}

export function getPostApiV3RootfolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.rootfolder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RootfolderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.rootfolder.$post>) {
      return parseResponse(client.api.v3.rootfolder.$post(args, options))
    },
  })
}

export function usePostApiV3Rootfolder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rootfolder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.rootfolder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3RootfolderMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3RootfolderIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
) {
  return ['api', '/api/v3/rootfolder/:id', args] as const
}

export function getApiV3RootfolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3RootfolderIdQueryKey>
  >({
    queryKey: getApiV3RootfolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.rootfolder[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3RootfolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RootfolderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3RootfolderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3RootfolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3RootfolderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3RootfolderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV3RootfolderIdMutationKey() {
  return ['api', '/api/v3/rootfolder/:id', 'DELETE'] as const
}

export function getDeleteApiV3RootfolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3RootfolderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>) {
      return parseResponse(client.api.v3.rootfolder[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3RootfolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.rootfolder)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.rootfolder)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3RootfolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getLoggedoutQueryKey() {
  return ['loggedout', '/loggedout'] as const
}

export function getLoggedoutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggedoutQueryKey>
  >({
    queryKey: getLoggedoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.loggedout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLoggedout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLoggedoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoggedoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLoggedout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.loggedout.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLoggedoutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoggedoutQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContentPathQueryKey(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
) {
  return ['content', '/content/:path', args] as const
}

export function getContentPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentPathQueryKey>
  >({
    queryKey: getContentPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':path']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPathQueryKey(args: InferRequestType<(typeof client)[':path']['$get']>) {
  return [':path', '/:path', args] as const
}

export function getPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >({
    queryKey: getPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3SystemStatusQueryKey() {
  return ['api', '/api/v3/system/status'] as const
}

export function getApiV3SystemStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemStatusQueryKey>
  >({
    queryKey: getApiV3SystemStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3SystemStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3SystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3SystemStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3SystemRoutesQueryKey() {
  return ['api', '/api/v3/system/routes'] as const
}

export function getApiV3SystemRoutesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemRoutesQueryKey>
  >({
    queryKey: getApiV3SystemRoutesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.routes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3SystemRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemRoutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3SystemRoutesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3SystemRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemRoutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3SystemRoutesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3SystemRoutesDuplicateQueryKey() {
  return ['api', '/api/v3/system/routes/duplicate'] as const
}

export function getApiV3SystemRoutesDuplicateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemRoutesDuplicateQueryKey>
  >({
    queryKey: getApiV3SystemRoutesDuplicateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.routes.duplicate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3SystemRoutesDuplicate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemRoutesDuplicateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3SystemRoutesDuplicateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3SystemRoutesDuplicate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v3.system.routes.duplicate.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemRoutesDuplicateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3SystemRoutesDuplicateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3SystemShutdownMutationKey() {
  return ['api', '/api/v3/system/shutdown', 'POST'] as const
}

export function getPostApiV3SystemShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.shutdown.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemShutdownMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.shutdown.$post(undefined, options))
    },
  })
}

export function usePostApiV3SystemShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.shutdown.$post>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3SystemShutdownMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV3SystemRestartMutationKey() {
  return ['api', '/api/v3/system/restart', 'POST'] as const
}

export function getPostApiV3SystemRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.restart.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3SystemRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v3.system.restart.$post(undefined, options))
    },
  })
}

export function usePostApiV3SystemRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.restart.$post>>>
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3SystemRestartMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3TagQueryKey() {
  return ['api', '/api/v3/tag'] as const
}

export function getApiV3TagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3TagQueryKey>
  >({
    queryKey: getApiV3TagQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Tag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TagQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Tag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TagQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV3TagMutationKey() {
  return ['api', '/api/v3/tag', 'POST'] as const
}

export function getPostApiV3TagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v3.tag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3TagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.tag.$post>) {
      return parseResponse(client.api.v3.tag.$post(args, options))
    },
  })
}

export function usePostApiV3Tag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.tag.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV3TagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3TagIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
) {
  return ['api', '/api/v3/tag/:id', args] as const
}

export function getApiV3TagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagIdQueryKey>
  >({
    queryKey: getApiV3TagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3TagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3TagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TagIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3TagIdMutationKey() {
  return ['api', '/api/v3/tag/:id', 'PUT'] as const
}

export function getPutApiV3TagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>) {
      return parseResponse(client.api.v3.tag[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.tag)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3TagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV3TagIdMutationKey() {
  return ['api', '/api/v3/tag/:id', 'DELETE'] as const
}

export function getDeleteApiV3TagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3TagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>) {
      return parseResponse(client.api.v3.tag[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV3TagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.tag)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV3TagIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3TagDetailQueryKey() {
  return ['api', '/api/v3/tag/detail'] as const
}

export function getApiV3TagDetailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagDetailQueryKey>
  >({
    queryKey: getApiV3TagDetailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag.detail.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3TagDetail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagDetailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TagDetailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3TagDetail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.tag.detail.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagDetailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TagDetailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3TagDetailIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
) {
  return ['api', '/api/v3/tag/detail/:id', args] as const
}

export function getApiV3TagDetailIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3TagDetailIdQueryKey>
  >({
    queryKey: getApiV3TagDetailIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.tag.detail[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3TagDetailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagDetailIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3TagDetailIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3TagDetailId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.tag.detail)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.tag.detail)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3TagDetailIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3TagDetailIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3SystemTaskQueryKey() {
  return ['api', '/api/v3/system/task'] as const
}

export function getApiV3SystemTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemTaskQueryKey>
  >({
    queryKey: getApiV3SystemTaskQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.task.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3SystemTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3SystemTaskQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3SystemTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.system.task.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3SystemTaskQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3SystemTaskIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
) {
  return ['api', '/api/v3/system/task/:id', args] as const
}

export function getApiV3SystemTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SystemTaskIdQueryKey>
  >({
    queryKey: getApiV3SystemTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.system.task[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3SystemTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3SystemTaskIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3SystemTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.system.task)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.system.task)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SystemTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3SystemTaskIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3ConfigUiIdQueryKey(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
) {
  return ['api', '/api/v3/config/ui/:id', args] as const
}

export function getApiV3ConfigUiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigUiIdQueryKey>
  >({
    queryKey: getApiV3ConfigUiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.ui[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3ConfigUiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigUiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigUiIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigUiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigUiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigUiIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV3ConfigUiIdMutationKey() {
  return ['api', '/api/v3/config/ui/:id', 'PUT'] as const
}

export function getPutApiV3ConfigUiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3ConfigUiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>) {
      return parseResponse(client.api.v3.config.ui[':id'].$put(args, options))
    },
  })
}

export function usePutApiV3ConfigUiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.config.ui)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v3.config.ui)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV3ConfigUiIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ConfigUiQueryKey() {
  return ['api', '/api/v3/config/ui'] as const
}

export function getApiV3ConfigUiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigUiQueryKey>
  >({
    queryKey: getApiV3ConfigUiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.ui.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3ConfigUi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigUiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3ConfigUiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3ConfigUi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.ui.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigUiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3ConfigUiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3UpdateQueryKey() {
  return ['api', '/api/v3/update'] as const
}

export function getApiV3UpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3UpdateQueryKey>
  >({
    queryKey: getApiV3UpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.update.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV3Update<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3UpdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3UpdateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3Update<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.update.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3UpdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3UpdateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LogFileUpdateQueryKey() {
  return ['api', '/api/v3/log/file/update'] as const
}

export function getApiV3LogFileUpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileUpdateQueryKey>
  >({
    queryKey: getApiV3LogFileUpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3LogFileUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileUpdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV3LogFileUpdateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV3LogFileUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.log.file.update.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileUpdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV3LogFileUpdateQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV3LogFileUpdateFilenameQueryKey(
  args: InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
) {
  return ['api', '/api/v3/log/file/update/:filename', args] as const
}

export function getApiV3LogFileUpdateFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3LogFileUpdateFilenameQueryKey>
  >({
    queryKey: getApiV3LogFileUpdateFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.log.file.update[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV3LogFileUpdateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileUpdateFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV3LogFileUpdateFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV3LogFileUpdateFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3.log.file.update)[':filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v3.log.file.update)[':filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3LogFileUpdateFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV3LogFileUpdateFilenameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
