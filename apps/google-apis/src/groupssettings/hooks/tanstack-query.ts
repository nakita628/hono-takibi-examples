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

export function getGroupUniqueIdKey() {
  return ['{groupUniqueId}'] as const
}

export function getGroupUniqueIdQueryKey(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
) {
  return [':groupUniqueId', '/:groupUniqueId', args] as const
}

export function getGroupUniqueIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupUniqueIdQueryKey>
  >({
    queryKey: getGroupUniqueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':groupUniqueId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupUniqueId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupUniqueIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupUniqueIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupUniqueId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupUniqueIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupUniqueIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupUniqueIdMutationKey() {
  return [':groupUniqueId', '/:groupUniqueId', 'PUT'] as const
}

export function getPutGroupUniqueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':groupUniqueId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupUniqueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':groupUniqueId']['$put']>) {
      return parseResponse(client[':groupUniqueId'].$put(args, options))
    },
  })
}

export function usePutGroupUniqueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':groupUniqueId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupUniqueIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGroupUniqueIdMutationKey() {
  return [':groupUniqueId', '/:groupUniqueId', 'PATCH'] as const
}

export function getPatchGroupUniqueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':groupUniqueId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupUniqueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':groupUniqueId']['$patch']>) {
      return parseResponse(client[':groupUniqueId'].$patch(args, options))
    },
  })
}

export function usePatchGroupUniqueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':groupUniqueId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupUniqueIdMutationOptions<TError, TOnMutateResult>(
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
