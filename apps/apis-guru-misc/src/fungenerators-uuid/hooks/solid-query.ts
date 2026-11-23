import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createUuid<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.uuid.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUuidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$post>>>>>,
          TError,
          InferRequestType<typeof client.uuid.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUuidMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUuidVersionVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUuidVersionVersionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
