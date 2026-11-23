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

export function getEntitiesKey() {
  return ['entities'] as const
}

export function getErrorCodesKey() {
  return ['error-codes'] as const
}

export function getEntitiesQueryKey() {
  return ['entities', '/entities'] as const
}

export function getEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntitiesQueryKey>
  >({
    queryKey: getEntitiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntitiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEntitiesMutationKey() {
  return ['entities', '/entities', 'POST'] as const
}

export function getPostEntitiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$post>>>>>,
    TError,
    InferRequestType<typeof client.entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.entities.$post>) {
      return parseResponse(client.entities.$post(args, options))
    },
  })
}

export function createPostEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.entities.$post>,
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
    const mutationDefaults = getPostEntitiesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getErrorCodesQueryKey(
  args: InferRequestType<(typeof client)['error-codes']['$get']>,
) {
  return ['error-codes', '/error-codes', args] as const
}

export function getErrorCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['error-codes']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['error-codes']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['error-codes']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getErrorCodesQueryKey>
  >({
    queryKey: getErrorCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['error-codes'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createErrorCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['error-codes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['error-codes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['error-codes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getErrorCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getErrorCodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
