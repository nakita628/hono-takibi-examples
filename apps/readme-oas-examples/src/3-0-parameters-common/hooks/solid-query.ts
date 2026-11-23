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

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingIdQueryKey(
  args: InferRequestType<(typeof client.anything)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/:id', keyArgs] as const
}

export function getAnythingIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.anything)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdQueryKey>
  >({
    queryKey: getAnythingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnythingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingIdQueryKey>
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
    return { ...getAnythingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAnythingIdMutationKey() {
  return ['anything', '/anything/:id', 'POST'] as const
}

export function getPostAnythingIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':id']['$post']>) {
      return parseResponse(client.anything[':id'].$post(args, options))
    },
  })
}

export function createPostAnythingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)[':id']['$post']>,
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
    const mutationDefaults = getPostAnythingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnythingIdActionQueryKey(
  args: InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
) {
  return ['anything', '/anything/:id/:action', args] as const
}

export function getAnythingIdActionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdActionQueryKey>
  >({
    queryKey: getAnythingIdActionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'][':action'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingIdAction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)[':id'][':action']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id'][':action']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingIdActionQueryKey>
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
    return { ...getAnythingIdActionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnythingIdActionIdQueryKey(
  args: InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
) {
  return ['anything', '/anything/:id/:action/:id', args] as const
}

export function getAnythingIdActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdActionIdQueryKey>
  >({
    queryKey: getAnythingIdActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'][':action'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingIdActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)[':id'][':action'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id'][':action'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingIdActionIdQueryKey>
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
    return { ...getAnythingIdActionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnythingIdOverrideQueryKey(
  args: InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
) {
  return ['anything', '/anything/:id/override', args] as const
}

export function getAnythingIdOverrideQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingIdOverrideQueryKey>
  >({
    queryKey: getAnythingIdOverrideQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':id'].override.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingIdOverride<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)[':id']['override']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':id']['override']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingIdOverrideQueryKey>
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
    return { ...getAnythingIdOverrideQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
