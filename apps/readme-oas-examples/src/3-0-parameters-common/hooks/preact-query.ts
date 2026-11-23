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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingIdQueryKey(
  args: InferRequestType<(typeof client.anything)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/:id', keyArgs] as const
}

export function getAnythingIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.anything)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdQueryKey>
  >({
    queryKey: getAnythingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnythingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAnythingIdMutationKey() {
  return ['anything', '/anything/:id', 'POST'] as const
}

export function getPostAnythingIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':id']['$post']>) {
      return parseResponse(client.anything[':id'].$post(args, options))
    },
  })
}

export function usePostAnythingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingIdActionQueryKey(
  args: InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
) {
  return ['anything', '/anything/:id/:action', args] as const
}

export function getAnythingIdActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdActionQueryKey>
  >({
    queryKey: getAnythingIdActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'][':action'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingIdActionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdActionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingIdActionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnythingIdActionIdQueryKey(
  args: InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
) {
  return ['anything', '/anything/:id/:action/:id', args] as const
}

export function getAnythingIdActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdActionIdQueryKey>
  >({
    queryKey: getAnythingIdActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'][':action'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingIdActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdActionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingIdActionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingIdActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdActionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingIdActionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnythingIdOverrideQueryKey(
  args: InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
) {
  return ['anything', '/anything/:id/override', args] as const
}

export function getAnythingIdOverrideQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdOverrideQueryKey>
  >({
    queryKey: getAnythingIdOverrideQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'].override.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingIdOverride<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdOverrideQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingIdOverrideQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingIdOverride<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdOverrideQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingIdOverrideQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
