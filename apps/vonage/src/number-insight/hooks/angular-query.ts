import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdvancedKey() {
  return ['advanced'] as const
}

export function getBasicKey() {
  return ['basic'] as const
}

export function getStandardKey() {
  return ['standard'] as const
}

export function getAdvancedAsyncFormatQueryKey(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
) {
  return ['advanced', '/advanced/async/:format', args] as const
}

export function getAdvancedAsyncFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedAsyncFormatQueryKey>
  >({
    queryKey: getAdvancedAsyncFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advanced.async[':format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdvancedAsyncFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedAsyncFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdvancedAsyncFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAdvancedFormatQueryKey(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
) {
  return ['advanced', '/advanced/:format', args] as const
}

export function getAdvancedFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedFormatQueryKey>
  >({
    queryKey: getAdvancedFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advanced[':format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdvancedFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdvancedFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBasicFormatQueryKey(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
) {
  return ['basic', '/basic/:format', args] as const
}

export function getBasicFormatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBasicFormatQueryKey>
  >({
    queryKey: getBasicFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.basic[':format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBasicFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBasicFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBasicFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStandardFormatQueryKey(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
) {
  return ['standard', '/standard/:format', args] as const
}

export function getStandardFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStandardFormatQueryKey>
  >({
    queryKey: getStandardFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.standard[':format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStandardFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStandardFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStandardFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
