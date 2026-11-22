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

export function getContentKey() {
  return ['content'] as const
}

export function getDocumentKey() {
  return ['document'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getContentAspectIdQueryKey(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
) {
  return ['content', '/content/:aspectId', args] as const
}

export function getContentAspectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentAspectIdQueryKey>
  >({
    queryKey: getContentAspectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content[':aspectId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContentAspectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentAspectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentAspectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentAspectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentAspectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentAspectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContentAspectIdCivixDocumentIdQueryKey(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
) {
  return ['content', '/content/:aspectId/:civixDocumentId', args] as const
}

export function getContentAspectIdCivixDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentAspectIdCivixDocumentIdQueryKey>
  >({
    queryKey: getContentAspectIdCivixDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content[':aspectId'][':civixDocumentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useContentAspectIdCivixDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentAspectIdCivixDocumentIdQueryKey>
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
      ...getContentAspectIdCivixDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseContentAspectIdCivixDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentAspectIdCivixDocumentIdQueryKey>
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
      ...getContentAspectIdCivixDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
) {
  return ['document', '/document/id/:aspectId/:civixIndexId/:civixDocumentId', args] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey>
  >({
    queryKey: getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey>
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentIdAspectIdCivixIndexIdCivixDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey>
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/search/:searchString',
    args,
  ] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey>
  >({
    queryKey: getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].search[
          ':searchString'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey
        >
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey
        >
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
) {
  return ['document', '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml', args] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey>
  >({
    queryKey: getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey>
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey>
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml/search/:searchString',
    args,
  ] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey>
  >({
    queryKey: getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.search[
          ':searchString'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey
        >
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey
        >
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
      ...getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSearchAspectIdFullsearchQueryKey(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
) {
  return ['search', '/search/:aspectId/fullsearch', args] as const
}

export function getSearchAspectIdFullsearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchAspectIdFullsearchQueryKey>
  >({
    queryKey: getSearchAspectIdFullsearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':aspectId'].fullsearch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSearchAspectIdFullsearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchAspectIdFullsearchQueryKey>
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
      ...getSearchAspectIdFullsearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchAspectIdFullsearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchAspectIdFullsearchQueryKey>
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
      ...getSearchAspectIdFullsearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
