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

export function getRiddleKey() {
  return ['riddle'] as const
}

export function getRiddleQueryKey(args: InferRequestType<typeof client.riddle.$get>) {
  return ['riddle', '/riddle', args] as const
}

export function getRiddleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.riddle.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRiddleQueryKey>
  >({
    queryKey: getRiddleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riddle.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRiddle<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.riddle.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRiddleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRiddleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRiddle<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.riddle.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRiddleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRiddleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRiddleMutationKey() {
  return ['riddle', '/riddle', 'PUT'] as const
}

export function getPutRiddleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$put>>>>>,
    TError,
    InferRequestType<typeof client.riddle.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRiddleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.riddle.$put>) {
      return parseResponse(client.riddle.$put(args, options))
    },
  })
}

export function usePutRiddle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$put>>>>>,
        TError,
        InferRequestType<typeof client.riddle.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRiddleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRiddleMutationKey() {
  return ['riddle', '/riddle', 'POST'] as const
}

export function getPostRiddleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$post>>>>>,
    TError,
    InferRequestType<typeof client.riddle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRiddleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.riddle.$post>) {
      return parseResponse(client.riddle.$post(args, options))
    },
  })
}

export function usePostRiddle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$post>>>>>,
        TError,
        InferRequestType<typeof client.riddle.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRiddleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRiddleMutationKey() {
  return ['riddle', '/riddle', 'DELETE'] as const
}

export function getDeleteRiddleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$delete>>>>>,
    TError,
    InferRequestType<typeof client.riddle.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRiddleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.riddle.$delete>) {
      return parseResponse(client.riddle.$delete(args, options))
    },
  })
}

export function useDeleteRiddle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.riddle.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRiddleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRiddleRandomQueryKey(args: InferRequestType<typeof client.riddle.random.$get>) {
  return ['riddle', '/riddle/random', args] as const
}

export function getRiddleRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.riddle.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRiddleRandomQueryKey>
  >({
    queryKey: getRiddleRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riddle.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRiddleRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.riddle.random.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRiddleRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRiddleRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRiddleRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.riddle.random.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRiddleRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRiddleRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRiddleSearchQueryKey(args: InferRequestType<typeof client.riddle.search.$get>) {
  return ['riddle', '/riddle/search', args] as const
}

export function getRiddleSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.riddle.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRiddleSearchQueryKey>
  >({
    queryKey: getRiddleSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.riddle.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRiddleSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.riddle.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRiddleSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRiddleSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRiddleSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.riddle.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRiddleSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRiddleSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
