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

export function getUuidKey() {
  return ['uuid'] as const
}

export function getUuidQueryKey(args: InferRequestType<typeof client.uuid.$get>) {
  return ['uuid', '/uuid', args] as const
}

export function getUuidQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.uuid.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUuidQueryKey>
  >({
    queryKey: getUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.uuid.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUuid<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.uuid.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUuid<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.uuid.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUuidMutationKey() {
  return ['uuid', '/uuid', 'POST'] as const
}

export function getPostUuidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$post>>>>>,
    TError,
    InferRequestType<typeof client.uuid.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUuidMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uuid.$post>) {
      return parseResponse(client.uuid.$post(args, options))
    },
  })
}

export function usePostUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$post>>>>>,
        TError,
        InferRequestType<typeof client.uuid.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUuidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUuidVersionVersionQueryKey(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
) {
  return ['uuid', '/uuid/version/:version', args] as const
}

export function getUuidVersionVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUuidVersionVersionQueryKey>
  >({
    queryKey: getUuidVersionVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.uuid.version[':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUuidVersionVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUuidVersionVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUuidVersionVersionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUuidVersionVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUuidVersionVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUuidVersionVersionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
