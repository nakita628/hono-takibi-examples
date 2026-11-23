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

export function getPetKey() {
  return ['pet'] as const
}

export function getPetIdQueryKey(args: InferRequestType<(typeof client.pet)[':id']['$get']>) {
  return ['pet', '/pet/:id', args] as const
}

export function getPetIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.pet)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetIdQueryKey>
  >({
    queryKey: getPetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pet[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPetId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pet)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPetIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutPetIdMutationKey() {
  return ['pet', '/pet/:id', 'PUT'] as const
}

export function getPutPetIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.pet)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pet)[':id']['$put']>) {
      return parseResponse(client.pet[':id'].$put(args, options))
    },
  })
}

export function createPutPetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client.pet)[':id']['$put']>,
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
    const mutationDefaults = getPutPetIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
