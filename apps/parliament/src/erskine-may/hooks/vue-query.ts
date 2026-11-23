import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiChapterChapterNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>,
) {
  return ['api', '/api/Chapter/:chapterNumber', toValue(args)] as const
}

export function getApiChapterChapterNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiChapterChapterNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Chapter[':chapterNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Chapter)[':chapterNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiChapterChapterNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiChapterChapterNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Chapter[':chapterNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiIndexTermBrowseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.IndexTerm.browse.$get>>,
) {
  return ['api', '/api/IndexTerm/browse', toValue(args)] as const
}

export function getApiIndexTermBrowseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.IndexTerm.browse.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIndexTermBrowseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.IndexTerm.browse.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIndexTermBrowse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.IndexTerm.browse.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>
            >
          >,
          ReturnType<typeof getApiIndexTermBrowseQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.IndexTerm.browse.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiIndexTermBrowseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIndexTermBrowseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.IndexTerm.browse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiIndexTermIndexTermIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>,
) {
  return ['api', '/api/IndexTerm/:indexTermId', toValue(args)] as const
}

export function getApiIndexTermIndexTermIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIndexTermIndexTermIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.IndexTerm[':indexTermId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.IndexTerm)[':indexTermId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiIndexTermIndexTermIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIndexTermIndexTermIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.IndexTerm[':indexTermId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPartQueryKey() {
  return ['api', '/api/Part'] as const
}

export function getApiPartQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPartQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Part.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPart<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>
          >,
          ReturnType<typeof getApiPartQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Part.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPartQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPartQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Part.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPartPartNumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>>,
) {
  return ['api', '/api/Part/:partNumber', toValue(args)] as const
}

export function getApiPartPartNumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPartPartNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Part[':partNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPartPartNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Part)[':partNumber']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPartPartNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Part)[':partNumber']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPartPartNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPartPartNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Part[':partNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSearchIndexTermSearchResultsSearchTermQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
  >,
) {
  return ['api', '/api/Search/IndexTermSearchResults/:searchTerm', toValue(args)] as const
}

export function getApiSearchIndexTermSearchResultsSearchTermQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSearchIndexTermSearchResultsSearchTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Search.IndexTermSearchResults[':searchTerm'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.Search.IndexTermSearchResults)[':searchTerm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSearchIndexTermSearchResultsSearchTermQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSearchIndexTermSearchResultsSearchTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Search.IndexTermSearchResults[':searchTerm'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSearchParagraphReferenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>
  >,
) {
  return ['api', '/api/Search/Paragraph/:reference', toValue(args)] as const
}

export function getApiSearchParagraphReferenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSearchParagraphReferenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Search.Paragraph[':reference'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.Paragraph)[':reference']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Search.Paragraph)[':reference']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSearchParagraphReferenceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSearchParagraphReferenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Search.Paragraph[':reference'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSearchParagraphSearchResultsSearchTermQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
  >,
) {
  return ['api', '/api/Search/ParagraphSearchResults/:searchTerm', toValue(args)] as const
}

export function getApiSearchParagraphSearchResultsSearchTermQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSearchParagraphSearchResultsSearchTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Search.ParagraphSearchResults[':searchTerm'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.Search.ParagraphSearchResults)[':searchTerm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSearchParagraphSearchResultsSearchTermQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSearchParagraphSearchResultsSearchTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Search.ParagraphSearchResults[':searchTerm'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSearchSectionSearchResultsSearchTermQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>
  >,
) {
  return ['api', '/api/Search/SectionSearchResults/:searchTerm', toValue(args)] as const
}

export function getApiSearchSectionSearchResultsSearchTermQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSearchSectionSearchResultsSearchTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Search.SectionSearchResults[':searchTerm'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Search.SectionSearchResults)[':searchTerm']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSearchSectionSearchResultsSearchTermQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSearchSectionSearchResultsSearchTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Search.SectionSearchResults[':searchTerm'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSectionSectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>>,
) {
  return ['api', '/api/Section/:sectionId', toValue(args)] as const
}

export function getApiSectionSectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSectionSectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Section[':sectionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSectionSectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Section)[':sectionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSectionSectionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Section)[':sectionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSectionSectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSectionSectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Section[':sectionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSectionSectionIdStepQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Section)[':sectionId,:step']['$get']>>,
) {
  return ['api', '/api/Section/:sectionId,:step', toValue(args)] as const
}

export function getApiSectionSectionIdStepQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Section)[':sectionId,:step']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSectionSectionIdStepQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Section[':sectionId,:step'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSectionSectionIdStep<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Section)[':sectionId,:step']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Section)[':sectionId,:step']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Section)[':sectionId,:step']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Section)[':sectionId,:step']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSectionSectionIdStepQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Section)[':sectionId,:step']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSectionSectionIdStepQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSectionSectionIdStepQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Section[':sectionId,:step'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
