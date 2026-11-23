import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNameKey() {
  return ['name'] as const
}

export function getSearchJsonKey() {
  return ['search.json'] as const
}

export function getNameConceptTypeSpecificConceptJsonQueryKey(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
) {
  return ['name', '/name/:concept-type/:specific-concept.json', args] as const
}

export function getNameConceptTypeSpecificConceptJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNameConceptTypeSpecificConceptJsonQueryKey>
  >({
    queryKey: getNameConceptTypeSpecificConceptJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.name[':concept-type'][':specific-concept.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNameConceptTypeSpecificConceptJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNameConceptTypeSpecificConceptJsonQueryKey>
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
      ...getNameConceptTypeSpecificConceptJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNameConceptTypeSpecificConceptJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNameConceptTypeSpecificConceptJsonQueryKey>
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
      ...getNameConceptTypeSpecificConceptJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSearchJsonQueryKey(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
) {
  return ['search.json', '/search.json', args] as const
}

export function getSearchJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['search.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchJsonQueryKey>
  >({
    queryKey: getSearchJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['search.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
