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

export function createGroupUniqueId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupUniqueIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutGroupUniqueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGroupUniqueIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchGroupUniqueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchGroupUniqueIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
