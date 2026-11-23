import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAppApiUsageApplicationIdIndexKey(
  args: InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>,
) {
  return ['App', '/App/ApiUsage/:applicationId/', args] as const
}

export function useGetAppApiUsageApplicationIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppApiUsageApplicationIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.App.ApiUsage[':applicationId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppApiUsageApplicationIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAppApiUsageApplicationIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.App.ApiUsage[':applicationId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppFirstPartyIndexKey() {
  return ['App', '/App/FirstParty/'] as const
}

export function useGetAppFirstPartyIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppFirstPartyIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.App.FirstParty.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppFirstPartyIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppFirstPartyIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.App.FirstParty.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.App.FirstParty.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommunityContentGetSortMediaFilterPageIndexKey(
  args: InferRequestType<
    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
  >,
) {
  return ['CommunityContent', '/CommunityContent/Get/:sort/:mediaFilter/:page/', args] as const
}

export function useGetCommunityContentGetSortMediaFilterPageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommunityContentGetSortMediaFilterPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.CommunityContent.Get[':sort'][':mediaFilter'][':page'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommunityContentGetSortMediaFilterPageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommunityContentGetSortMediaFilterPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.CommunityContent.Get[':sort'][':mediaFilter'][':page'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContentGetContentByIdIdLocaleIndexKey(
  args: InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>,
) {
  return ['Content', '/Content/GetContentById/:id/:locale/', args] as const
}

export function useGetContentGetContentByIdIdLocaleIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentGetContentByIdIdLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.GetContentById[':id'][':locale'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentGetContentByIdIdLocaleIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentGetContentByIdIdLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.GetContentById[':id'][':locale'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContentGetContentByTagAndTypeTagTypeLocaleIndexKey(
  args: InferRequestType<
    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
) {
  return ['Content', '/Content/GetContentByTagAndType/:tag/:type/:locale/', args] as const
}

export function useGetContentGetContentByTagAndTypeTagTypeLocaleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentGetContentByTagAndTypeTagTypeLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.GetContentByTagAndType[':tag'][':type'][':locale'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentGetContentByTagAndTypeTagTypeLocaleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentGetContentByTagAndTypeTagTypeLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.GetContentByTagAndType[':tag'][':type'][':locale'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContentGetContentTypeTypeIndexKey(
  args: InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>,
) {
  return ['Content', '/Content/GetContentType/:type/', args] as const
}

export function useGetContentGetContentTypeTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentGetContentTypeTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Content.GetContentType[':type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentGetContentTypeTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentGetContentTypeTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.GetContentType)[':type']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Content.GetContentType[':type'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContentRssNewsArticlesPageTokenIndexKey(
  args: InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>,
) {
  return ['Content', '/Content/Rss/NewsArticles/:pageToken/', args] as const
}

export function useGetContentRssNewsArticlesPageTokenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentRssNewsArticlesPageTokenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.Rss.NewsArticles[':pageToken'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentRssNewsArticlesPageTokenIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentRssNewsArticlesPageTokenIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.Rss.NewsArticles[':pageToken'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContentSearchLocaleIndexKey(
  args: InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>,
) {
  return ['Content', '/Content/Search/:locale/', args] as const
}

export function useGetContentSearchLocaleIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSearchLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Content.Search[':locale'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentSearchLocaleIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSearchLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Content.Search)[':locale']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Content.Search[':locale'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContentSearchContentByTagAndTypeTagTypeLocaleIndexKey(
  args: InferRequestType<
    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
) {
  return ['Content', '/Content/SearchContentByTagAndType/:tag/:type/:locale/', args] as const
}

export function useGetContentSearchContentByTagAndTypeTagTypeLocaleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSearchContentByTagAndTypeTagTypeLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.SearchContentByTagAndType[':tag'][':type'][':locale'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentSearchContentByTagAndTypeTagTypeLocaleIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSearchContentByTagAndTypeTagTypeLocaleIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.SearchContentByTagAndType[':tag'][':type'][':locale'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContentSearchHelpArticlesSearchtextSizeIndexKey(
  args: InferRequestType<
    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
  >,
) {
  return ['Content', '/Content/SearchHelpArticles/:searchtext/:size/', args] as const
}

export function useGetContentSearchHelpArticlesSearchtextSizeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSearchHelpArticlesSearchtextSizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.SearchHelpArticles[':searchtext'][':size'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentSearchHelpArticlesSearchtextSizeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContentSearchHelpArticlesSearchtextSizeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Content.SearchHelpArticles[':searchtext'][':size'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsEquipItemIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/EquipItem/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsEquipItemIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItem.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsEquipItemIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.EquipItem.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsEquipItemsIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/EquipItems/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsEquipItemsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.EquipItems.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsEquipItemsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.EquipItems.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsInsertSocketPlugIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/InsertSocketPlug/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsInsertSocketPlugIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlug.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsInsertSocketPlugIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.InsertSocketPlug.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/InsertSocketPlugFree/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsInsertSocketPlugFreeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsInsertSocketPlugFreeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsPullFromPostmasterIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/PullFromPostmaster/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsPullFromPostmasterIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.PullFromPostmaster.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsPullFromPostmasterIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.PullFromPostmaster.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsSetLockStateIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/SetLockState/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsSetLockStateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetLockState.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsSetLockStateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.SetLockState.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsSetTrackedStateIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/SetTrackedState/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsSetTrackedStateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.SetTrackedState.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsSetTrackedStateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.SetTrackedState.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsItemsTransferItemIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Items/TransferItem/', 'POST'] as const
}

export function usePostDestiny2ActionsItemsTransferItemIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Items.TransferItem.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsItemsTransferItemIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Items.TransferItem.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsLoadoutsClearLoadoutIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/ClearLoadout/', 'POST'] as const
}

export function usePostDestiny2ActionsLoadoutsClearLoadoutIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsLoadoutsClearLoadoutIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsLoadoutsEquipLoadoutIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/EquipLoadout/', 'POST'] as const
}

export function usePostDestiny2ActionsLoadoutsEquipLoadoutIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsLoadoutsEquipLoadoutIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/SnapshotLoadout/', 'POST'] as const
}

export function usePostDestiny2ActionsLoadoutsSnapshotLoadoutIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsLoadoutsSnapshotLoadoutIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexKey() {
  return ['Destiny2', '/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/', 'POST'] as const
}

export function usePostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDestiny2ArmorySearchTypeSearchTermIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Armory/Search/:type/:searchTerm/', args] as const
}

export function useGetDestiny2ArmorySearchTypeSearchTermIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ArmorySearchTypeSearchTermIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Armory.Search[':type'][':searchTerm'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2ArmorySearchTypeSearchTermIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ArmorySearchTypeSearchTermIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Armory.Search[':type'][':searchTerm'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDestiny2AwaAwaProvideAuthorizationResultIndexKey() {
  return ['Destiny2', '/Destiny2/Awa/AwaProvideAuthorizationResult/', 'POST'] as const
}

export function usePostDestiny2AwaAwaProvideAuthorizationResultIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2AwaAwaProvideAuthorizationResultIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDestiny2AwaGetActionTokenCorrelationIdIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Awa/GetActionToken/:correlationId/', args] as const
}

export function useGetDestiny2AwaGetActionTokenCorrelationIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2AwaGetActionTokenCorrelationIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Awa.GetActionToken[':correlationId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2AwaGetActionTokenCorrelationIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2AwaGetActionTokenCorrelationIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Awa.GetActionToken[':correlationId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDestiny2AwaInitializeIndexKey() {
  return ['Destiny2', '/Destiny2/Awa/Initialize/', 'POST'] as const
}

export function usePostDestiny2AwaInitializeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Awa.Initialize.index.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2AwaInitializeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.Destiny2.Awa.Initialize.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDestiny2ClanClanBannerDictionaryIndexKey() {
  return ['Destiny2', '/Destiny2/Clan/ClanBannerDictionary/'] as const
}

export function useGetDestiny2ClanClanBannerDictionaryIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ClanClanBannerDictionaryIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Clan.ClanBannerDictionary.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2ClanClanBannerDictionaryIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ClanClanBannerDictionaryIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Destiny2.Clan.ClanBannerDictionary.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Clan.ClanBannerDictionary.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2ClanGroupIdWeeklyRewardStateIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Clan/:groupId/WeeklyRewardState/', args] as const
}

export function useGetDestiny2ClanGroupIdWeeklyRewardStateIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ClanGroupIdWeeklyRewardStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Clan[':groupId'].WeeklyRewardState.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2ClanGroupIdWeeklyRewardStateIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ClanGroupIdWeeklyRewardStateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Clan[':groupId'].WeeklyRewardState.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2ManifestIndexKey() {
  return ['Destiny2', '/Destiny2/Manifest/'] as const
}

export function useGetDestiny2ManifestIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ManifestIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Destiny2.Manifest.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2ManifestIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ManifestIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Manifest.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Destiny2.Manifest.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2ManifestEntityTypeHashIdentifierIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Manifest/:entityType/:hashIdentifier/', args] as const
}

export function useGetDestiny2ManifestEntityTypeHashIdentifierIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ManifestEntityTypeHashIdentifierIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Manifest[':entityType'][':hashIdentifier'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2ManifestEntityTypeHashIdentifierIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2ManifestEntityTypeHashIdentifierIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Manifest[':entityType'][':hashIdentifier'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MilestonesIndexKey() {
  return ['Destiny2', '/Destiny2/Milestones/'] as const
}

export function useGetDestiny2MilestonesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MilestonesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Destiny2.Milestones.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MilestonesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MilestonesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Milestones.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Destiny2.Milestones.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MilestonesMilestoneHashContentIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Milestones/:milestoneHash/Content/', args] as const
}

export function useGetDestiny2MilestonesMilestoneHashContentIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MilestonesMilestoneHashContentIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Milestones[':milestoneHash'].Content.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MilestonesMilestoneHashContentIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MilestonesMilestoneHashContentIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Milestones[':milestoneHash'].Content.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexKey() {
  return ['Destiny2', '/Destiny2/SearchDestinyPlayerByBungieName/:membershipType/', 'POST'] as const
}

export function usePostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Destiny2.SearchDestinyPlayerByBungieName[':membershipType'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDestiny2StatsAggregateClanStatsGroupIdIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/AggregateClanStats/:groupId/', args] as const
}

export function useGetDestiny2StatsAggregateClanStatsGroupIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsAggregateClanStatsGroupIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.AggregateClanStats[':groupId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2StatsAggregateClanStatsGroupIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsAggregateClanStatsGroupIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.AggregateClanStats[':groupId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2StatsDefinitionIndexKey() {
  return ['Destiny2', '/Destiny2/Stats/Definition/'] as const
}

export function useGetDestiny2StatsDefinitionIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsDefinitionIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Destiny2.Stats.Definition.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2StatsDefinitionIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsDefinitionIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Destiny2.Stats.Definition.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Destiny2.Stats.Definition.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2StatsLeaderboardsClansGroupIdIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/Leaderboards/Clans/:groupId/', args] as const
}

export function useGetDestiny2StatsLeaderboardsClansGroupIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsLeaderboardsClansGroupIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.Leaderboards.Clans[':groupId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2StatsLeaderboardsClansGroupIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsLeaderboardsClansGroupIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.Leaderboards.Clans[':groupId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexKey(
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

export function useGetDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.Leaderboards[':membershipType'][':destinyMembershipId'][
            ':characterId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.Leaderboards[':membershipType'][':destinyMembershipId'][
            ':characterId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2StatsPostGameCarnageReportActivityIdIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/Stats/PostGameCarnageReport/:activityId/', args] as const
}

export function useGetDestiny2StatsPostGameCarnageReportActivityIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsPostGameCarnageReportActivityIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.PostGameCarnageReport[':activityId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2StatsPostGameCarnageReportActivityIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2StatsPostGameCarnageReportActivityIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2.Stats.PostGameCarnageReport[':activityId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexKey() {
  return ['Destiny2', '/Destiny2/Stats/PostGameCarnageReport/:activityId/Report/', 'POST'] as const
}

export function usePostDestiny2StatsPostGameCarnageReportActivityIdReportIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestiny2StatsPostGameCarnageReportActivityIdReportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Destiny2.Stats.PostGameCarnageReport[':activityId'].Report.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDestiny2VendorsIndexKey(
  args: InferRequestType<typeof client.Destiny2.Vendors.index.$get>,
) {
  return ['Destiny2', '/Destiny2/Vendors/', args] as const
}

export function useGetDestiny2VendorsIndex<TError = unknown>(
  args: InferRequestType<typeof client.Destiny2.Vendors.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2VendorsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Destiny2.Vendors.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2VendorsIndex<TError = unknown>(
  args: InferRequestType<typeof client.Destiny2.Vendors.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2VendorsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Destiny2.Vendors.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Destiny2.Vendors.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexKey(
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

export function useGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexKey(
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

export function useGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.Activities.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.Activities.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexKey(
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

export function useGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.AggregateActivityStats.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.AggregateActivityStats.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexKey(
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

export function useGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.UniqueWeapons.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
            ':characterId'
          ].Stats.UniqueWeapons.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexKey(
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

export function useGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexKey(
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

export function useGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[
            ':destinyMembershipId'
          ].Stats.Leaderboards.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Account[
            ':destinyMembershipId'
          ].Stats.Leaderboards.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeProfileDestinyMembershipIdIndexKey(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
  >,
) {
  return ['Destiny2', '/Destiny2/:membershipType/Profile/:destinyMembershipId/', args] as const
}

export function useGetDestiny2MembershipTypeProfileDestinyMembershipIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeProfileDestinyMembershipIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexKey(
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

export function useGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexKey(
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

export function useGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Collectibles[':collectiblePresentationNodeHash'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Collectibles[':collectiblePresentationNodeHash'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexKey(
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

export function useGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Vendors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Vendors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexKey(
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

export function useGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Vendors[':vendorHash'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
            ':characterId'
          ].Vendors[':vendorHash'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexKey(
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

export function useGetDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Item[
            ':itemInstanceId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Item[
            ':itemInstanceId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexKey(
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

export function useGetDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':membershipId'].LinkedProfiles.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Destiny2[':membershipType'].Profile[':membershipId'].LinkedProfiles.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFireteamClanGroupIdActiveCountIndexKey(
  args: InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/ActiveCount/', args] as const
}

export function useGetFireteamClanGroupIdActiveCountIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdActiveCountIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Fireteam.Clan[':groupId'].ActiveCount.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFireteamClanGroupIdActiveCountIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdActiveCountIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Fireteam.Clan[':groupId'].ActiveCount.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexKey(
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

export function useGetFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Clan[':groupId'].Available[':platform'][':activityType'][':dateRange'][
            ':slotFilter'
          ][':publicOnly'][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Clan[':groupId'].Available[':platform'][':activityType'][':dateRange'][
            ':slotFilter'
          ][':publicOnly'][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFireteamClanGroupIdMyPlatformIncludeClosedPageIndexKey(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
  >,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/My/:platform/:includeClosed/:page/', args] as const
}

export function useGetFireteamClanGroupIdMyPlatformIncludeClosedPageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdMyPlatformIncludeClosedPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Clan[':groupId'].My[':platform'][':includeClosed'][':page'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFireteamClanGroupIdMyPlatformIncludeClosedPageIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdMyPlatformIncludeClosedPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Clan[':groupId'].My[':platform'][':includeClosed'][':page'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFireteamClanGroupIdSummaryFireteamIdIndexKey(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
  >,
) {
  return ['Fireteam', '/Fireteam/Clan/:groupId/Summary/:fireteamId/', args] as const
}

export function useGetFireteamClanGroupIdSummaryFireteamIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdSummaryFireteamIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Clan[':groupId'].Summary[':fireteamId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFireteamClanGroupIdSummaryFireteamIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamClanGroupIdSummaryFireteamIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Clan[':groupId'].Summary[':fireteamId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexKey(
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

export function useGetFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Search.Available[':platform'][':activityType'][':dateRange'][
            ':slotFilter'
          ][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Fireteam.Search.Available[':platform'][':activityType'][':dateRange'][
            ':slotFilter'
          ][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexKey(
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

export function useGetForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetCoreTopicsPaged[':page'][':sort'][':quickDate'][
            ':categoryFilter'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetCoreTopicsPaged[':page'][':sort'][':quickDate'][
            ':categoryFilter'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetForumTagSuggestionsIndexKey(
  args: InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>,
) {
  return ['Forum', '/Forum/GetForumTagSuggestions/', args] as const
}

export function useGetForumGetForumTagSuggestionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetForumTagSuggestionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Forum.GetForumTagSuggestions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetForumTagSuggestionsIndex<TError = unknown>(
  args: InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetForumTagSuggestionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Forum.GetForumTagSuggestions.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Forum.GetForumTagSuggestions.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetPostAndParentChildPostIdIndexKey(
  args: InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>,
) {
  return ['Forum', '/Forum/GetPostAndParent/:childPostId/', args] as const
}

export function useGetForumGetPostAndParentChildPostIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostAndParentChildPostIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostAndParent[':childPostId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetPostAndParentChildPostIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostAndParentChildPostIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostAndParent[':childPostId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetPostAndParentAwaitingApprovalChildPostIdIndexKey(
  args: InferRequestType<
    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
  >,
) {
  return ['Forum', '/Forum/GetPostAndParentAwaitingApproval/:childPostId/', args] as const
}

export function useGetForumGetPostAndParentAwaitingApprovalChildPostIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostAndParentAwaitingApprovalChildPostIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostAndParentAwaitingApproval[':childPostId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetPostAndParentAwaitingApprovalChildPostIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostAndParentAwaitingApprovalChildPostIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostAndParentAwaitingApproval[':childPostId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexKey(
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

export function useGetForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostsThreadedPaged[':parentPostId'][':page'][':pageSize'][':replySize'][
            ':getParentPost'
          ][':rootThreadMode'][':sortMode'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostsThreadedPaged[':parentPostId'][':page'][':pageSize'][':replySize'][
            ':getParentPost'
          ][':rootThreadMode'][':sortMode'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexKey(
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

export function useGetForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostsThreadedPagedFromChild[':childPostId'][':page'][':pageSize'][
            ':replySize'
          ][':rootThreadMode'][':sortMode'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetPostsThreadedPagedFromChild[':childPostId'][':page'][':pageSize'][
            ':replySize'
          ][':rootThreadMode'][':sortMode'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetTopicForContentContentIdIndexKey(
  args: InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>,
) {
  return ['Forum', '/Forum/GetTopicForContent/:contentId/', args] as const
}

export function useGetForumGetTopicForContentContentIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetTopicForContentContentIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetTopicForContent[':contentId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetTopicForContentContentIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetTopicForContentContentIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetTopicForContent[':contentId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexKey(
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

export function useGetForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetTopicsPaged[':page'][':pageSize'][':group'][':sort'][':quickDate'][
            ':categoryFilter'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Forum.GetTopicsPaged[':page'][':pageSize'][':group'][':sort'][':quickDate'][
            ':categoryFilter'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetForumPollTopicIdIndexKey(
  args: InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>,
) {
  return ['Forum', '/Forum/Poll/:topicId/', args] as const
}

export function useGetForumPollTopicIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumPollTopicIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Forum.Poll[':topicId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetForumPollTopicIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetForumPollTopicIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Forum.Poll[':topicId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostForumRecruitSummariesIndexKey() {
  return ['Forum', '/Forum/Recruit/Summaries/', 'POST'] as const
}

export function usePostForumRecruitSummariesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Forum.Recruit.Summaries.index.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForumRecruitSummariesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.Forum.Recruit.Summaries.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetAvailableLocalesIndexKey() {
  return ['GetAvailableLocales', '/GetAvailableLocales/'] as const
}

export function useGetGetAvailableLocalesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetAvailableLocalesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GetAvailableLocales.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetAvailableLocalesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetAvailableLocalesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.GetAvailableLocales.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GetAvailableLocales.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGlobalAlertsIndexKey(
  args: InferRequestType<typeof client.GlobalAlerts.index.$get>,
) {
  return ['GlobalAlerts', '/GlobalAlerts/', args] as const
}

export function useGetGlobalAlertsIndex<TError = unknown>(
  args: InferRequestType<typeof client.GlobalAlerts.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGlobalAlertsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GlobalAlerts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalAlertsIndex<TError = unknown>(
  args: InferRequestType<typeof client.GlobalAlerts.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGlobalAlertsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GlobalAlerts.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GlobalAlerts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2GetAvailableAvatarsIndexKey() {
  return ['GroupV2', '/GroupV2/GetAvailableAvatars/'] as const
}

export function useGetGroupV2GetAvailableAvatarsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GetAvailableAvatarsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2.GetAvailableAvatars.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GetAvailableAvatarsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GetAvailableAvatarsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.GroupV2.GetAvailableAvatars.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2.GetAvailableAvatars.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2GetAvailableThemesIndexKey() {
  return ['GroupV2', '/GroupV2/GetAvailableThemes/'] as const
}

export function useGetGroupV2GetAvailableThemesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GetAvailableThemesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2.GetAvailableThemes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GetAvailableThemesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GetAvailableThemesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.GroupV2.GetAvailableThemes.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2.GetAvailableThemes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2GetUserClanInviteSettingMTypeIndexKey(
  args: InferRequestType<
    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/GetUserClanInviteSetting/:mType/', args] as const
}

export function useGetGroupV2GetUserClanInviteSettingMTypeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GetUserClanInviteSettingMTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.GetUserClanInviteSetting[':mType'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GetUserClanInviteSettingMTypeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GetUserClanInviteSettingMTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.GetUserClanInviteSetting[':mType'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2NameGroupNameGroupTypeIndexKey(
  args: InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/Name/:groupName/:groupType/', args] as const
}

export function useGetGroupV2NameGroupNameGroupTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2NameGroupNameGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.Name[':groupName'][':groupType'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2NameGroupNameGroupTypeIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2NameGroupNameGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.Name[':groupName'][':groupType'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGroupV2NameV2IndexKey() {
  return ['GroupV2', '/GroupV2/NameV2/', 'POST'] as const
}

export function usePostGroupV2NameV2Index<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.NameV2.index.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2NameV2IndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.GroupV2.NameV2.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexKey() {
  return ['GroupV2', '/GroupV2/Recommended/:groupType/:createDateRange/', 'POST'] as const
}

export function usePostGroupV2RecommendedGroupTypeCreateDateRangeIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2RecommendedGroupTypeCreateDateRangeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2.Recommended[':groupType'][':createDateRange'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexKey(
  args: InferRequestType<
    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/Recover/:membershipType/:membershipId/:groupType/', args] as const
}

export function useGetGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.Recover[':membershipType'][':membershipId'][':groupType'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.Recover[':membershipType'][':membershipId'][':groupType'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGroupV2SearchIndexKey() {
  return ['GroupV2', '/GroupV2/Search/', 'POST'] as const
}

export function usePostGroupV2SearchIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GroupV2.Search.index.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2SearchIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.GroupV2.Search.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexKey(
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

export function useGetGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.User.Potential[':membershipType'][':membershipId'][':filter'][
            ':groupType'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.User.Potential[':membershipType'][':membershipId'][':filter'][
            ':groupType'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexKey(
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

export function useGetGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.User[':membershipType'][':membershipId'][':filter'][
            ':groupType'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2.User[':membershipType'][':membershipId'][':filter'][
            ':groupType'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2GroupIdIndexKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/', args] as const
}

export function useGetGroupV2GroupIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GroupV2[':groupId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GroupIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GroupV2[':groupId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Admin/AbdicateFoundership/:membershipType/:founderIdNew/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Admin.AbdicateFoundership[':membershipType'][
            ':founderIdNew'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupV2GroupIdAdminsAndFounderIndexKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/AdminsAndFounder/', args] as const
}

export function useGetGroupV2GroupIdAdminsAndFounderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdAdminsAndFounderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2[':groupId'].AdminsAndFounder.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GroupIdAdminsAndFounderIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdAdminsAndFounderIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2[':groupId'].AdminsAndFounder.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2GroupIdBannedIndexKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/Banned/', args] as const
}

export function useGetGroupV2GroupIdBannedIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdBannedIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GroupV2[':groupId'].Banned.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GroupIdBannedIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdBannedIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GroupV2[':groupId'].Banned.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupV2GroupIdEditIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/Edit/', 'POST'] as const
}

export function usePostGroupV2GroupIdEditIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdEditIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']> },
      ) => parseResponse(client.GroupV2[':groupId'].Edit.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdEditClanBannerIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/EditClanBanner/', 'POST'] as const
}

export function usePostGroupV2GroupIdEditClanBannerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdEditClanBannerIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']
          >
        },
      ) => parseResponse(client.GroupV2[':groupId'].EditClanBanner.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdEditFounderOptionsIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/EditFounderOptions/', 'POST'] as const
}

export function usePostGroupV2GroupIdEditFounderOptionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdEditFounderOptionsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].EditFounderOptions.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupV2GroupIdMembersIndexKey(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/', args] as const
}

export function useGetGroupV2GroupIdMembersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdMembersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GroupV2[':groupId'].Members.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GroupIdMembersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdMembersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.GroupV2[':groupId'].Members.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/Approve/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members.Approve[':membershipType'][
            ':membershipId'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersApproveAllIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/ApproveAll/', 'POST'] as const
}

export function usePostGroupV2GroupIdMembersApproveAllIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdMembersApproveAllIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members.ApproveAll.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersApproveListIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/ApproveList/', 'POST'] as const
}

export function usePostGroupV2GroupIdMembersApproveListIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdMembersApproveListIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members.ApproveList.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersDenyAllIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/DenyAll/', 'POST'] as const
}

export function usePostGroupV2GroupIdMembersDenyAllIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdMembersDenyAllIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.GroupV2[':groupId'].Members.DenyAll.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersDenyListIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/Members/DenyList/', 'POST'] as const
}

export function usePostGroupV2GroupIdMembersDenyListIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdMembersDenyListIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.GroupV2[':groupId'].Members.DenyList.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/IndividualInvite/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members.IndividualInvite[':membershipType'][
            ':membershipId'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/IndividualInviteCancel/:membershipType/:membershipId/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members.IndividualInviteCancel[':membershipType'][
            ':membershipId'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupV2GroupIdMembersInvitedIndividualsIndexKey(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/InvitedIndividuals/', args] as const
}

export function useGetGroupV2GroupIdMembersInvitedIndividualsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdMembersInvitedIndividualsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2[':groupId'].Members.InvitedIndividuals.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GroupIdMembersInvitedIndividualsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdMembersInvitedIndividualsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2[':groupId'].Members.InvitedIndividuals.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGroupV2GroupIdMembersPendingIndexKey(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/Members/Pending/', args] as const
}

export function useGetGroupV2GroupIdMembersPendingIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdMembersPendingIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2[':groupId'].Members.Pending.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GroupIdMembersPendingIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdMembersPendingIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.GroupV2[':groupId'].Members.Pending.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Ban/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Ban.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Kick/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Kick.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/SetMembershipType/:memberType/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].SetMembershipType[
            ':memberType'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Unban/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Unban.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGroupV2GroupIdOptionalConversationsIndexKey(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
  >,
) {
  return ['GroupV2', '/GroupV2/:groupId/OptionalConversations/', args] as const
}

export function useGetGroupV2GroupIdOptionalConversationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdOptionalConversationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2[':groupId'].OptionalConversations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupV2GroupIdOptionalConversationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupV2GroupIdOptionalConversationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.GroupV2[':groupId'].OptionalConversations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGroupV2GroupIdOptionalConversationsAddIndexKey() {
  return ['GroupV2', '/GroupV2/:groupId/OptionalConversations/Add/', 'POST'] as const
}

export function usePostGroupV2GroupIdOptionalConversationsAddIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdOptionalConversationsAddIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].OptionalConversations.Add.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexKey() {
  return [
    'GroupV2',
    '/GroupV2/:groupId/OptionalConversations/Edit/:conversationId/',
    'POST',
  ] as const
}

export function usePostGroupV2GroupIdOptionalConversationsEditConversationIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupV2GroupIdOptionalConversationsEditConversationIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.GroupV2[':groupId'].OptionalConversations.Edit[':conversationId'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsIndexKey() {
  return ['Settings', '/Settings/'] as const
}

export function useGetSettingsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Settings.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Settings.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Settings.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSocialFriendsIndexKey() {
  return ['Social', '/Social/Friends/'] as const
}

export function useGetSocialFriendsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSocialFriendsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Social.Friends.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSocialFriendsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSocialFriendsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Social.Friends.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSocialFriendsAddMembershipIdIndexKey() {
  return ['Social', '/Social/Friends/Add/:membershipId/', 'POST'] as const
}

export function usePostSocialFriendsAddMembershipIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSocialFriendsAddMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Social.Friends.Add)[':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.Social.Friends.Add[':membershipId'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSocialFriendsRemoveMembershipIdIndexKey() {
  return ['Social', '/Social/Friends/Remove/:membershipId/', 'POST'] as const
}

export function usePostSocialFriendsRemoveMembershipIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSocialFriendsRemoveMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Social.Friends.Remove[':membershipId'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSocialFriendsRequestsIndexKey() {
  return ['Social', '/Social/Friends/Requests/'] as const
}

export function useGetSocialFriendsRequestsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSocialFriendsRequestsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Social.Friends.Requests.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSocialFriendsRequestsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSocialFriendsRequestsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Social.Friends.Requests.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Social.Friends.Requests.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSocialFriendsRequestsAcceptMembershipIdIndexKey() {
  return ['Social', '/Social/Friends/Requests/Accept/:membershipId/', 'POST'] as const
}

export function usePostSocialFriendsRequestsAcceptMembershipIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSocialFriendsRequestsAcceptMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Social.Friends.Requests.Accept[':membershipId'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSocialFriendsRequestsDeclineMembershipIdIndexKey() {
  return ['Social', '/Social/Friends/Requests/Decline/:membershipId/', 'POST'] as const
}

export function usePostSocialFriendsRequestsDeclineMembershipIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSocialFriendsRequestsDeclineMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Social.Friends.Requests.Decline[':membershipId'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSocialFriendsRequestsRemoveMembershipIdIndexKey() {
  return ['Social', '/Social/Friends/Requests/Remove/:membershipId/', 'POST'] as const
}

export function usePostSocialFriendsRequestsRemoveMembershipIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSocialFriendsRequestsRemoveMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Social.Friends.Requests.Remove[':membershipId'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSocialPlatformFriendsFriendPlatformPageIndexKey(
  args: InferRequestType<
    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
  >,
) {
  return ['Social', '/Social/PlatformFriends/:friendPlatform/:page/', args] as const
}

export function useGetSocialPlatformFriendsFriendPlatformPageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSocialPlatformFriendsFriendPlatformPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Social.PlatformFriends[':friendPlatform'][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSocialPlatformFriendsFriendPlatformPageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSocialPlatformFriendsFriendPlatformPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Social.PlatformFriends[':friendPlatform'][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexKey() {
  return [
    'Tokens',
    '/Tokens/Partner/ApplyMissingOffers/:partnerApplicationId/:targetBnetMembershipId/',
    'POST',
  ] as const
}

export function usePostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.Tokens.Partner.ApplyMissingOffers[':partnerApplicationId'][
            ':targetBnetMembershipId'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTokensPartnerClaimOfferIndexKey() {
  return ['Tokens', '/Tokens/Partner/ClaimOffer/', 'POST'] as const
}

export function usePostTokensPartnerClaimOfferIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Partner.ClaimOffer.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokensPartnerClaimOfferIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.Tokens.Partner.ClaimOffer.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTokensPartnerForceDropsRepairIndexKey() {
  return ['Tokens', '/Tokens/Partner/ForceDropsRepair/', 'POST'] as const
}

export function usePostTokensPartnerForceDropsRepairIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Partner.ForceDropsRepair.index.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokensPartnerForceDropsRepairIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.Tokens.Partner.ForceDropsRepair.index.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexKey(
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

export function useGetTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Partner.History[':partnerApplicationId'][
            ':targetBnetMembershipId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Partner.History[':partnerApplicationId'][
            ':targetBnetMembershipId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexKey(
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

export function useGetTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Partner.History[':targetBnetMembershipId'].Application[
            ':partnerApplicationId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Partner.History[':targetBnetMembershipId'].Application[
            ':partnerApplicationId'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTokensRewardsBungieRewardsIndexKey() {
  return ['Tokens', '/Tokens/Rewards/BungieRewards/'] as const
}

export function useGetTokensRewardsBungieRewardsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensRewardsBungieRewardsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Tokens.Rewards.BungieRewards.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensRewardsBungieRewardsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensRewardsBungieRewardsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.Tokens.Rewards.BungieRewards.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.Tokens.Rewards.BungieRewards.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexKey(
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

export function useGetTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Rewards.GetRewardsForPlatformUser[':membershipId'][
            ':membershipType'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Rewards.GetRewardsForPlatformUser[':membershipId'][
            ':membershipType'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTokensRewardsGetRewardsForUserMembershipIdIndexKey(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
  >,
) {
  return ['Tokens', '/Tokens/Rewards/GetRewardsForUser/:membershipId/', args] as const
}

export function useGetTokensRewardsGetRewardsForUserMembershipIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensRewardsGetRewardsForUserMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Rewards.GetRewardsForUser[':membershipId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensRewardsGetRewardsForUserMembershipIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensRewardsGetRewardsForUserMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Tokens.Rewards.GetRewardsForUser[':membershipId'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTrendingCategoriesIndexKey() {
  return ['Trending', '/Trending/Categories/'] as const
}

export function useGetTrendingCategoriesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingCategoriesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Trending.Categories.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendingCategoriesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingCategoriesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.Trending.Categories.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Trending.Categories.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTrendingCategoriesCategoryIdPageNumberIndexKey(
  args: InferRequestType<
    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
  >,
) {
  return ['Trending', '/Trending/Categories/:categoryId/:pageNumber/', args] as const
}

export function useGetTrendingCategoriesCategoryIdPageNumberIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingCategoriesCategoryIdPageNumberIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Trending.Categories[':categoryId'][':pageNumber'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendingCategoriesCategoryIdPageNumberIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingCategoriesCategoryIdPageNumberIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Trending.Categories[':categoryId'][':pageNumber'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTrendingDetailsTrendingEntryTypeIdentifierIndexKey(
  args: InferRequestType<
    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
  >,
) {
  return ['Trending', '/Trending/Details/:trendingEntryType/:identifier/', args] as const
}

export function useGetTrendingDetailsTrendingEntryTypeIdentifierIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingDetailsTrendingEntryTypeIdentifierIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Trending.Details[':trendingEntryType'][':identifier'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrendingDetailsTrendingEntryTypeIdentifierIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrendingDetailsTrendingEntryTypeIdentifierIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.Trending.Details[':trendingEntryType'][':identifier'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserGetAvailableThemesIndexKey() {
  return ['User', '/User/GetAvailableThemes/'] as const
}

export function useGetUserGetAvailableThemesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetAvailableThemesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.User.GetAvailableThemes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGetAvailableThemesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetAvailableThemesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.User.GetAvailableThemes.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.User.GetAvailableThemes.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserGetBungieNetUserByIdIdIndexKey(
  args: InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>,
) {
  return ['User', '/User/GetBungieNetUserById/:id/', args] as const
}

export function useGetUserGetBungieNetUserByIdIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetBungieNetUserByIdIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.User.GetBungieNetUserById[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGetBungieNetUserByIdIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetBungieNetUserByIdIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.User.GetBungieNetUserById[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserGetCredentialTypesForTargetAccountMembershipIdIndexKey(
  args: InferRequestType<
    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
  >,
) {
  return ['User', '/User/GetCredentialTypesForTargetAccount/:membershipId/', args] as const
}

export function useGetUserGetCredentialTypesForTargetAccountMembershipIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetCredentialTypesForTargetAccountMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetCredentialTypesForTargetAccount[':membershipId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGetCredentialTypesForTargetAccountMembershipIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetCredentialTypesForTargetAccountMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetCredentialTypesForTargetAccount[':membershipId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexKey(
  args: InferRequestType<
    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
  >,
) {
  return ['User', '/User/GetMembershipFromHardLinkedCredential/:crType/:credential/', args] as const
}

export function useGetUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetMembershipFromHardLinkedCredential[':crType'][':credential'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetMembershipFromHardLinkedCredential[':crType'][':credential'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserGetMembershipsByIdMembershipIdMembershipTypeIndexKey(
  args: InferRequestType<
    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
  >,
) {
  return ['User', '/User/GetMembershipsById/:membershipId/:membershipType/', args] as const
}

export function useGetUserGetMembershipsByIdMembershipIdMembershipTypeIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetMembershipsByIdMembershipIdMembershipTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetMembershipsById[':membershipId'][':membershipType'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGetMembershipsByIdMembershipIdMembershipTypeIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetMembershipsByIdMembershipIdMembershipTypeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetMembershipsById[':membershipId'][':membershipType'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserGetMembershipsForCurrentUserIndexKey() {
  return ['User', '/User/GetMembershipsForCurrentUser/'] as const
}

export function useGetUserGetMembershipsForCurrentUserIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetMembershipsForCurrentUserIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetMembershipsForCurrentUser.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGetMembershipsForCurrentUserIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetMembershipsForCurrentUserIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.User.GetMembershipsForCurrentUser.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetMembershipsForCurrentUser.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserGetSanitizedPlatformDisplayNamesMembershipIdIndexKey(
  args: InferRequestType<
    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
  >,
) {
  return ['User', '/User/GetSanitizedPlatformDisplayNames/:membershipId/', args] as const
}

export function useGetUserGetSanitizedPlatformDisplayNamesMembershipIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetSanitizedPlatformDisplayNamesMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetSanitizedPlatformDisplayNames[':membershipId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserGetSanitizedPlatformDisplayNamesMembershipIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserGetSanitizedPlatformDisplayNamesMembershipIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.GetSanitizedPlatformDisplayNames[':membershipId'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUserSearchGlobalNamePageIndexKey() {
  return ['User', '/User/Search/GlobalName/:page/', 'POST'] as const
}

export function usePostUserSearchGlobalNamePageIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSearchGlobalNamePageIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>
        },
      ) => parseResponse(client.User.Search.GlobalName[':page'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserSearchPrefixDisplayNamePrefixPageIndexKey(
  args: InferRequestType<
    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
  >,
) {
  return ['User', '/User/Search/Prefix/:displayNamePrefix/:page/', args] as const
}

export function useGetUserSearchPrefixDisplayNamePrefixPageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserSearchPrefixDisplayNamePrefixPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.Search.Prefix[':displayNamePrefix'][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserSearchPrefixDisplayNamePrefixPageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserSearchPrefixDisplayNamePrefixPageIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.User.Search.Prefix[':displayNamePrefix'][':page'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUserSystemOverridesIndexKey() {
  return ['UserSystemOverrides', '/UserSystemOverrides/'] as const
}

export function useGetUserSystemOverridesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserSystemOverridesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.UserSystemOverrides.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserSystemOverridesIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserSystemOverridesIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.UserSystemOverrides.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.UserSystemOverrides.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
