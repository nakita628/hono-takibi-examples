import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getAnythingNumbersQueryKey(
  args: InferRequestType<typeof client.anything.numbers.$get>,
) {
  return ['anything', '/anything/numbers', args] as const
}

export function getAnythingNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingNumbersQueryKey>
  >({
    queryKey: getAnythingNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnythingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.numbers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingNumbersQueryKey>
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
    return { ...getAnythingNumbersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnythingStringsQueryKey(
  args: InferRequestType<typeof client.anything.strings.$get>,
) {
  return ['anything', '/anything/strings', args] as const
}

export function getAnythingStringsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.strings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingStringsQueryKey>
  >({
    queryKey: getAnythingStringsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.strings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnythingStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.strings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingStringsQueryKey>
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
    return { ...getAnythingStringsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnythingJsonschemaFormatsQueryKey(
  args: InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>,
) {
  return ['anything', '/anything/jsonschema-formats', args] as const
}

export function getAnythingJsonschemaFormatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingJsonschemaFormatsQueryKey>
  >({
    queryKey: getAnythingJsonschemaFormatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything['jsonschema-formats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingJsonschemaFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingJsonschemaFormatsQueryKey>
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
    return {
      ...getAnythingJsonschemaFormatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnythingOasFormatsQueryKey(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
) {
  return ['anything', '/anything/oas-formats', args] as const
}

export function getAnythingOasFormatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingOasFormatsQueryKey>
  >({
    queryKey: getAnythingOasFormatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything['oas-formats'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnythingOasFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingOasFormatsQueryKey>
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
    return { ...getAnythingOasFormatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnythingBooleansQueryKey(
  args: InferRequestType<typeof client.anything.booleans.$get>,
) {
  return ['anything', '/anything/booleans', args] as const
}

export function getAnythingBooleansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.booleans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingBooleansQueryKey>
  >({
    queryKey: getAnythingBooleansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.booleans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnythingBooleans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.booleans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnythingBooleansQueryKey>
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
    return { ...getAnythingBooleansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
