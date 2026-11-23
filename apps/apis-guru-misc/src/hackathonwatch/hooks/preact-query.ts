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

export function getHackathonsKey() {
  return ['hackathons'] as const
}

export function getSwaggerDocKey() {
  return ['swagger_doc'] as const
}

export function getSwaggerDocJsonKey() {
  return ['swagger_doc.json'] as const
}

export function getHackathonsComingJsonQueryKey(
  args: InferRequestType<(typeof client.hackathons)['coming.json']['$get']>,
) {
  return ['hackathons', '/hackathons/coming.json', args] as const
}

export function getHackathonsComingJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hackathons)['coming.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHackathonsComingJsonQueryKey>
  >({
    queryKey: getHackathonsComingJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hackathons['coming.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHackathonsComingJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hackathons)['coming.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHackathonsComingJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHackathonsComingJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHackathonsComingJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hackathons)['coming.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hackathons)['coming.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHackathonsComingJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHackathonsComingJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHackathonsIdJsonQueryKey(
  args: InferRequestType<(typeof client.hackathons)[':id.json']['$get']>,
) {
  return ['hackathons', '/hackathons/:id.json', args] as const
}

export function getHackathonsIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hackathons)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHackathonsIdJsonQueryKey>
  >({
    queryKey: getHackathonsIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hackathons[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHackathonsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hackathons)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHackathonsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHackathonsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHackathonsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hackathons)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.hackathons)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHackathonsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHackathonsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSwaggerDocJsonQueryKey() {
  return ['swagger_doc.json', '/swagger_doc.json'] as const
}

export function getSwaggerDocJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSwaggerDocJsonQueryKey>
  >({
    queryKey: getSwaggerDocJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['swagger_doc.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSwaggerDocJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSwaggerDocJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSwaggerDocJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSwaggerDocJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['swagger_doc.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSwaggerDocJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSwaggerDocJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSwaggerDocNameJsonQueryKey(
  args: InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>,
) {
  return ['swagger_doc', '/swagger_doc/:name.json', args] as const
}

export function getSwaggerDocNameJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSwaggerDocNameJsonQueryKey>
  >({
    queryKey: getSwaggerDocNameJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.swagger_doc[':name.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSwaggerDocNameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSwaggerDocNameJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSwaggerDocNameJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSwaggerDocNameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.swagger_doc)[':name.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.swagger_doc)[':name.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSwaggerDocNameJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSwaggerDocNameJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
