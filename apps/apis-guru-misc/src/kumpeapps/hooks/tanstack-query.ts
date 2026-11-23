import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppkeyKey() {
  return ['appkey'] as const
}

export function getAuthenticationKey() {
  return ['authentication'] as const
}

export function getAuthkeyKey() {
  return ['authkey'] as const
}

export function getKkidKey() {
  return ['kkid'] as const
}

export function getPutAppkeyMutationKey() {
  return ['appkey', '/appkey', 'PUT'] as const
}

export function getPutAppkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$put>>>>>,
    TError,
    InferRequestType<typeof client.appkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appkey.$put>) {
      return parseResponse(client.appkey.$put(args, options))
    },
  })
}

export function usePutAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$put>>>>>,
        TError,
        InferRequestType<typeof client.appkey.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAppkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppkeyMutationKey() {
  return ['appkey', '/appkey', 'POST'] as const
}

export function getPostAppkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$post>>>>>,
    TError,
    InferRequestType<typeof client.appkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appkey.$post>) {
      return parseResponse(client.appkey.$post(args, options))
    },
  })
}

export function usePostAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$post>>>>>,
        TError,
        InferRequestType<typeof client.appkey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAppkeyMutationKey() {
  return ['appkey', '/appkey', 'PATCH'] as const
}

export function getPatchAppkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$patch>>>>>,
    TError,
    InferRequestType<typeof client.appkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appkey.$patch>) {
      return parseResponse(client.appkey.$patch(args, options))
    },
  })
}

export function usePatchAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appkey.$patch>>>>>,
        TError,
        InferRequestType<typeof client.appkey.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAppkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAuthenticationAppkeyMutationKey() {
  return ['authentication', '/authentication/appkey', 'PUT'] as const
}

export function getPutAuthenticationAppkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.appkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthenticationAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.appkey.$put>) {
      return parseResponse(client.authentication.appkey.$put(args, options))
    },
  })
}

export function usePutAuthenticationAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authentication.appkey.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthenticationAppkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthenticationAppkeyMutationKey() {
  return ['authentication', '/authentication/appkey', 'POST'] as const
}

export function getPostAuthenticationAppkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.appkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.appkey.$post>) {
      return parseResponse(client.authentication.appkey.$post(args, options))
    },
  })
}

export function usePostAuthenticationAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authentication.appkey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthenticationAppkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthenticationAppkeyMutationKey() {
  return ['authentication', '/authentication/appkey', 'PATCH'] as const
}

export function getPatchAuthenticationAppkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.appkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthenticationAppkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.appkey.$patch>) {
      return parseResponse(client.authentication.appkey.$patch(args, options))
    },
  })
}

export function usePatchAuthenticationAppkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.appkey.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authentication.appkey.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthenticationAppkeyMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationAuthkeyQueryKey(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
) {
  return ['authentication', '/authentication/authkey', args] as const
}

export function getAuthenticationAuthkeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationAuthkeyQueryKey>
  >({
    queryKey: getAuthenticationAuthkeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authentication.authkey.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthenticationAuthkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationAuthkeyQueryKey>
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
      ...getAuthenticationAuthkeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthenticationAuthkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication.authkey.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationAuthkeyQueryKey>
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
      ...getAuthenticationAuthkeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAuthenticationAuthkeyMutationKey() {
  return ['authentication', '/authentication/authkey', 'PUT'] as const
}

export function getPutAuthenticationAuthkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.authkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthenticationAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.authkey.$put>) {
      return parseResponse(client.authentication.authkey.$put(args, options))
    },
  })
}

export function usePutAuthenticationAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authentication.authkey.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthenticationAuthkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthenticationAuthkeyMutationKey() {
  return ['authentication', '/authentication/authkey', 'POST'] as const
}

export function getPostAuthenticationAuthkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.authkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.authkey.$post>) {
      return parseResponse(client.authentication.authkey.$post(args, options))
    },
  })
}

export function usePostAuthenticationAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authentication.authkey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthenticationAuthkeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthenticationAuthkeyMutationKey() {
  return ['authentication', '/authentication/authkey', 'PATCH'] as const
}

export function getPatchAuthenticationAuthkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authentication.authkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthenticationAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.authkey.$patch>) {
      return parseResponse(client.authentication.authkey.$patch(args, options))
    },
  })
}

export function usePatchAuthenticationAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.authkey.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.authentication.authkey.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthenticationAuthkeyMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationVerifyotpQueryKey(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
) {
  return ['authentication', '/authentication/verifyotp', args] as const
}

export function getAuthenticationVerifyotpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationVerifyotpQueryKey>
  >({
    queryKey: getAuthenticationVerifyotpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authentication.verifyotp.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuthenticationVerifyotp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationVerifyotpQueryKey>
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
      ...getAuthenticationVerifyotpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuthenticationVerifyotp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authentication.verifyotp.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.authentication.verifyotp.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthenticationVerifyotpQueryKey>
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
      ...getAuthenticationVerifyotpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuthkeyQueryKey(args: InferRequestType<typeof client.authkey.$get>) {
  return ['authkey', '/authkey', args] as const
}

export function getAuthkeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.authkey.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthkeyQueryKey>
  >({
    queryKey: getAuthkeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authkey.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuthkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authkey.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAuthkeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuthkeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuthkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.authkey.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAuthkeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuthkeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAuthkeyMutationKey() {
  return ['authkey', '/authkey', 'PUT'] as const
}

export function getPutAuthkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$put>>>>>,
    TError,
    InferRequestType<typeof client.authkey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authkey.$put>) {
      return parseResponse(client.authkey.$put(args, options))
    },
  })
}

export function usePutAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$put>>>>>,
        TError,
        InferRequestType<typeof client.authkey.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuthkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthkeyMutationKey() {
  return ['authkey', '/authkey', 'POST'] as const
}

export function getPostAuthkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$post>>>>>,
    TError,
    InferRequestType<typeof client.authkey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authkey.$post>) {
      return parseResponse(client.authkey.$post(args, options))
    },
  })
}

export function usePostAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$post>>>>>,
        TError,
        InferRequestType<typeof client.authkey.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAuthkeyMutationKey() {
  return ['authkey', '/authkey', 'PATCH'] as const
}

export function getPatchAuthkeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$patch>>>>>,
    TError,
    InferRequestType<typeof client.authkey.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthkeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authkey.$patch>) {
      return parseResponse(client.authkey.$patch(args, options))
    },
  })
}

export function usePatchAuthkey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authkey.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.authkey.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthkeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKkidAllowanceQueryKey(
  args: InferRequestType<typeof client.kkid.allowance.$get>,
) {
  return ['kkid', '/kkid/allowance', args] as const
}

export function getKkidAllowanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kkid.allowance.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidAllowanceQueryKey>
  >({
    queryKey: getKkidAllowanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kkid.allowance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKkidAllowance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.allowance.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidAllowanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKkidAllowanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKkidAllowance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.allowance.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidAllowanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKkidAllowanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostKkidAllowanceMutationKey() {
  return ['kkid', '/kkid/allowance', 'POST'] as const
}

export function getPostKkidAllowanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.allowance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidAllowanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.allowance.$post>) {
      return parseResponse(client.kkid.allowance.$post(args, options))
    },
  })
}

export function usePostKkidAllowance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.allowance.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.allowance.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKkidAllowanceMutationOptions<TError, TOnMutateResult>(
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

export function getPostKkidApnsMutationKey() {
  return ['kkid', '/kkid/apns', 'POST'] as const
}

export function getPostKkidApnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.apns.$post>>>>>,
    TError,
    InferRequestType<typeof client.kkid.apns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidApnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.apns.$post>) {
      return parseResponse(client.kkid.apns.$post(args, options))
    },
  })
}

export function usePostKkidApns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.apns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.apns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKkidApnsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKkidChorelistQueryKey(
  args: InferRequestType<typeof client.kkid.chorelist.$get>,
) {
  return ['kkid', '/kkid/chorelist', args] as const
}

export function getKkidChorelistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kkid.chorelist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidChorelistQueryKey>
  >({
    queryKey: getKkidChorelistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kkid.chorelist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKkidChorelist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.chorelist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidChorelistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKkidChorelistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKkidChorelist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.chorelist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidChorelistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKkidChorelistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutKkidChorelistMutationKey() {
  return ['kkid', '/kkid/chorelist', 'PUT'] as const
}

export function getPutKkidChorelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.chorelist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutKkidChorelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.chorelist.$put>) {
      return parseResponse(client.kkid.chorelist.$put(args, options))
    },
  })
}

export function usePutKkidChorelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.chorelist.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutKkidChorelistMutationOptions<TError, TOnMutateResult>(
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

export function getPostKkidChorelistMutationKey() {
  return ['kkid', '/kkid/chorelist', 'POST'] as const
}

export function getPostKkidChorelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.chorelist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidChorelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.chorelist.$post>) {
      return parseResponse(client.kkid.chorelist.$post(args, options))
    },
  })
}

export function usePostKkidChorelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.chorelist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKkidChorelistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKkidChorelistMutationKey() {
  return ['kkid', '/kkid/chorelist', 'DELETE'] as const
}

export function getDeleteKkidChorelistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.chorelist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKkidChorelistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.chorelist.$delete>) {
      return parseResponse(client.kkid.chorelist.$delete(args, options))
    },
  })
}

export function useDeleteKkidChorelist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kkid.chorelist.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.kkid.chorelist.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKkidChorelistMutationOptions<TError, TOnMutateResult>(
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

export function getPostKkidMasteruserMutationKey() {
  return ['kkid', '/kkid/masteruser', 'POST'] as const
}

export function getPostKkidMasteruserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.masteruser.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.masteruser.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidMasteruserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.masteruser.$post>) {
      return parseResponse(client.kkid.masteruser.$post(args, options))
    },
  })
}

export function usePostKkidMasteruser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.masteruser.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.masteruser.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKkidMasteruserMutationOptions<TError, TOnMutateResult>(
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

export function getKkidShareQueryKey(args: InferRequestType<typeof client.kkid.share.$get>) {
  return ['kkid', '/kkid/share', args] as const
}

export function getKkidShareQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kkid.share.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKkidShareQueryKey>
  >({
    queryKey: getKkidShareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kkid.share.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKkidShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.share.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidShareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKkidShareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKkidShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.share.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.share.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidShareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKkidShareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getKkidUserQueryKey(args: InferRequestType<typeof client.kkid.user.$get>) {
  return ['kkid', '/kkid/user', args] as const
}

export function getKkidUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kkid.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKkidUserQueryKey>
  >({
    queryKey: getKkidUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kkid.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKkidUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.user.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKkidUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKkidUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.user.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.user.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKkidUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getKkidUserlistQueryKey(args: InferRequestType<typeof client.kkid.userlist.$get>) {
  return ['kkid', '/kkid/userlist', args] as const
}

export function getKkidUserlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kkid.userlist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidUserlistQueryKey>
  >({
    queryKey: getKkidUserlistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kkid.userlist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKkidUserlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.userlist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidUserlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKkidUserlistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKkidUserlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.userlist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidUserlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKkidUserlistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutKkidUserlistMutationKey() {
  return ['kkid', '/kkid/userlist', 'PUT'] as const
}

export function getPutKkidUserlistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.userlist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutKkidUserlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.userlist.$put>) {
      return parseResponse(client.kkid.userlist.$put(args, options))
    },
  })
}

export function usePutKkidUserlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.userlist.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutKkidUserlistMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostKkidUserlistMutationKey() {
  return ['kkid', '/kkid/userlist', 'POST'] as const
}

export function getPostKkidUserlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.userlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidUserlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.userlist.$post>) {
      return parseResponse(client.kkid.userlist.$post(args, options))
    },
  })
}

export function usePostKkidUserlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.userlist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKkidUserlistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKkidUserlistMutationKey() {
  return ['kkid', '/kkid/userlist', 'DELETE'] as const
}

export function getDeleteKkidUserlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.userlist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKkidUserlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.userlist.$delete>) {
      return parseResponse(client.kkid.userlist.$delete(args, options))
    },
  })
}

export function useDeleteKkidUserlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.userlist.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.userlist.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKkidUserlistMutationOptions<TError, TOnMutateResult>(
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

export function getKkidWishlistQueryKey(args: InferRequestType<typeof client.kkid.wishlist.$get>) {
  return ['kkid', '/kkid/wishlist', args] as const
}

export function getKkidWishlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kkid.wishlist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKkidWishlistQueryKey>
  >({
    queryKey: getKkidWishlistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kkid.wishlist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKkidWishlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.wishlist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidWishlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKkidWishlistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKkidWishlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kkid.wishlist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getKkidWishlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKkidWishlistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutKkidWishlistMutationKey() {
  return ['kkid', '/kkid/wishlist', 'PUT'] as const
}

export function getPutKkidWishlistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.wishlist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutKkidWishlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.wishlist.$put>) {
      return parseResponse(client.kkid.wishlist.$put(args, options))
    },
  })
}

export function usePutKkidWishlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.wishlist.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutKkidWishlistMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostKkidWishlistMutationKey() {
  return ['kkid', '/kkid/wishlist', 'POST'] as const
}

export function getPostKkidWishlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.wishlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKkidWishlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.wishlist.$post>) {
      return parseResponse(client.kkid.wishlist.$post(args, options))
    },
  })
}

export function usePostKkidWishlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.wishlist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostKkidWishlistMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteKkidWishlistMutationKey() {
  return ['kkid', '/kkid/wishlist', 'DELETE'] as const
}

export function getDeleteKkidWishlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.kkid.wishlist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKkidWishlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kkid.wishlist.$delete>) {
      return parseResponse(client.kkid.wishlist.$delete(args, options))
    },
  })
}

export function useDeleteKkidWishlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kkid.wishlist.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.kkid.wishlist.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteKkidWishlistMutationOptions<TError, TOnMutateResult>(
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
