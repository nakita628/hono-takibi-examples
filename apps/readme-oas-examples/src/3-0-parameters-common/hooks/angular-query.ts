import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectAnythingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAnythingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAnythingIdAction<
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
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingIdActionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnythingIdActionId<
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
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingIdActionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnythingIdOverride<
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
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingIdOverrideQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
