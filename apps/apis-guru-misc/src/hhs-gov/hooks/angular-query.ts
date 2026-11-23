import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getResourcesKey() {
  return ['resources'] as const
}

export function getResourcesJsonKey() {
  return ['resources.json'] as const
}

export function getResourcesJsonQueryKey(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
) {
  return ['resources.json', '/resources.json', args] as const
}

export function getResourcesJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesJsonQueryKey>
  >({
    queryKey: getResourcesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['resources.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResourcesJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['resources.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getResourcesCampaignsJsonQueryKey(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
) {
  return ['resources', '/resources/campaigns.json', args] as const
}

export function getResourcesCampaignsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsJsonQueryKey>
  >({
    queryKey: getResourcesCampaignsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources['campaigns.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesCampaignsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesCampaignsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesCampaignsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesCampaignsIdJsonQueryKey(
  args: InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
) {
  return ['resources', '/resources/campaigns/:id.json', args] as const
}

export function getResourcesCampaignsIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsIdJsonQueryKey>
  >({
    queryKey: getResourcesCampaignsIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.campaigns[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesCampaignsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesCampaignsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesCampaignsIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesCampaignsIdMediaJsonQueryKey(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
) {
  return ['resources', '/resources/campaigns/:id/media.json', args] as const
}

export function getResourcesCampaignsIdMediaJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsIdMediaJsonQueryKey>
  >({
    queryKey: getResourcesCampaignsIdMediaJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.campaigns[':id']['media.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesCampaignsIdMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesCampaignsIdMediaJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesCampaignsIdMediaJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesCampaignsIdSyndicateFormatQueryKey(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']>,
) {
  return ['resources', '/resources/campaigns/:id/syndicate.{format}', args] as const
}

export function getResourcesCampaignsIdSyndicateFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsIdSyndicateFormatQueryKey>
  >({
    queryKey: getResourcesCampaignsIdSyndicateFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.campaigns[':id']['syndicate.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesCampaignsIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesCampaignsIdSyndicateFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesCampaignsIdSyndicateFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesLanguagesJsonQueryKey(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
) {
  return ['resources', '/resources/languages.json', args] as const
}

export function getResourcesLanguagesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesLanguagesJsonQueryKey>
  >({
    queryKey: getResourcesLanguagesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources['languages.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesLanguagesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)['languages.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesLanguagesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesLanguagesJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesLanguagesIdJsonQueryKey(
  args: InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
) {
  return ['resources', '/resources/languages/:id.json', args] as const
}

export function getResourcesLanguagesIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesLanguagesIdJsonQueryKey>
  >({
    queryKey: getResourcesLanguagesIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.languages[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesLanguagesIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesLanguagesIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesLanguagesIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaJsonQueryKey(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
) {
  return ['resources', '/resources/media.json', args] as const
}

export function getResourcesMediaJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaJsonQueryKey>
  >({
    queryKey: getResourcesMediaJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources['media.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)['media.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesMediaJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getResourcesMediaFeaturedJsonQueryKey(
  args: InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
) {
  return ['resources', '/resources/media/featured.json', args] as const
}

export function getResourcesMediaFeaturedJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaFeaturedJsonQueryKey>
  >({
    queryKey: getResourcesMediaFeaturedJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media['featured.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaFeaturedJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaFeaturedJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaFeaturedJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaMostPopularMediaFormatQueryKey(
  args: InferRequestType<(typeof client.resources.media)['mostPopularMedia.{format}']['$get']>,
) {
  return ['resources', '/resources/media/mostPopularMedia.{format}', args] as const
}

export function getResourcesMediaMostPopularMediaFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)['mostPopularMedia.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaMostPopularMediaFormatQueryKey>
  >({
    queryKey: getResourcesMediaMostPopularMediaFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media['mostPopularMedia.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaMostPopularMediaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources.media)['mostPopularMedia.{format}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.media)['mostPopularMedia.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaMostPopularMediaFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaMostPopularMediaFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaSearchResultsJsonQueryKey(
  args: InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
) {
  return ['resources', '/resources/media/searchResults.json', args] as const
}

export function getResourcesMediaSearchResultsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaSearchResultsJsonQueryKey>
  >({
    queryKey: getResourcesMediaSearchResultsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media['searchResults.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaSearchResultsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaSearchResultsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaSearchResultsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdJsonQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
) {
  return ['resources', '/resources/media/:id.json', args] as const
}

export function getResourcesMediaIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdJsonQueryKey>
  >({
    queryKey: getResourcesMediaIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdContentQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
) {
  return ['resources', '/resources/media/:id/content', args] as const
}

export function getResourcesMediaIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdContentQueryKey>
  >({
    queryKey: getResourcesMediaIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdEmbedJsonQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
) {
  return ['resources', '/resources/media/:id/embed.json', args] as const
}

export function getResourcesMediaIdEmbedJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdEmbedJsonQueryKey>
  >({
    queryKey: getResourcesMediaIdEmbedJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id']['embed.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdEmbedJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdEmbedJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdEmbedJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdPreviewJpgQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
) {
  return ['resources', '/resources/media/:id/preview.jpg', args] as const
}

export function getResourcesMediaIdPreviewJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdPreviewJpgQueryKey>
  >({
    queryKey: getResourcesMediaIdPreviewJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id']['preview.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdPreviewJpgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdPreviewJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdRelatedMediaFormatQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']>,
) {
  return ['resources', '/resources/media/:id/relatedMedia.{format}', args] as const
}

export function getResourcesMediaIdRelatedMediaFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdRelatedMediaFormatQueryKey>
  >({
    queryKey: getResourcesMediaIdRelatedMediaFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id']['relatedMedia.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdRelatedMediaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdRelatedMediaFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdRelatedMediaFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdSyndicateFormatQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['syndicate.{format}']['$get']>,
) {
  return ['resources', '/resources/media/:id/syndicate.{format}', args] as const
}

export function getResourcesMediaIdSyndicateFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdSyndicateFormatQueryKey>
  >({
    queryKey: getResourcesMediaIdSyndicateFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id']['syndicate.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources.media)[':id']['syndicate.{format}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.media)[':id']['syndicate.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdSyndicateFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdSyndicateFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdThumbnailJpgQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
) {
  return ['resources', '/resources/media/:id/thumbnail.jpg', args] as const
}

export function getResourcesMediaIdThumbnailJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdThumbnailJpgQueryKey>
  >({
    queryKey: getResourcesMediaIdThumbnailJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id']['thumbnail.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdThumbnailJpgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdThumbnailJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaIdYoutubeMetaDataJsonQueryKey(
  args: InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>,
) {
  return ['resources', '/resources/media/:id/youtubeMetaData.json', args] as const
}

export function getResourcesMediaIdYoutubeMetaDataJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdYoutubeMetaDataJsonQueryKey>
  >({
    queryKey: getResourcesMediaIdYoutubeMetaDataJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.media[':id']['youtubeMetaData.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaIdYoutubeMetaDataJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaIdYoutubeMetaDataJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaIdYoutubeMetaDataJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesMediaTypesFormatQueryKey(
  args: InferRequestType<(typeof client.resources)['mediaTypes.{format}']['$get']>,
) {
  return ['resources', '/resources/mediaTypes.{format}', args] as const
}

export function getResourcesMediaTypesFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)['mediaTypes.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['mediaTypes.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)['mediaTypes.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaTypesFormatQueryKey>
  >({
    queryKey: getResourcesMediaTypesFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources['mediaTypes.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesMediaTypesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)['mediaTypes.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)['mediaTypes.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)['mediaTypes.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesMediaTypesFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesMediaTypesFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesSourcesJsonQueryKey(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
) {
  return ['resources', '/resources/sources.json', args] as const
}

export function getResourcesSourcesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesSourcesJsonQueryKey>
  >({
    queryKey: getResourcesSourcesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources['sources.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesSourcesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)['sources.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesSourcesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesSourcesJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesSourcesIdJsonQueryKey(
  args: InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
) {
  return ['resources', '/resources/sources/:id.json', args] as const
}

export function getResourcesSourcesIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesSourcesIdJsonQueryKey>
  >({
    queryKey: getResourcesSourcesIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.sources[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesSourcesIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesSourcesIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesSourcesIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesSourcesIdSyndicateFormatQueryKey(
  args: InferRequestType<(typeof client.resources.sources)[':id']['syndicate.{format}']['$get']>,
) {
  return ['resources', '/resources/sources/:id/syndicate.{format}', args] as const
}

export function getResourcesSourcesIdSyndicateFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.sources)[':id']['syndicate.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.sources)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.resources.sources)[':id']['syndicate.{format}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesSourcesIdSyndicateFormatQueryKey>
  >({
    queryKey: getResourcesSourcesIdSyndicateFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.sources[':id']['syndicate.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesSourcesIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.sources)[':id']['syndicate.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.resources.sources)[':id']['syndicate.{format}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.sources)[':id']['syndicate.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesSourcesIdSyndicateFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesSourcesIdSyndicateFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTagsFormatQueryKey(
  args: InferRequestType<(typeof client.resources)['tags.{format}']['$get']>,
) {
  return ['resources', '/resources/tags.{format}', args] as const
}

export function getResourcesTagsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['tags.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['tags.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)['tags.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsFormatQueryKey>
  >({
    queryKey: getResourcesTagsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources['tags.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTagsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['tags.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)['tags.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)['tags.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTagsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesTagsFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getResourcesTagsTagLanguagesFormatQueryKey(
  args: InferRequestType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>,
) {
  return ['resources', '/resources/tags/tagLanguages.{format}', args] as const
}

export function getResourcesTagsTagLanguagesFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsTagLanguagesFormatQueryKey>
  >({
    queryKey: getResourcesTagsTagLanguagesFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.tags['tagLanguages.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTagsTagLanguagesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTagsTagLanguagesFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTagsTagLanguagesFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTagsTagTypesFormatQueryKey(
  args: InferRequestType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>,
) {
  return ['resources', '/resources/tags/tagTypes.{format}', args] as const
}

export function getResourcesTagsTagTypesFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsTagTypesFormatQueryKey>
  >({
    queryKey: getResourcesTagsTagTypesFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.tags['tagTypes.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTagsTagTypesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTagsTagTypesFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTagsTagTypesFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTagsIdFormatQueryKey(
  args: InferRequestType<(typeof client.resources.tags)[':id.{format}']['$get']>,
) {
  return ['resources', '/resources/tags/:id.{format}', args] as const
}

export function getResourcesTagsIdFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.tags)[':id.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.tags)[':id.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdFormatQueryKey>
  >({
    queryKey: getResourcesTagsIdFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.tags[':id.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTagsIdFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.tags)[':id.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.tags)[':id.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTagsIdFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTagsIdFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTagsIdMediaFormatQueryKey(
  args: InferRequestType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>,
) {
  return ['resources', '/resources/tags/:id/media.{format}', args] as const
}

export function getResourcesTagsIdMediaFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdMediaFormatQueryKey>
  >({
    queryKey: getResourcesTagsIdMediaFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.tags[':id']['media.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTagsIdMediaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTagsIdMediaFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTagsIdMediaFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTagsIdRelatedFormatQueryKey(
  args: InferRequestType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>,
) {
  return ['resources', '/resources/tags/:id/related.{format}', args] as const
}

export function getResourcesTagsIdRelatedFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdRelatedFormatQueryKey>
  >({
    queryKey: getResourcesTagsIdRelatedFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.tags[':id']['related.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTagsIdRelatedFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTagsIdRelatedFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTagsIdRelatedFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesTagsIdSyndicateFormatQueryKey(
  args: InferRequestType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>,
) {
  return ['resources', '/resources/tags/:id/syndicate.{format}', args] as const
}

export function getResourcesTagsIdSyndicateFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdSyndicateFormatQueryKey>
  >({
    queryKey: getResourcesTagsIdSyndicateFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.tags[':id']['syndicate.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesTagsIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesTagsIdSyndicateFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesTagsIdSyndicateFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getResourcesUserMediaListsIdJsonQueryKey(
  args: InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
) {
  return ['resources', '/resources/userMediaLists/:id.json', args] as const
}

export function getResourcesUserMediaListsIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesUserMediaListsIdJsonQueryKey>
  >({
    queryKey: getResourcesUserMediaListsIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.userMediaLists[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectResourcesUserMediaListsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesUserMediaListsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getResourcesUserMediaListsIdJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
