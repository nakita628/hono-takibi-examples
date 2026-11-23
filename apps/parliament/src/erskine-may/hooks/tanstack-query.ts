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

export function getApiKey() {
  return ['api'] as const
}

export function getApiChapterChapterNumberQueryKey(
  args: InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>,
) {
  return ['api', '/api/Chapter/:chapterNumber', args] as const
}

export function getApiChapterChapterNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiChapterChapterNumberQueryKey>
  >({
    queryKey: getApiChapterChapterNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Chapter[':chapterNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiChapterChapterNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiChapterChapterNumberQueryKey>
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
      ...getApiChapterChapterNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiChapterChapterNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiChapterChapterNumberQueryKey>
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
      ...getApiChapterChapterNumberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiIndexTermBrowseQueryKey(
  args: InferRequestType<typeof client.api.IndexTerm.browse.$get>,
) {
  return ['api', '/api/IndexTerm/browse', args] as const
}

export function getApiIndexTermBrowseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.IndexTerm.browse.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiIndexTermBrowseQueryKey>
  >({
    queryKey: getApiIndexTermBrowseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.IndexTerm.browse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiIndexTermBrowse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.IndexTerm.browse.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIndexTermBrowseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiIndexTermBrowseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiIndexTermBrowse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.IndexTerm.browse.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIndexTermBrowseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiIndexTermBrowseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiIndexTermIndexTermIdQueryKey(
  args: InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>,
) {
  return ['api', '/api/IndexTerm/:indexTermId', args] as const
}

export function getApiIndexTermIndexTermIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIndexTermIndexTermIdQueryKey>
  >({
    queryKey: getApiIndexTermIndexTermIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.IndexTerm[':indexTermId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiIndexTermIndexTermId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIndexTermIndexTermIdQueryKey>
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
      ...getApiIndexTermIndexTermIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiIndexTermIndexTermId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIndexTermIndexTermIdQueryKey>
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
      ...getApiIndexTermIndexTermIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPartQueryKey() {
  return ['api', '/api/Part'] as const
}

export function getApiPartQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPartQueryKey>
  >({
    queryKey: getApiPartQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Part.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPart<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiPartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPartQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPart<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiPartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPartQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPartPartNumberQueryKey(
  args: InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>,
) {
  return ['api', '/api/Part/:partNumber', args] as const
}

export function getApiPartPartNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartPartNumberQueryKey>
  >({
    queryKey: getApiPartPartNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Part[':partNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPartPartNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartPartNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPartPartNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPartPartNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPartPartNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPartPartNumberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSearchIndexTermSearchResultsSearchTermQueryKey(
  args: InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>,
) {
  return ['api', '/api/Search/IndexTermSearchResults/:searchTerm', args] as const
}

export function getApiSearchIndexTermSearchResultsSearchTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSearchIndexTermSearchResultsSearchTermQueryKey>
  >({
    queryKey: getApiSearchIndexTermSearchResultsSearchTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Search.IndexTermSearchResults[':searchTerm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSearchIndexTermSearchResultsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchIndexTermSearchResultsSearchTermQueryKey>
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
      ...getApiSearchIndexTermSearchResultsSearchTermQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSearchIndexTermSearchResultsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchIndexTermSearchResultsSearchTermQueryKey>
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
      ...getApiSearchIndexTermSearchResultsSearchTermQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSearchParagraphReferenceQueryKey(
  args: InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>,
) {
  return ['api', '/api/Search/Paragraph/:reference', args] as const
}

export function getApiSearchParagraphReferenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Search.Paragraph)[':reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Search.Paragraph)[':reference']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSearchParagraphReferenceQueryKey>
  >({
    queryKey: getApiSearchParagraphReferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Search.Paragraph[':reference'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSearchParagraphReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Search.Paragraph)[':reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Search.Paragraph)[':reference']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchParagraphReferenceQueryKey>
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
      ...getApiSearchParagraphReferenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSearchParagraphReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Search.Paragraph)[':reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Search.Paragraph)[':reference']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchParagraphReferenceQueryKey>
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
      ...getApiSearchParagraphReferenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSearchParagraphSearchResultsSearchTermQueryKey(
  args: InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>,
) {
  return ['api', '/api/Search/ParagraphSearchResults/:searchTerm', args] as const
}

export function getApiSearchParagraphSearchResultsSearchTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSearchParagraphSearchResultsSearchTermQueryKey>
  >({
    queryKey: getApiSearchParagraphSearchResultsSearchTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Search.ParagraphSearchResults[':searchTerm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSearchParagraphSearchResultsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchParagraphSearchResultsSearchTermQueryKey>
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
      ...getApiSearchParagraphSearchResultsSearchTermQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSearchParagraphSearchResultsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchParagraphSearchResultsSearchTermQueryKey>
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
      ...getApiSearchParagraphSearchResultsSearchTermQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSearchSectionSearchResultsSearchTermQueryKey(
  args: InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>,
) {
  return ['api', '/api/Search/SectionSearchResults/:searchTerm', args] as const
}

export function getApiSearchSectionSearchResultsSearchTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSearchSectionSearchResultsSearchTermQueryKey>
  >({
    queryKey: getApiSearchSectionSearchResultsSearchTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Search.SectionSearchResults[':searchTerm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSearchSectionSearchResultsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchSectionSearchResultsSearchTermQueryKey>
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
      ...getApiSearchSectionSearchResultsSearchTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSearchSectionSearchResultsSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSearchSectionSearchResultsSearchTermQueryKey>
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
      ...getApiSearchSectionSearchResultsSearchTermQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSectionSectionIdQueryKey(
  args: InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>,
) {
  return ['api', '/api/Section/:sectionId', args] as const
}

export function getApiSectionSectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSectionSectionIdQueryKey>
  >({
    queryKey: getApiSectionSectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Section[':sectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSectionSectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectionSectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSectionSectionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSectionSectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectionSectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSectionSectionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSectionSectionIdStepQueryKey(
  args: InferRequestType<(typeof client.api.Section)[':sectionId,{step}']['$get']>,
) {
  return ['api', '/api/Section/:sectionId,{step}', args] as const
}

export function getApiSectionSectionIdStepQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Section)[':sectionId,{step}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Section)[':sectionId,{step}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Section)[':sectionId,{step}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSectionSectionIdStepQueryKey>
  >({
    queryKey: getApiSectionSectionIdStepQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Section[':sectionId,{step}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSectionSectionIdStep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Section)[':sectionId,{step}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Section)[':sectionId,{step}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Section)[':sectionId,{step}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectionSectionIdStepQueryKey>
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
      ...getApiSectionSectionIdStepQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSectionSectionIdStep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Section)[':sectionId,{step}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Section)[':sectionId,{step}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Section)[':sectionId,{step}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectionSectionIdStepQueryKey>
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
      ...getApiSectionSectionIdStepQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
