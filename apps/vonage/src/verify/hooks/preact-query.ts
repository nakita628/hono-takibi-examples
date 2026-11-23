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

export function getCheckKey() {
  return ['check'] as const
}

export function getControlKey() {
  return ['control'] as const
}

export function getNetworkUnblockKey() {
  return ['network-unblock'] as const
}

export function getPsd2Key() {
  return ['psd2'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getFormatKey() {
  return ['{format}'] as const
}

export function getPostCheckFormatMutationKey() {
  return ['check', '/check/:format', 'POST'] as const
}

export function getPostCheckFormatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.check)[':format']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.check)[':format']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.check)[':format']['$post']>) {
      return parseResponse(client.check[':format'].$post(args, options))
    },
  })
}

export function usePostCheckFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.check)[':format']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.check)[':format']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckFormatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostControlFormatMutationKey() {
  return ['control', '/control/:format', 'POST'] as const
}

export function getPostControlFormatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.control)[':format']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.control)[':format']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostControlFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.control)[':format']['$post']>) {
      return parseResponse(client.control[':format'].$post(args, options))
    },
  })
}

export function usePostControlFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.control)[':format']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.control)[':format']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostControlFormatMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworkUnblockMutationKey() {
  return ['network-unblock', '/network-unblock', 'POST'] as const
}

export function getPostNetworkUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-unblock']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-unblock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkUnblockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-unblock']['$post']>) {
      return parseResponse(client['network-unblock'].$post(args, options))
    },
  })
}

export function usePostNetworkUnblock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['network-unblock']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-unblock']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkUnblockMutationOptions<TError, TOnMutateResult>(
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

export function getPostPsd2FormatMutationKey() {
  return ['psd2', '/psd2/:format', 'POST'] as const
}

export function getPostPsd2FormatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.psd2)[':format']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.psd2)[':format']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPsd2FormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.psd2)[':format']['$post']>) {
      return parseResponse(client.psd2[':format'].$post(args, options))
    },
  })
}

export function usePostPsd2Format<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.psd2)[':format']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.psd2)[':format']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPsd2FormatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSearchFormatQueryKey(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
) {
  return ['search', '/search/:format', args] as const
}

export function getSearchFormatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchFormatQueryKey>
  >({
    queryKey: getSearchFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFormatMutationKey() {
  return [':format', '/:format', 'POST'] as const
}

export function getPostFormatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':format']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':format']['$post']>) {
      return parseResponse(client[':format'].$post(args, options))
    },
  })
}

export function usePostFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['$post']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':format']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFormatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
