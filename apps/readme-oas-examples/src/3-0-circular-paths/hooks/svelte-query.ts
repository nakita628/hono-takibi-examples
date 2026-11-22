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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingQueryKey() {
  return ['anything', '/anything'] as const
}

export function getAnythingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryKey>
  >({
    queryKey: getAnythingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnything<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPutAnythingMutationKey() {
  return ['anything', '/anything', 'PUT'] as const
}

export function getPutAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>>,
    TError,
    InferRequestType<typeof client.anything.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.$put>) {
      return parseResponse(client.anything.$put(args, options))
    },
  })
}

export function createPutAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>>,
        TError,
        InferRequestType<typeof client.anything.$put>,
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
    const mutationDefaults = getPutAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAnythingMutationKey() {
  return ['anything', '/anything', 'POST'] as const
}

export function getPostAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>>,
    TError,
    InferRequestType<typeof client.anything.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.$post>) {
      return parseResponse(client.anything.$post(args, options))
    },
  })
}

export function createPostAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.anything.$post>,
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
    const mutationDefaults = getPostAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
