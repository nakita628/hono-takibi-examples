import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getCookiesKey() {
  return ['cookies'] as const
}

export function getCookiesFormExplodedKey() {
  return ['cookies#formExploded'] as const
}

export function getCookiesFormNonExplodedKey() {
  return ['cookies#formNonExploded'] as const
}

export function getCookiesQueryKey(args: InferRequestType<typeof client.cookies.$get>) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies', '/cookies', keyArgs] as const
}

export function getCookiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cookies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCookiesQueryKey>
  >({
    queryKey: getCookiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cookies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cookies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCookiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCookiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cookies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCookiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCookiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCookiesFormNonExplodedQueryKey(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies#formNonExploded', '/cookies#formNonExploded', keyArgs] as const
}

export function getCookiesFormNonExplodedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesFormNonExplodedQueryKey>
  >({
    queryKey: getCookiesFormNonExplodedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cookies#formNonExploded'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCookiesFormNonExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesFormNonExplodedQueryKey>
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
      ...getCookiesFormNonExplodedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCookiesFormNonExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesFormNonExplodedQueryKey>
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
      ...getCookiesFormNonExplodedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCookiesFormExplodedQueryKey(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies#formExploded', '/cookies#formExploded', keyArgs] as const
}

export function getCookiesFormExplodedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesFormExplodedQueryKey>
  >({
    queryKey: getCookiesFormExplodedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cookies#formExploded'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCookiesFormExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesFormExplodedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCookiesFormExplodedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCookiesFormExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesFormExplodedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCookiesFormExplodedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnythingHeadersQueryKey(
  args: InferRequestType<typeof client.anything.headers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/headers', keyArgs] as const
}

export function getAnythingHeadersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.headers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingHeadersQueryKey>
  >({
    queryKey: getAnythingHeadersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.headers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnythingHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.headers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingHeadersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.headers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingHeadersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnythingHeadersSimpleQueryKey(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/headers/simple', keyArgs] as const
}

export function getAnythingHeadersSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingHeadersSimpleQueryKey>
  >({
    queryKey: getAnythingHeadersSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.headers.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingHeadersSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingHeadersSimpleQueryKey>
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
      ...getAnythingHeadersSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingHeadersSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingHeadersSimpleQueryKey>
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
      ...getAnythingHeadersSimpleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnythingHeadersSimpleMutationKey() {
  return ['anything', '/anything/headers/simple', 'POST'] as const
}

export function getPostAnythingHeadersSimpleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.anything.headers.simple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingHeadersSimpleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.headers.simple.$post>) {
      return parseResponse(client.anything.headers.simple.$post(args, options))
    },
  })
}

export function usePostAnythingHeadersSimple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.headers.simple.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingHeadersSimpleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingPathPrimitiveArrayObjectQueryKey(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
) {
  return ['anything', '/anything/path/:primitive/:array/:object', args] as const
}

export function getAnythingPathPrimitiveArrayObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathPrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathPrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingPathPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathPrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathPrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingPathPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathPrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathPrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnythingPathMatrixPrimitiveArrayObjectQueryKey(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/matrix/:primitive/:array/:object', args] as const
}

export function getAnythingPathMatrixPrimitiveArrayObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathMatrixPrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathMatrixPrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path.matrix[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingPathMatrixPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathMatrixPrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathMatrixPrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingPathMatrixPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathMatrixPrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathMatrixPrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnythingPathMatrixPrimitiveArrayObjectMutationKey() {
  return ['anything', '/anything/path/matrix/:primitive/:array/:object', 'POST'] as const
}

export function getPostAnythingPathMatrixPrimitiveArrayObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingPathMatrixPrimitiveArrayObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
      >,
    ) {
      return parseResponse(
        client.anything.path.matrix[':primitive'][':array'][':object'].$post(args, options),
      )
    },
  })
}

export function usePostAnythingPathMatrixPrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingPathMatrixPrimitiveArrayObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingPathLabelPrimitiveArrayObjectQueryKey(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/label/:primitive/:array/:object', args] as const
}

export function getAnythingPathLabelPrimitiveArrayObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathLabelPrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathLabelPrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path.label[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingPathLabelPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathLabelPrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathLabelPrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingPathLabelPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathLabelPrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathLabelPrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnythingPathLabelPrimitiveArrayObjectMutationKey() {
  return ['anything', '/anything/path/label/:primitive/:array/:object', 'POST'] as const
}

export function getPostAnythingPathLabelPrimitiveArrayObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingPathLabelPrimitiveArrayObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
      >,
    ) {
      return parseResponse(
        client.anything.path.label[':primitive'][':array'][':object'].$post(args, options),
      )
    },
  })
}

export function usePostAnythingPathLabelPrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingPathLabelPrimitiveArrayObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingPathSimplePrimitiveArrayObjectQueryKey(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/simple/:primitive/:array/:object', args] as const
}

export function getAnythingPathSimplePrimitiveArrayObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathSimplePrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathSimplePrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path.simple[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingPathSimplePrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathSimplePrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathSimplePrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingPathSimplePrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathSimplePrimitiveArrayObjectQueryKey>
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
      ...getAnythingPathSimplePrimitiveArrayObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnythingPathSimplePrimitiveArrayObjectMutationKey() {
  return ['anything', '/anything/path/simple/:primitive/:array/:object', 'POST'] as const
}

export function getPostAnythingPathSimplePrimitiveArrayObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingPathSimplePrimitiveArrayObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
      >,
    ) {
      return parseResponse(
        client.anything.path.simple[':primitive'][':array'][':object'].$post(args, options),
      )
    },
  })
}

export function usePostAnythingPathSimplePrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingPathSimplePrimitiveArrayObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingQueryQueryKey(
  args: InferRequestType<typeof client.anything.query.$get>,
) {
  return ['anything', '/anything/query', args] as const
}

export function getAnythingQueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryQueryKey>
  >({
    queryKey: getAnythingQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnythingQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnythingQueryFormQueryKey(
  args: InferRequestType<typeof client.anything.query.form.$get>,
) {
  return ['anything', '/anything/query/form', args] as const
}

export function getAnythingQueryFormQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.query.form.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryFormQueryKey>
  >({
    queryKey: getAnythingQueryFormQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.form.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnythingQueryForm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.form.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryFormQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnythingQueryFormQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnythingQueryForm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.form.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryFormQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnythingQueryFormQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAnythingQueryFormMutationKey() {
  return ['anything', '/anything/query/form', 'POST'] as const
}

export function getPostAnythingQueryFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.query.form.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingQueryFormMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.query.form.$post>) {
      return parseResponse(client.anything.query.form.$post(args, options))
    },
  })
}

export function usePostAnythingQueryForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.query.form.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingQueryFormMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingQuerySpaceDelimitedQueryKey(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
) {
  return ['anything', '/anything/query/spaceDelimited', args] as const
}

export function getAnythingQuerySpaceDelimitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQuerySpaceDelimitedQueryKey>
  >({
    queryKey: getAnythingQuerySpaceDelimitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.spaceDelimited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingQuerySpaceDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQuerySpaceDelimitedQueryKey>
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
      ...getAnythingQuerySpaceDelimitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingQuerySpaceDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQuerySpaceDelimitedQueryKey>
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
      ...getAnythingQuerySpaceDelimitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnythingQueryPipeDelimitedQueryKey(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
) {
  return ['anything', '/anything/query/pipeDelimited', args] as const
}

export function getAnythingQueryPipeDelimitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryPipeDelimitedQueryKey>
  >({
    queryKey: getAnythingQueryPipeDelimitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.pipeDelimited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingQueryPipeDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryPipeDelimitedQueryKey>
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
      ...getAnythingQueryPipeDelimitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingQueryPipeDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryPipeDelimitedQueryKey>
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
      ...getAnythingQueryPipeDelimitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnythingQueryDeepObjectQueryKey(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
) {
  return ['anything', '/anything/query/deepObject', args] as const
}

export function getAnythingQueryDeepObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryDeepObjectQueryKey>
  >({
    queryKey: getAnythingQueryDeepObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.deepObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnythingQueryDeepObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryDeepObjectQueryKey>
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
      ...getAnythingQueryDeepObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnythingQueryDeepObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryDeepObjectQueryKey>
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
      ...getAnythingQueryDeepObjectQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnythingFormDataMutationKey() {
  return ['anything', '/anything/form-data', 'POST'] as const
}

export function getPostAnythingFormDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['form-data']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['form-data']['$post']>) {
      return parseResponse(client.anything['form-data'].$post(args, options))
    },
  })
}

export function usePostAnythingFormData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAnythingFormDataFormMutationKey() {
  return ['anything', '/anything/form-data/form', 'PUT'] as const
}

export function getPutAnythingFormDataFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['form']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingFormDataFormMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['form']['$put']>,
    ) {
      return parseResponse(client.anything['form-data'].form.$put(args, options))
    },
  })
}

export function usePutAnythingFormDataForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['form']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAnythingFormDataFormMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingFormDataFormMutationKey() {
  return ['anything', '/anything/form-data/form', 'POST'] as const
}

export function getPostAnythingFormDataFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['form']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataFormMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['form']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].form.$post(args, options))
    },
  })
}

export function usePostAnythingFormDataForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['form']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataFormMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingFormDataSpaceDelimitedMutationKey() {
  return ['anything', '/anything/form-data/spaceDelimited', 'POST'] as const
}

export function getPostAnythingFormDataSpaceDelimitedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataSpaceDelimitedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].spaceDelimited.$post(args, options))
    },
  })
}

export function usePostAnythingFormDataSpaceDelimited<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataSpaceDelimitedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingFormDataPipeDelimitedMutationKey() {
  return ['anything', '/anything/form-data/pipeDelimited', 'POST'] as const
}

export function getPostAnythingFormDataPipeDelimitedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataPipeDelimitedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].pipeDelimited.$post(args, options))
    },
  })
}

export function usePostAnythingFormDataPipeDelimited<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataPipeDelimitedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingFormDataDeepObjectMutationKey() {
  return ['anything', '/anything/form-data/deepObject', 'POST'] as const
}

export function getPostAnythingFormDataDeepObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['deepObject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataDeepObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].deepObject.$post(args, options))
    },
  })
}

export function usePostAnythingFormDataDeepObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['deepObject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataDeepObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
