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

export function getMappingKey() {
  return ['mapping'] as const
}

export function getPostMappingMutationKey() {
  return ['mapping', '/mapping', 'POST'] as const
}

export function getPostMappingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mapping.$post>>>>>,
    TError,
    InferRequestType<typeof client.mapping.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMappingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mapping.$post>) {
      return parseResponse(client.mapping.$post(args, options))
    },
  })
}

export function createPostMapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mapping.$post>>>>>,
        TError,
        InferRequestType<typeof client.mapping.$post>,
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
    const mutationDefaults = getPostMappingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMappingValuesKeyQueryKey(
  args: InferRequestType<(typeof client.mapping.values)[':key']['$get']>,
) {
  return ['mapping', '/mapping/values/:key', args] as const
}

export function getMappingValuesKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mapping.values)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMappingValuesKeyQueryKey>
  >({
    queryKey: getMappingValuesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mapping.values[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMappingValuesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mapping.values)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMappingValuesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMappingValuesKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
