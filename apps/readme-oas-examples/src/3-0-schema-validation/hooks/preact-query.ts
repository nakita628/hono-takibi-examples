import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useAnythingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.numbers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.numbers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAnythingStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingStringsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingStringsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingStringsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingStringsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAnythingJsonschemaFormats<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAnythingJsonschemaFormatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingJsonschemaFormats<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAnythingJsonschemaFormatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useAnythingOasFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingOasFormatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingOasFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)['oas-formats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingOasFormatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAnythingBooleans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.booleans.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingBooleansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingBooleansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingBooleans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.booleans.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingBooleansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingBooleansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
