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

export function getWaybackKey() {
  return ['wayback'] as const
}

export function getWaybackV1AvailableQueryKey(
  args: InferRequestType<typeof client.wayback.v1.available.$get>,
) {
  return ['wayback', '/wayback/v1/available', args] as const
}

export function getWaybackV1AvailableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.wayback.v1.available.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaybackV1AvailableQueryKey>
  >({
    queryKey: getWaybackV1AvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wayback.v1.available.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWaybackV1Available<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wayback.v1.available.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWaybackV1AvailableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWaybackV1AvailableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWaybackV1Available<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.wayback.v1.available.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWaybackV1AvailableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWaybackV1AvailableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWaybackV1AvailableMutationKey() {
  return ['wayback', '/wayback/v1/available', 'POST'] as const
}

export function getPostWaybackV1AvailableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.wayback.v1.available.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWaybackV1AvailableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wayback.v1.available.$post>) {
      return parseResponse(client.wayback.v1.available.$post(args, options))
    },
  })
}

export function usePostWaybackV1Available<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wayback.v1.available.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWaybackV1AvailableMutationOptions<TError, TOnMutateResult>(
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
