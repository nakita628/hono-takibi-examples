import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createWaybackV1Available<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.wayback.v1.available.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWaybackV1AvailableQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWaybackV1Available<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWaybackV1AvailableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
