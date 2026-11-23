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

export function getDisableUserKey() {
  return ['disable-user'] as const
}

export function getEnableUserKey() {
  return ['enable-user'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getRegisterKey() {
  return ['register'] as const
}

export function getServerSummariesKey() {
  return ['server-summaries'] as const
}

export function getServersKey() {
  return ['servers'] as const
}

export function getUsernameAvailableKey() {
  return ['username-available'] as const
}

export function getPostDisableUserMutationKey() {
  return ['disable-user', '/disable-user', 'POST'] as const
}

export function getPostDisableUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['disable-user']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['disable-user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDisableUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['disable-user']['$post']>) {
      return parseResponse(client['disable-user'].$post(args, options))
    },
  })
}

export function usePostDisableUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['disable-user']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['disable-user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDisableUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEnableUserMutationKey() {
  return ['enable-user', '/enable-user', 'POST'] as const
}

export function getPostEnableUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['enable-user']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['enable-user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnableUserMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['enable-user']['$post']>) {
      return parseResponse(client['enable-user'].$post(args, options))
    },
  })
}

export function usePostEnableUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['enable-user']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['enable-user']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnableUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
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

export function getPostRegisterMutationKey() {
  return ['register', '/register', 'POST'] as const
}

export function getPostRegisterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>>,
    TError,
    InferRequestType<typeof client.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.register.$post>) {
      return parseResponse(client.register.$post(args, options))
    },
  })
}

export function usePostRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegisterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getServerSummariesQueryKey() {
  return ['server-summaries', '/server-summaries'] as const
}

export function getServerSummariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['server-summaries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['server-summaries']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServerSummariesQueryKey>
  >({
    queryKey: getServerSummariesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['server-summaries'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServerSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['server-summaries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['server-summaries']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServerSummariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServerSummariesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServerSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['server-summaries']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['server-summaries']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServerSummariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServerSummariesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServersQueryKey() {
  return ['servers', '/servers'] as const
}

export function getServersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServersQueryKey>
  >({
    queryKey: getServersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsernameAvailableMutationKey() {
  return ['username-available', '/username-available', 'POST'] as const
}

export function getPostUsernameAvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['username-available']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['username-available']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsernameAvailableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['username-available']['$post']>) {
      return parseResponse(client['username-available'].$post(args, options))
    },
  })
}

export function usePostUsernameAvailable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['username-available']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['username-available']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsernameAvailableMutationOptions<TError, TOnMutateResult>(
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
