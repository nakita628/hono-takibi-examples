import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppKey() {
  return ['App'] as const
}

export function getCommunityContentKey() {
  return ['CommunityContent'] as const
}

export function getContentKey() {
  return ['Content'] as const
}

export function getDestiny2Key() {
  return ['Destiny2'] as const
}

export function getFireteamKey() {
  return ['Fireteam'] as const
}

export function getForumKey() {
  return ['Forum'] as const
}

export function getGetAvailableLocalesKey() {
  return ['GetAvailableLocales'] as const
}

export function getGlobalAlertsKey() {
  return ['GlobalAlerts'] as const
}

export function getGroupV2Key() {
  return ['GroupV2'] as const
}

export function getSettingsKey() {
  return ['Settings'] as const
}

export function getSocialKey() {
  return ['Social'] as const
}

export function getTokensKey() {
  return ['Tokens'] as const
}

export function getTrendingKey() {
  return ['Trending'] as const
}

export function getUserKey() {
  return ['User'] as const
}

export function getUserSystemOverridesKey() {
  return ['UserSystemOverrides'] as const
}

export function getAppApiUsageApplicationIdIndexQueryKey(
  args: InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>,
) {
  return ['App', '/App/ApiUsage/:applicationId/', args] as const
}

export function getAppApiUsageApplicationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppApiUsageApplicationIdIndexQueryKey>
  >({
    queryKey: getAppApiUsageApplicationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.App.ApiUsage[':applicationId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppApiUsageApplicationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppApiUsageApplicationIdIndexQueryKey>
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
      ...getAppApiUsageApplicationIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAppFirstPartyIndexQueryKey() {
  return ['App', '/App/FirstParty/'] as const
}

export function getAppFirstPartyIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAppFirstPartyIndexQueryKey>
  >({
    queryKey: getAppFirstPartyIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.App.FirstParty.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppFirstPartyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppFirstPartyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAppFirstPartyIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCommunityContentGetSortMediaFilterPageIndexQueryKey(
  args: InferRequestType<
    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
  >,
) {
  return ['CommunityContent', '/CommunityContent/Get/:sort/:mediaFilter/:page/', args] as const
}

export function getCommunityContentGetSortMediaFilterPageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommunityContentGetSortMediaFilterPageIndexQueryKey>
  >({
    queryKey: getCommunityContentGetSortMediaFilterPageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.CommunityContent.Get[':sort'][':mediaFilter'][':page'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommunityContentGetSortMediaFilterPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommunityContentGetSortMediaFilterPageIndexQueryKey>
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
      ...getCommunityContentGetSortMediaFilterPageIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getContentGetContentByIdIdLocaleIndexQueryKey(
  args: InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>,
) {
  return ['Content', '/Content/GetContentById/:id/:locale/', args] as const
}

export function getContentGetContentByIdIdLocaleIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentGetContentByIdIdLocaleIndexQueryKey>
  >({
    queryKey: getContentGetContentByIdIdLocaleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Content.GetContentById[':id'][':locale'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentGetContentByIdIdLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentGetContentByIdIdLocaleIndexQueryKey>
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
      ...getContentGetContentByIdIdLocaleIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey(
  args: InferRequestType<
    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
) {
  return ['Content', '/Content/GetContentByTagAndType/:tag/:type/:locale/', args] as const
}

export function getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey>
  >({
    queryKey: getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Content.GetContentByTagAndType[':tag'][':type'][':locale'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentGetContentByTagAndTypeTagTypeLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryKey>
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
      ...getContentGetContentByTagAndTypeTagTypeLocaleIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getContentGetContentTypeTypeIndexQueryKey(
  args: InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>,
) {
  return ['Content', '/Content/GetContentType/:type/', args] as const
}

export function getContentGetContentTypeTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentGetContentTypeTypeIndexQueryKey>
  >({
    queryKey: getContentGetContentTypeTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Content.GetContentType[':type'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentGetContentTypeTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentGetContentTypeTypeIndexQueryKey>
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
      ...getContentGetContentTypeTypeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContentRssNewsArticlesPageTokenIndexQueryKey(
  args: InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>,
) {
  return ['Content', '/Content/Rss/NewsArticles/:pageToken/', args] as const
}

export function getContentRssNewsArticlesPageTokenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentRssNewsArticlesPageTokenIndexQueryKey>
  >({
    queryKey: getContentRssNewsArticlesPageTokenIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Content.Rss.NewsArticles[':pageToken'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentRssNewsArticlesPageTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentRssNewsArticlesPageTokenIndexQueryKey>
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
      ...getContentRssNewsArticlesPageTokenIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContentSearchLocaleIndexQueryKey(
  args: InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>,
) {
  return ['Content', '/Content/Search/:locale/', args] as const
}

export function getContentSearchLocaleIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchLocaleIndexQueryKey>
  >({
    queryKey: getContentSearchLocaleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Content.Search[':locale'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentSearchLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentSearchLocaleIndexQueryKey>
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
      ...getContentSearchLocaleIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey(
  args: InferRequestType<
    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
) {
  return ['Content', '/Content/SearchContentByTagAndType/:tag/:type/:locale/', args] as const
}

export function getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey>
  >({
    queryKey: getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Content.SearchContentByTagAndType[':tag'][':type'][':locale'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentSearchContentByTagAndTypeTagTypeLocaleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryKey>
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
      ...getContentSearchContentByTagAndTypeTagTypeLocaleIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getContentSearchHelpArticlesSearchtextSizeIndexQueryKey(
  args: InferRequestType<
    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
  >,
) {
  return ['Content', '/Content/SearchHelpArticles/:searchtext/:size/', args] as const
}

export function getContentSearchHelpArticlesSearchtextSizeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSearchHelpArticlesSearchtextSizeIndexQueryKey>
  >({
    queryKey: getContentSearchHelpArticlesSearchtextSizeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Content.SearchHelpArticles[':searchtext'][':size'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentSearchHelpArticlesSearchtextSizeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentSearchHelpArticlesSearchtextSizeIndexQueryKey>
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
      ...getContentSearchHelpArticlesSearchtextSizeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsEquipItemIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/EquipItem/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsEquipItemIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsEquipItemIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.Destiny2.Actions.Items.EquipItem.index.$post(undefined, options))
    },
  })
}

export function createPostDestiny2ActionsItemsEquipItemIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsEquipItemIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsEquipItemsIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/EquipItems/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsEquipItemsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsEquipItemsIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.Destiny2.Actions.Items.EquipItems.index.$post(undefined, options))
    },
  })
}

export function createPostDestiny2ActionsItemsEquipItemsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsEquipItemsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/InsertSocketPlug/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Items.InsertSocketPlug.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsItemsInsertSocketPlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsInsertSocketPlugIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/InsertSocketPlugFree/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsItemsInsertSocketPlugFreeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>
              >
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/PullFromPostmaster/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Items.PullFromPostmaster.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsItemsPullFromPostmasterIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>
              >
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsPullFromPostmasterIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsSetLockStateIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/SetLockState/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsSetLockStateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsSetLockStateIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Items.SetLockState.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsItemsSetLockStateIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsSetLockStateIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsSetTrackedStateIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/SetTrackedState/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsSetTrackedStateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsSetTrackedStateIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Items.SetTrackedState.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsItemsSetTrackedStateIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsSetTrackedStateIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsItemsTransferItemIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/TransferItem/', 'POST'] as const
}

export function getPostDestiny2ActionsItemsTransferItemIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsItemsTransferItemIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Items.TransferItem.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsItemsTransferItemIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsItemsTransferItemIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/ClearLoadout/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsLoadoutsClearLoadoutIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsLoadoutsClearLoadoutIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/EquipLoadout/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsLoadoutsEquipLoadoutIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsLoadoutsEquipLoadoutIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/SnapshotLoadout/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsLoadoutsSnapshotLoadoutIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>
              >
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/', 'POST'] as const
}

export function getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post>
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post
                >
              >
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDestiny2ArmorySearchTypeSearchTermIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Armory/Search/:type/:searchTerm/', args] as const
}

export function getDestiny2ArmorySearchTypeSearchTermIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ArmorySearchTypeSearchTermIndexQueryKey>
  >({
    queryKey: getDestiny2ArmorySearchTypeSearchTermIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Armory.Search[':type'][':searchTerm'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2ArmorySearchTypeSearchTermIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2ArmorySearchTypeSearchTermIndexQueryKey>
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
      ...getDestiny2ArmorySearchTypeSearchTermIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Awa/AwaProvideAuthorizationResult/', 'POST'] as const
}

export function getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post(undefined, options),
      )
    },
  })
}

export function createPostDestiny2AwaAwaProvideAuthorizationResultIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>
              >
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2AwaAwaProvideAuthorizationResultIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Awa/GetActionToken/:correlationId/', args] as const
}

export function getDestiny2AwaGetActionTokenCorrelationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey>
  >({
    queryKey: getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Awa.GetActionToken[':correlationId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2AwaGetActionTokenCorrelationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2AwaGetActionTokenCorrelationIdIndexQueryKey>
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
      ...getDestiny2AwaGetActionTokenCorrelationIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDestiny2AwaInitializeIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Awa/Initialize/', 'POST'] as const
}

export function getPostDestiny2AwaInitializeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Awa.Initialize.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2AwaInitializeIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.Destiny2.Awa.Initialize.index.$post(undefined, options))
    },
  })
}

export function createPostDestiny2AwaInitializeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Awa.Initialize.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDestiny2AwaInitializeIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDestiny2ClanClanBannerDictionaryIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Clan/ClanBannerDictionary/'] as const
}

export function getDestiny2ClanClanBannerDictionaryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ClanClanBannerDictionaryIndexQueryKey>
  >({
    queryKey: getDestiny2ClanClanBannerDictionaryIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Clan.ClanBannerDictionary.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2ClanClanBannerDictionaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2ClanClanBannerDictionaryIndexQueryKey>
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
      ...getDestiny2ClanClanBannerDictionaryIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Clan/:groupId/WeeklyRewardState/', args] as const
}

export function getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey>
  >({
    queryKey: getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Clan[':groupId'].WeeklyRewardState.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2ClanGroupIdWeeklyRewardStateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryKey>
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
      ...getDestiny2ClanGroupIdWeeklyRewardStateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2ManifestIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Manifest/'] as const
}

export function getDestiny2ManifestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ManifestIndexQueryKey>
  >({
    queryKey: getDestiny2ManifestIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Manifest.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2ManifestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2ManifestIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDestiny2ManifestIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Manifest/:entityType/:hashIdentifier/', args] as const
}

export function getDestiny2ManifestEntityTypeHashIdentifierIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey>
  >({
    queryKey: getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Manifest[':entityType'][':hashIdentifier'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2ManifestEntityTypeHashIdentifierIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2ManifestEntityTypeHashIdentifierIndexQueryKey>
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
      ...getDestiny2ManifestEntityTypeHashIdentifierIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MilestonesIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Milestones/'] as const
}

export function getDestiny2MilestonesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MilestonesIndexQueryKey>
  >({
    queryKey: getDestiny2MilestonesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Milestones.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2MilestonesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2MilestonesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDestiny2MilestonesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDestiny2MilestonesMilestoneHashContentIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Milestones/:milestoneHash/Content/', args] as const
}

export function getDestiny2MilestonesMilestoneHashContentIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MilestonesMilestoneHashContentIndexQueryKey>
  >({
    queryKey: getDestiny2MilestonesMilestoneHashContentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Milestones[':milestoneHash'].Content.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2MilestonesMilestoneHashContentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2MilestonesMilestoneHashContentIndexQueryKey>
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
      ...getDestiny2MilestonesMilestoneHashContentIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationKey() {
  return ['Destiny2', '/Destiny2/SearchDestinyPlayerByBungieName/:membershipType/', 'POST'] as const
}

export function getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Destiny2.SearchDestinyPlayerByBungieName[':membershipType'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/AggregateClanStats/:groupId/', args] as const
}

export function getDestiny2StatsAggregateClanStatsGroupIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey>
  >({
    queryKey: getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Stats.AggregateClanStats[':groupId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2StatsAggregateClanStatsGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2StatsAggregateClanStatsGroupIdIndexQueryKey>
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
      ...getDestiny2StatsAggregateClanStatsGroupIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2StatsDefinitionIndexQueryKey() {
  return ['Destiny2', '/Destiny2/Stats/Definition/'] as const
}

export function getDestiny2StatsDefinitionIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsDefinitionIndexQueryKey>
  >({
    queryKey: getDestiny2StatsDefinitionIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Stats.Definition.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2StatsDefinitionIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2StatsDefinitionIndexQueryKey>
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
      ...getDestiny2StatsDefinitionIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/Leaderboards/Clans/:groupId/', args] as const
}

export function getDestiny2StatsLeaderboardsClansGroupIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey>
  >({
    queryKey: getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Stats.Leaderboards.Clans[':groupId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2StatsLeaderboardsClansGroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2StatsLeaderboardsClansGroupIdIndexQueryKey>
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
      ...getDestiny2StatsLeaderboardsClansGroupIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/Stats/Leaderboards/:membershipType/:destinyMembershipId/:characterId/',
    args,
  ] as const
}

export function getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Stats.Leaderboards[':membershipType'][':destinyMembershipId'][
          ':characterId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryKey
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
      ...getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/PostGameCarnageReport/:activityId/', args] as const
}

export function getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey>
  >({
    queryKey: getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Stats.PostGameCarnageReport[':activityId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2StatsPostGameCarnageReportActivityIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryKey>
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
      ...getDestiny2StatsPostGameCarnageReportActivityIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationKey() {
  return ['Destiny2', '/Destiny2/Stats/PostGameCarnageReport/:activityId/Report/', 'POST'] as const
}

export function getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Destiny2.Stats.PostGameCarnageReport[':activityId'].Report.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostDestiny2StatsPostGameCarnageReportActivityIdReportIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDestiny2VendorsIndexQueryKey(
  args: InferRequestType<typeof client.Destiny2.Vendors.index.$get>,
) {
  return ['Destiny2', '/Destiny2/Vendors/', args] as const
}

export function getDestiny2VendorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Destiny2.Vendors.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2VendorsIndexQueryKey>
  >({
    queryKey: getDestiny2VendorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2.Vendors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2VendorsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Destiny2.Vendors.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2VendorsIndexQueryKey>
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
      ...getDestiny2VendorsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryKey
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
      ...getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/Activities/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.Activities.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryKey
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
      ...getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/AggregateActivityStats/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.AggregateActivityStats.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryKey
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
      ...getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/UniqueWeapons/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
          ':characterId'
        ].Stats.UniqueWeapons.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryKey
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
      ...getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Stats/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey>
  >({
    queryKey: getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Stats.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryKey>
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
      ...getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Stats/Leaderboards/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Account[
          ':destinyMembershipId'
        ].Stats.Leaderboards.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryKey
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
      ...getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/:membershipType/Profile/:destinyMembershipId/', args] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey>
  >({
    queryKey: getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2MembershipTypeProfileDestinyMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryKey>
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
      ...getDestiny2MembershipTypeProfileDestinyMembershipIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryKey
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
      ...getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Collectibles/:collectiblePresentationNodeHash/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].Collectibles[':collectiblePresentationNodeHash'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryKey
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
      ...getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Vendors/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].Vendors.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryKey
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
      ...getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Vendors/:vendorHash/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
          ':characterId'
        ].Vendors[':vendorHash'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryKey
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
      ...getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Item/:itemInstanceId/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey
    >
  >({
    queryKey:
      getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Item[
          ':itemInstanceId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryKey
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
      ...getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
  >,
) {
  return [
    'Destiny2',
    '/Destiny2/:membershipType/Profile/:membershipId/LinkedProfiles/',
    args,
  ] as const
}

export function getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey>
  >({
    queryKey: getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Destiny2[':membershipType'].Profile[':membershipId'].LinkedProfiles.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryKey>
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
      ...getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFireteamClanGroupIdActiveCountIndexQueryKey(
  args: InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/ActiveCount/', args] as const
}

export function getFireteamClanGroupIdActiveCountIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFireteamClanGroupIdActiveCountIndexQueryKey>
  >({
    queryKey: getFireteamClanGroupIdActiveCountIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].ActiveCount.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFireteamClanGroupIdActiveCountIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFireteamClanGroupIdActiveCountIndexQueryKey>
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
      ...getFireteamClanGroupIdActiveCountIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
  >,
) {
  return [
    'Fireteam',
    '/Fireteam/Clan/:groupId/Available/:platform/:activityType/:dateRange/:slotFilter/:publicOnly/:page/',
    args,
  ] as const
}

export function getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey
    >
  >({
    queryKey:
      getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].Available[':platform'][':activityType'][':dateRange'][
          ':slotFilter'
        ][':publicOnly'][':page'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryKey
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
      ...getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
  >,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/My/:platform/:includeClosed/:page/', args] as const
}

export function getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey>
  >({
    queryKey: getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].My[':platform'][':includeClosed'][':page'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createFireteamClanGroupIdMyPlatformIncludeClosedPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryKey>
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
      ...getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
  >,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/Summary/:fireteamId/', args] as const
}

export function getFireteamClanGroupIdSummaryFireteamIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey>
  >({
    queryKey: getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Fireteam.Clan[':groupId'].Summary[':fireteamId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFireteamClanGroupIdSummaryFireteamIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFireteamClanGroupIdSummaryFireteamIdIndexQueryKey>
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
      ...getFireteamClanGroupIdSummaryFireteamIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
  >,
) {
  return [
    'Fireteam',
    '/Fireteam/Search/Available/:platform/:activityType/:dateRange/:slotFilter/:page/',
    args,
  ] as const
}

export function getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey
    >
  >({
    queryKey:
      getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Fireteam.Search.Available[':platform'][':activityType'][':dateRange'][':slotFilter'][
          ':page'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryKey
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
      ...getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey(
  args: InferRequestType<
    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
) {
  return [
    'Forum',
    '/Forum/GetCoreTopicsPaged/:page/:sort/:quickDate/:categoryFilter/',
    args,
  ] as const
}

export function getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey>
  >({
    queryKey: getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetCoreTopicsPaged[':page'][':sort'][':quickDate'][
          ':categoryFilter'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryKey>
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
      ...getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getForumGetForumTagSuggestionsIndexQueryKey(
  args: InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>,
) {
  return ['Forum', '/Forum/GetForumTagSuggestions/', args] as const
}

export function getForumGetForumTagSuggestionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetForumTagSuggestionsIndexQueryKey>
  >({
    queryKey: getForumGetForumTagSuggestionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetForumTagSuggestions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForumGetForumTagSuggestionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getForumGetForumTagSuggestionsIndexQueryKey>
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
      ...getForumGetForumTagSuggestionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForumGetPostAndParentChildPostIdIndexQueryKey(
  args: InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>,
) {
  return ['Forum', '/Forum/GetPostAndParent/:childPostId/', args] as const
}

export function getForumGetPostAndParentChildPostIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetPostAndParentChildPostIdIndexQueryKey>
  >({
    queryKey: getForumGetPostAndParentChildPostIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetPostAndParent[':childPostId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForumGetPostAndParentChildPostIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getForumGetPostAndParentChildPostIdIndexQueryKey>
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
      ...getForumGetPostAndParentChildPostIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
  >,
) {
  return ['Forum', '/Forum/GetPostAndParentAwaitingApproval/:childPostId/', args] as const
}

export function getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey>
  >({
    queryKey: getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetPostAndParentAwaitingApproval[':childPostId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForumGetPostAndParentAwaitingApprovalChildPostIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryKey>
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
      ...getForumGetPostAndParentAwaitingApprovalChildPostIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
) {
  return [
    'Forum',
    '/Forum/GetPostsThreadedPaged/:parentPostId/:page/:pageSize/:replySize/:getParentPost/:rootThreadMode/:sortMode/',
    args,
  ] as const
}

export function getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey
    >
  >({
    queryKey:
      getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetPostsThreadedPaged[':parentPostId'][':page'][':pageSize'][':replySize'][
          ':getParentPost'
        ][':rootThreadMode'][':sortMode'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryKey
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
      ...getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
) {
  return [
    'Forum',
    '/Forum/GetPostsThreadedPagedFromChild/:childPostId/:page/:pageSize/:replySize/:rootThreadMode/:sortMode/',
    args,
  ] as const
}

export function getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey
    >
  >({
    queryKey:
      getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetPostsThreadedPagedFromChild[':childPostId'][':page'][':pageSize'][
          ':replySize'
        ][':rootThreadMode'][':sortMode'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryKey
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
      ...getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForumGetTopicForContentContentIdIndexQueryKey(
  args: InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>,
) {
  return ['Forum', '/Forum/GetTopicForContent/:contentId/', args] as const
}

export function getForumGetTopicForContentContentIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumGetTopicForContentContentIdIndexQueryKey>
  >({
    queryKey: getForumGetTopicForContentContentIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetTopicForContent[':contentId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForumGetTopicForContentContentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getForumGetTopicForContentContentIdIndexQueryKey>
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
      ...getForumGetTopicForContentContentIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey(
  args: InferRequestType<
    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
) {
  return [
    'Forum',
    '/Forum/GetTopicsPaged/:page/:pageSize/:group/:sort/:quickDate/:categoryFilter/',
    args,
  ] as const
}

export function getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey
    >
  >({
    queryKey: getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.GetTopicsPaged[':page'][':pageSize'][':group'][':sort'][':quickDate'][
          ':categoryFilter'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryKey
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
      ...getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getForumPollTopicIdIndexQueryKey(
  args: InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>,
) {
  return ['Forum', '/Forum/Poll/:topicId/', args] as const
}

export function getForumPollTopicIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForumPollTopicIdIndexQueryKey>
  >({
    queryKey: getForumPollTopicIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Forum.Poll[':topicId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createForumPollTopicIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getForumPollTopicIdIndexQueryKey>
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
      ...getForumPollTopicIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostForumRecruitSummariesIndexMutationKey() {
  return ['Forum', '/Forum/Recruit/Summaries/', 'POST'] as const
}

export function getPostForumRecruitSummariesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Forum.Recruit.Summaries.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostForumRecruitSummariesIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.Forum.Recruit.Summaries.index.$post(undefined, options))
    },
  })
}

export function createPostForumRecruitSummariesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Forum.Recruit.Summaries.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostForumRecruitSummariesIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGetAvailableLocalesIndexQueryKey() {
  return ['GetAvailableLocales', '/GetAvailableLocales/'] as const
}

export function getGetAvailableLocalesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetAvailableLocalesIndexQueryKey>
  >({
    queryKey: getGetAvailableLocalesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.GetAvailableLocales.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGetAvailableLocalesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetAvailableLocalesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetAvailableLocalesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGlobalAlertsIndexQueryKey(
  args: InferRequestType<typeof client.GlobalAlerts.index.$get>,
) {
  return ['GlobalAlerts', '/GlobalAlerts/', args] as const
}

export function getGlobalAlertsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.GlobalAlerts.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalAlertsIndexQueryKey>
  >({
    queryKey: getGlobalAlertsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GlobalAlerts.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGlobalAlertsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.GlobalAlerts.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalAlertsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGlobalAlertsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGroupV2GetAvailableAvatarsIndexQueryKey() {
  return ['GroupV2', '/GroupV2/GetAvailableAvatars/'] as const
}

export function getGroupV2GetAvailableAvatarsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GetAvailableAvatarsIndexQueryKey>
  >({
    queryKey: getGroupV2GetAvailableAvatarsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2.GetAvailableAvatars.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GetAvailableAvatarsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GetAvailableAvatarsIndexQueryKey>
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
      ...getGroupV2GetAvailableAvatarsIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGroupV2GetAvailableThemesIndexQueryKey() {
  return ['GroupV2', '/GroupV2/GetAvailableThemes/'] as const
}

export function getGroupV2GetAvailableThemesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GetAvailableThemesIndexQueryKey>
  >({
    queryKey: getGroupV2GetAvailableThemesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2.GetAvailableThemes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GetAvailableThemesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GetAvailableThemesIndexQueryKey>
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
      ...getGroupV2GetAvailableThemesIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey(
  args: InferRequestType<
    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/GetUserClanInviteSetting/:mType/', args] as const
}

export function getGroupV2GetUserClanInviteSettingMTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey>
  >({
    queryKey: getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2.GetUserClanInviteSetting[':mType'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GetUserClanInviteSettingMTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GetUserClanInviteSettingMTypeIndexQueryKey>
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
      ...getGroupV2GetUserClanInviteSettingMTypeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGroupV2NameGroupNameGroupTypeIndexQueryKey(
  args: InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/Name/:groupName/:groupType/', args] as const
}

export function getGroupV2NameGroupNameGroupTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2NameGroupNameGroupTypeIndexQueryKey>
  >({
    queryKey: getGroupV2NameGroupNameGroupTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2.Name[':groupName'][':groupType'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2NameGroupNameGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2NameGroupNameGroupTypeIndexQueryKey>
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
      ...getGroupV2NameGroupNameGroupTypeIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGroupV2NameV2IndexMutationKey() {
  return ['GroupV2', '/GroupV2/NameV2/', 'POST'] as const
}

export function getPostGroupV2NameV2IndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.NameV2.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2NameV2IndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.GroupV2.NameV2.index.$post(undefined, options))
    },
  })
}

export function createPostGroupV2NameV2Index<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.NameV2.index.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2NameV2IndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationKey() {
  return ['GroupV2', '/GroupV2/Recommended/:groupType/:createDateRange/', 'POST'] as const
}

export function getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2.Recommended[':groupType'][':createDateRange'].index.$post(args, options),
      )
    },
  })
}

export function createPostGroupV2RecommendedGroupTypeCreateDateRangeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey(
  args: InferRequestType<
    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/Recover/:membershipType/:membershipId/:groupType/', args] as const
}

export function getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey>
  >({
    queryKey: getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2.Recover[':membershipType'][':membershipId'][':groupType'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryKey>
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
      ...getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostGroupV2SearchIndexMutationKey() {
  return ['GroupV2', '/GroupV2/Search/', 'POST'] as const
}

export function getPostGroupV2SearchIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.Search.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2SearchIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.GroupV2.Search.index.$post(undefined, options))
    },
  })
}

export function createPostGroupV2SearchIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.Search.index.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2SearchIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(
  args: InferRequestType<
    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
) {
  return [
    'GroupV2',
    '/GroupV2/User/Potential/:membershipType/:membershipId/:filter/:groupType/',
    args,
  ] as const
}

export function getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey>
  >({
    queryKey: getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2.User.Potential[':membershipType'][':membershipId'][':filter'][
          ':groupType'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey
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
      ...getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(
  args: InferRequestType<
    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
) {
  return [
    'GroupV2',
    '/GroupV2/User/:membershipType/:membershipId/:filter/:groupType/',
    args,
  ] as const
}

export function getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey>
  >({
    queryKey: getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2.User[':membershipType'][':membershipId'][':filter'][':groupType'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryKey>
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
      ...getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGroupV2GroupIdIndexQueryKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/', args] as const
}

export function getGroupV2GroupIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdIndexQueryKey>
  >({
    queryKey: getGroupV2GroupIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2[':groupId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GroupIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GroupIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupV2GroupIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Admin/AbdicateFoundership/:membershipType/:founderIdNew/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Admin.AbdicateFoundership[':membershipType'][
          ':founderIdNew'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupV2GroupIdAdminsAndFounderIndexQueryKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/AdminsAndFounder/', args] as const
}

export function getGroupV2GroupIdAdminsAndFounderIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdAdminsAndFounderIndexQueryKey>
  >({
    queryKey: getGroupV2GroupIdAdminsAndFounderIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2[':groupId'].AdminsAndFounder.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GroupIdAdminsAndFounderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GroupIdAdminsAndFounderIndexQueryKey>
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
      ...getGroupV2GroupIdAdminsAndFounderIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGroupV2GroupIdBannedIndexQueryKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/Banned/', args] as const
}

export function getGroupV2GroupIdBannedIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdBannedIndexQueryKey>
  >({
    queryKey: getGroupV2GroupIdBannedIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2[':groupId'].Banned.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GroupIdBannedIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GroupIdBannedIndexQueryKey>
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
      ...getGroupV2GroupIdBannedIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdEditIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Edit/', 'POST'] as const
}

export function getPostGroupV2GroupIdEditIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdEditIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Edit.index.$post(args, options))
    },
  })
}

export function createPostGroupV2GroupIdEditIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdEditIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdEditClanBannerIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/EditClanBanner/', 'POST'] as const
}

export function getPostGroupV2GroupIdEditClanBannerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdEditClanBannerIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].EditClanBanner.index.$post(args, options))
    },
  })
}

export function createPostGroupV2GroupIdEditClanBannerIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdEditClanBannerIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdEditFounderOptionsIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/EditFounderOptions/', 'POST'] as const
}

export function getPostGroupV2GroupIdEditFounderOptionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdEditFounderOptionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].EditFounderOptions.index.$post(args, options))
    },
  })
}

export function createPostGroupV2GroupIdEditFounderOptionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdEditFounderOptionsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupV2GroupIdMembersIndexQueryKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/', args] as const
}

export function getGroupV2GroupIdMembersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdMembersIndexQueryKey>
  >({
    queryKey: getGroupV2GroupIdMembersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GroupIdMembersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GroupIdMembersIndexQueryKey>
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
      ...getGroupV2GroupIdMembersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/Approve/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.Approve[':membershipType'][':membershipId'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersApproveAllIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/ApproveAll/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersApproveAllIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersApproveAllIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Members.ApproveAll.index.$post(args, options))
    },
  })
}

export function createPostGroupV2GroupIdMembersApproveAllIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdMembersApproveAllIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersApproveListIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/ApproveList/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersApproveListIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersApproveListIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.ApproveList.index.$post(args, options),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersApproveListIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdMembersApproveListIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersDenyAllIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/DenyAll/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersDenyAllIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersDenyAllIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Members.DenyAll.index.$post(args, options))
    },
  })
}

export function createPostGroupV2GroupIdMembersDenyAllIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdMembersDenyAllIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersDenyListIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/DenyList/', 'POST'] as const
}

export function getPostGroupV2GroupIdMembersDenyListIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersDenyListIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
      >,
    ) {
      return parseResponse(client.GroupV2[':groupId'].Members.DenyList.index.$post(args, options))
    },
  })
}

export function createPostGroupV2GroupIdMembersDenyListIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdMembersDenyListIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/IndividualInvite/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.IndividualInvite[':membershipType'][
          ':membershipId'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/IndividualInviteCancel/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.IndividualInviteCancel[':membershipType'][
          ':membershipId'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/InvitedIndividuals/', args] as const
}

export function getGroupV2GroupIdMembersInvitedIndividualsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey>
  >({
    queryKey: getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.InvitedIndividuals.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GroupIdMembersInvitedIndividualsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GroupIdMembersInvitedIndividualsIndexQueryKey>
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
      ...getGroupV2GroupIdMembersInvitedIndividualsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getGroupV2GroupIdMembersPendingIndexQueryKey(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/Pending/', args] as const
}

export function getGroupV2GroupIdMembersPendingIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdMembersPendingIndexQueryKey>
  >({
    queryKey: getGroupV2GroupIdMembersPendingIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2[':groupId'].Members.Pending.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GroupIdMembersPendingIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GroupIdMembersPendingIndexQueryKey>
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
      ...getGroupV2GroupIdMembersPendingIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Ban/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Ban.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Kick/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Kick.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/SetMembershipType/:memberType/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].SetMembershipType[
          ':memberType'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Unban/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Unban.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupV2GroupIdOptionalConversationsIndexQueryKey(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/OptionalConversations/', args] as const
}

export function getGroupV2GroupIdOptionalConversationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupV2GroupIdOptionalConversationsIndexQueryKey>
  >({
    queryKey: getGroupV2GroupIdOptionalConversationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.GroupV2[':groupId'].OptionalConversations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupV2GroupIdOptionalConversationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupV2GroupIdOptionalConversationsIndexQueryKey>
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
      ...getGroupV2GroupIdOptionalConversationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdOptionalConversationsAddIndexMutationKey() {
  return ['GroupV2', '/GroupV2/:groupId/OptionalConversations/Add/', 'POST'] as const
}

export function getPostGroupV2GroupIdOptionalConversationsAddIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdOptionalConversationsAddIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].OptionalConversations.Add.index.$post(args, options),
      )
    },
  })
}

export function createPostGroupV2GroupIdOptionalConversationsAddIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupV2GroupIdOptionalConversationsAddIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/OptionalConversations/Edit/:conversationId/',
    'POST',
  ] as const
}

export function getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.GroupV2[':groupId'].OptionalConversations.Edit[':conversationId'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostGroupV2GroupIdOptionalConversationsEditConversationIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsIndexQueryKey() {
  return ['Settings', '/Settings/'] as const
}

export function getSettingsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsIndexQueryKey>
  >({
    queryKey: getSettingsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Settings.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSettingsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSocialFriendsIndexQueryKey() {
  return ['Social', '/Social/Friends/'] as const
}

export function getSocialFriendsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSocialFriendsIndexQueryKey>
  >({
    queryKey: getSocialFriendsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Social.Friends.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSocialFriendsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSocialFriendsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSocialFriendsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSocialFriendsAddMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Add/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsAddMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsAddMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>,
    ) {
      return parseResponse(client.Social.Friends.Add[':membershipId'].index.$post(args, options))
    },
  })
}

export function createPostSocialFriendsAddMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSocialFriendsAddMembershipIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSocialFriendsRemoveMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Remove/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRemoveMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRemoveMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(client.Social.Friends.Remove[':membershipId'].index.$post(args, options))
    },
  })
}

export function createPostSocialFriendsRemoveMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSocialFriendsRemoveMembershipIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSocialFriendsRequestsIndexQueryKey() {
  return ['Social', '/Social/Friends/Requests/'] as const
}

export function getSocialFriendsRequestsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSocialFriendsRequestsIndexQueryKey>
  >({
    queryKey: getSocialFriendsRequestsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Social.Friends.Requests.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSocialFriendsRequestsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSocialFriendsRequestsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSocialFriendsRequestsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Requests/Accept/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Social.Friends.Requests.Accept[':membershipId'].index.$post(args, options),
      )
    },
  })
}

export function createPostSocialFriendsRequestsAcceptMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSocialFriendsRequestsAcceptMembershipIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Requests/Decline/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Social.Friends.Requests.Decline[':membershipId'].index.$post(args, options),
      )
    },
  })
}

export function createPostSocialFriendsRequestsDeclineMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSocialFriendsRequestsDeclineMembershipIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationKey() {
  return ['Social', '/Social/Friends/Requests/Remove/:membershipId/', 'POST'] as const
}

export function getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Social.Friends.Requests.Remove[':membershipId'].index.$post(args, options),
      )
    },
  })
}

export function createPostSocialFriendsRequestsRemoveMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSocialFriendsRequestsRemoveMembershipIdIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSocialPlatformFriendsFriendPlatformPageIndexQueryKey(
  args: InferRequestType<
    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
  >,
) {
  return ['Social', '/Social/PlatformFriends/:friendPlatform/:page/', args] as const
}

export function getSocialPlatformFriendsFriendPlatformPageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSocialPlatformFriendsFriendPlatformPageIndexQueryKey>
  >({
    queryKey: getSocialPlatformFriendsFriendPlatformPageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Social.PlatformFriends[':friendPlatform'][':page'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSocialPlatformFriendsFriendPlatformPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSocialPlatformFriendsFriendPlatformPageIndexQueryKey>
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
      ...getSocialPlatformFriendsFriendPlatformPageIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationKey() {
  return [
    'Tokens',
    '/Tokens/Partner/ApplyMissingOffers/:partnerApplicationId/:targetBnetMembershipId/',
    'POST',
  ] as const
}

export function getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.Tokens.Partner.ApplyMissingOffers[':partnerApplicationId'][
          ':targetBnetMembershipId'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTokensPartnerClaimOfferIndexMutationKey() {
  return ['Tokens', '/Tokens/Partner/ClaimOffer/', 'POST'] as const
}

export function getPostTokensPartnerClaimOfferIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Partner.ClaimOffer.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTokensPartnerClaimOfferIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.Tokens.Partner.ClaimOffer.index.$post(undefined, options))
    },
  })
}

export function createPostTokensPartnerClaimOfferIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Tokens.Partner.ClaimOffer.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTokensPartnerClaimOfferIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTokensPartnerForceDropsRepairIndexMutationKey() {
  return ['Tokens', '/Tokens/Partner/ForceDropsRepair/', 'POST'] as const
}

export function getPostTokensPartnerForceDropsRepairIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Partner.ForceDropsRepair.index.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTokensPartnerForceDropsRepairIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.Tokens.Partner.ForceDropsRepair.index.$post(undefined, options))
    },
  })
}

export function createPostTokensPartnerForceDropsRepairIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Tokens.Partner.ForceDropsRepair.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTokensPartnerForceDropsRepairIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
  >,
) {
  return [
    'Tokens',
    '/Tokens/Partner/History/:partnerApplicationId/:targetBnetMembershipId/',
    args,
  ] as const
}

export function getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey
    >
  >({
    queryKey: getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tokens.Partner.History[':partnerApplicationId'][
          ':targetBnetMembershipId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryKey
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
      ...getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
  >,
) {
  return [
    'Tokens',
    '/Tokens/Partner/History/:targetBnetMembershipId/Application/:partnerApplicationId/',
    args,
  ] as const
}

export function getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey
    >
  >({
    queryKey:
      getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Tokens.Partner.History[':targetBnetMembershipId'].Application[
          ':partnerApplicationId'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryKey
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
      ...getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTokensRewardsBungieRewardsIndexQueryKey() {
  return ['Tokens', '/Tokens/Rewards/BungieRewards/'] as const
}

export function getTokensRewardsBungieRewardsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensRewardsBungieRewardsIndexQueryKey>
  >({
    queryKey: getTokensRewardsBungieRewardsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Tokens.Rewards.BungieRewards.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTokensRewardsBungieRewardsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensRewardsBungieRewardsIndexQueryKey>
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
      ...getTokensRewardsBungieRewardsIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
  >,
) {
  return [
    'Tokens',
    '/Tokens/Rewards/GetRewardsForPlatformUser/:membershipId/:membershipType/',
    args,
  ] as const
}

export function getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey
    >
  >({
    queryKey:
      getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tokens.Rewards.GetRewardsForPlatformUser[':membershipId'][
          ':membershipType'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryKey
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
      ...getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
  >,
) {
  return ['Tokens', '/Tokens/Rewards/GetRewardsForUser/:membershipId/', args] as const
}

export function getTokensRewardsGetRewardsForUserMembershipIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey>
  >({
    queryKey: getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tokens.Rewards.GetRewardsForUser[':membershipId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTokensRewardsGetRewardsForUserMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensRewardsGetRewardsForUserMembershipIdIndexQueryKey>
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
      ...getTokensRewardsGetRewardsForUserMembershipIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTrendingCategoriesIndexQueryKey() {
  return ['Trending', '/Trending/Categories/'] as const
}

export function getTrendingCategoriesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingCategoriesIndexQueryKey>
  >({
    queryKey: getTrendingCategoriesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Trending.Categories.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrendingCategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendingCategoriesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrendingCategoriesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTrendingCategoriesCategoryIdPageNumberIndexQueryKey(
  args: InferRequestType<
    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
  >,
) {
  return ['Trending', '/Trending/Categories/:categoryId/:pageNumber/', args] as const
}

export function getTrendingCategoriesCategoryIdPageNumberIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingCategoriesCategoryIdPageNumberIndexQueryKey>
  >({
    queryKey: getTrendingCategoriesCategoryIdPageNumberIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Trending.Categories[':categoryId'][':pageNumber'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrendingCategoriesCategoryIdPageNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendingCategoriesCategoryIdPageNumberIndexQueryKey>
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
      ...getTrendingCategoriesCategoryIdPageNumberIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey(
  args: InferRequestType<
    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
  >,
) {
  return ['Trending', '/Trending/Details/:trendingEntryType/:identifier/', args] as const
}

export function getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey>
  >({
    queryKey: getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Trending.Details[':trendingEntryType'][':identifier'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrendingDetailsTrendingEntryTypeIdentifierIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryKey>
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
      ...getTrendingDetailsTrendingEntryTypeIdentifierIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserGetAvailableThemesIndexQueryKey() {
  return ['User', '/User/GetAvailableThemes/'] as const
}

export function getUserGetAvailableThemesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetAvailableThemesIndexQueryKey>
  >({
    queryKey: getUserGetAvailableThemesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.User.GetAvailableThemes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserGetAvailableThemesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGetAvailableThemesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserGetAvailableThemesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUserGetBungieNetUserByIdIdIndexQueryKey(
  args: InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>,
) {
  return ['User', '/User/GetBungieNetUserById/:id/', args] as const
}

export function getUserGetBungieNetUserByIdIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetBungieNetUserByIdIdIndexQueryKey>
  >({
    queryKey: getUserGetBungieNetUserByIdIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User.GetBungieNetUserById[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserGetBungieNetUserByIdIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGetBungieNetUserByIdIdIndexQueryKey>
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
      ...getUserGetBungieNetUserByIdIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
  >,
) {
  return ['User', '/User/GetCredentialTypesForTargetAccount/:membershipId/', args] as const
}

export function getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey>
  >({
    queryKey: getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User.GetCredentialTypesForTargetAccount[':membershipId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserGetCredentialTypesForTargetAccountMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryKey>
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
      ...getUserGetCredentialTypesForTargetAccountMembershipIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey(
  args: InferRequestType<
    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
  >,
) {
  return ['User', '/User/GetMembershipFromHardLinkedCredential/:crType/:credential/', args] as const
}

export function getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey>
  >({
    queryKey: getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User.GetMembershipFromHardLinkedCredential[':crType'][':credential'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryKey>
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
      ...getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey(
  args: InferRequestType<
    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
  >,
) {
  return ['User', '/User/GetMembershipsById/:membershipId/:membershipType/', args] as const
}

export function getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey>
  >({
    queryKey: getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User.GetMembershipsById[':membershipId'][':membershipType'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserGetMembershipsByIdMembershipIdMembershipTypeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryKey>
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
      ...getUserGetMembershipsByIdMembershipIdMembershipTypeIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserGetMembershipsForCurrentUserIndexQueryKey() {
  return ['User', '/User/GetMembershipsForCurrentUser/'] as const
}

export function getUserGetMembershipsForCurrentUserIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetMembershipsForCurrentUserIndexQueryKey>
  >({
    queryKey: getUserGetMembershipsForCurrentUserIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.User.GetMembershipsForCurrentUser.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserGetMembershipsForCurrentUserIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGetMembershipsForCurrentUserIndexQueryKey>
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
      ...getUserGetMembershipsForCurrentUserIndexQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
  >,
) {
  return ['User', '/User/GetSanitizedPlatformDisplayNames/:membershipId/', args] as const
}

export function getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey>
  >({
    queryKey: getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User.GetSanitizedPlatformDisplayNames[':membershipId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserGetSanitizedPlatformDisplayNamesMembershipIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryKey>
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
      ...getUserGetSanitizedPlatformDisplayNamesMembershipIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostUserSearchGlobalNamePageIndexMutationKey() {
  return ['User', '/User/Search/GlobalName/:page/', 'POST'] as const
}

export function getPostUserSearchGlobalNamePageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSearchGlobalNamePageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>,
    ) {
      return parseResponse(client.User.Search.GlobalName[':page'].index.$post(args, options))
    },
  })
}

export function createPostUserSearchGlobalNamePageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserSearchGlobalNamePageIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey(
  args: InferRequestType<
    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
  >,
) {
  return ['User', '/User/Search/Prefix/:displayNamePrefix/:page/', args] as const
}

export function getUserSearchPrefixDisplayNamePrefixPageIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey>
  >({
    queryKey: getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User.Search.Prefix[':displayNamePrefix'][':page'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserSearchPrefixDisplayNamePrefixPageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserSearchPrefixDisplayNamePrefixPageIndexQueryKey>
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
      ...getUserSearchPrefixDisplayNamePrefixPageIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUserSystemOverridesIndexQueryKey() {
  return ['UserSystemOverrides', '/UserSystemOverrides/'] as const
}

export function getUserSystemOverridesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserSystemOverridesIndexQueryKey>
  >({
    queryKey: getUserSystemOverridesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.UserSystemOverrides.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserSystemOverridesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserSystemOverridesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserSystemOverridesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
