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

export function getResourcesKey() {
  return ['resources'] as const
}

export function getResourcesJsonKey() {
  return ['resources.json'] as const
}

export function getResourcesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['resources.json']['$get']>>,
) {
  return ['resources.json', '/resources.json', toValue(args)] as const
}

export function getResourcesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['resources.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['resources.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['resources.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
            >
          >,
          ReturnType<typeof getResourcesJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['resources.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesCampaignsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['campaigns.json']['$get']>>,
) {
  return ['resources', '/resources/campaigns.json', toValue(args)] as const
}

export function getResourcesCampaignsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['campaigns.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesCampaignsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources['campaigns.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesCampaignsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['campaigns.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesCampaignsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesCampaignsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources['campaigns.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesCampaignsIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>>,
) {
  return ['resources', '/resources/campaigns/:id.json', toValue(args)] as const
}

export function getResourcesCampaignsIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesCampaignsIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.campaigns[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesCampaignsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesCampaignsIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.campaigns)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesCampaignsIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.campaigns[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesCampaignsIdMediaJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>
  >,
) {
  return ['resources', '/resources/campaigns/:id/media.json', toValue(args)] as const
}

export function getResourcesCampaignsIdMediaJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesCampaignsIdMediaJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.campaigns[':id']['media.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesCampaignsIdMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>
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
                  ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesCampaignsIdMediaJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsIdMediaJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesCampaignsIdMediaJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.campaigns[':id']['media.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesCampaignsIdSyndicateFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
  >,
) {
  return ['resources', '/resources/campaigns/:id/syndicate.:format', toValue(args)] as const
}

export function getResourcesCampaignsIdSyndicateFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesCampaignsIdSyndicateFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.campaigns[':id']['syndicate.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesCampaignsIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
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
                    (typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']
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
                    (typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getResourcesCampaignsIdSyndicateFormatQueryKey>
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
            ReturnType<(typeof client.resources.campaigns)[':id']['syndicate.:format']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesCampaignsIdSyndicateFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesCampaignsIdSyndicateFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.campaigns[':id']['syndicate.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesLanguagesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['languages.json']['$get']>>,
) {
  return ['resources', '/resources/languages.json', toValue(args)] as const
}

export function getResourcesLanguagesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['languages.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesLanguagesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources['languages.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesLanguagesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['languages.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesLanguagesJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesLanguagesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesLanguagesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources['languages.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesLanguagesIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>>,
) {
  return ['resources', '/resources/languages/:id.json', toValue(args)] as const
}

export function getResourcesLanguagesIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesLanguagesIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.languages[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesLanguagesIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesLanguagesIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.languages)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesLanguagesIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesLanguagesIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.languages[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['media.json']['$get']>>,
) {
  return ['resources', '/resources/media.json', toValue(args)] as const
}

export function getResourcesMediaJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['media.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources['media.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['media.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources['media.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaFeaturedJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['featured.json']['$get']>
  >,
) {
  return ['resources', '/resources/media/featured.json', toValue(args)] as const
}

export function getResourcesMediaFeaturedJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['featured.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaFeaturedJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media['featured.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaFeaturedJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['featured.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaFeaturedJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)['featured.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaFeaturedJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaFeaturedJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media['featured.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaMostPopularMediaFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>
  >,
) {
  return ['resources', '/resources/media/mostPopularMedia.:format', toValue(args)] as const
}

export function getResourcesMediaMostPopularMediaFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaMostPopularMediaFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media['mostPopularMedia.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaMostPopularMediaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>
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
                  ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesMediaMostPopularMediaFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)['mostPopularMedia.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaMostPopularMediaFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaMostPopularMediaFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media['mostPopularMedia.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaSearchResultsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>
  >,
) {
  return ['resources', '/resources/media/searchResults.json', toValue(args)] as const
}

export function getResourcesMediaSearchResultsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaSearchResultsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media['searchResults.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaSearchResultsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaSearchResultsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)['searchResults.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaSearchResultsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaSearchResultsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media['searchResults.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.media)[':id.json']['$get']>>,
) {
  return ['resources', '/resources/media/:id.json', toValue(args)] as const
}

export function getResourcesMediaIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.media)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.media)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>
  >,
) {
  return ['resources', '/resources/media/:id/content', toValue(args)] as const
}

export function getResourcesMediaIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)[':id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdEmbedJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>
  >,
) {
  return ['resources', '/resources/media/:id/embed.json', toValue(args)] as const
}

export function getResourcesMediaIdEmbedJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdEmbedJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id']['embed.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdEmbedJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdEmbedJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)[':id']['embed.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdEmbedJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdEmbedJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id']['embed.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdPreviewJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>
  >,
) {
  return ['resources', '/resources/media/:id/preview.jpg', toValue(args)] as const
}

export function getResourcesMediaIdPreviewJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdPreviewJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id']['preview.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdPreviewJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdPreviewJpgQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdPreviewJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdPreviewJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id']['preview.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdRelatedMediaFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
  >,
) {
  return ['resources', '/resources/media/:id/relatedMedia.:format', toValue(args)] as const
}

export function getResourcesMediaIdRelatedMediaFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdRelatedMediaFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id']['relatedMedia.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdRelatedMediaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
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
                  ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdRelatedMediaFormatQueryKey>
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
            ReturnType<(typeof client.resources.media)[':id']['relatedMedia.:format']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdRelatedMediaFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdRelatedMediaFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id']['relatedMedia.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdSyndicateFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>
  >,
) {
  return ['resources', '/resources/media/:id/syndicate.:format', toValue(args)] as const
}

export function getResourcesMediaIdSyndicateFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdSyndicateFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id']['syndicate.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>
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
                  ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdSyndicateFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)[':id']['syndicate.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdSyndicateFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdSyndicateFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id']['syndicate.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdThumbnailJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>
  >,
) {
  return ['resources', '/resources/media/:id/thumbnail.jpg', toValue(args)] as const
}

export function getResourcesMediaIdThumbnailJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdThumbnailJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id']['thumbnail.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdThumbnailJpgQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdThumbnailJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdThumbnailJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id']['thumbnail.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaIdYoutubeMetaDataJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
  >,
) {
  return ['resources', '/resources/media/:id/youtubeMetaData.json', toValue(args)] as const
}

export function getResourcesMediaIdYoutubeMetaDataJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaIdYoutubeMetaDataJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.media[':id']['youtubeMetaData.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaIdYoutubeMetaDataJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesMediaIdYoutubeMetaDataJsonQueryKey>
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
            ReturnType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaIdYoutubeMetaDataJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaIdYoutubeMetaDataJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.media[':id']['youtubeMetaData.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMediaTypesFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['mediaTypes.:format']['$get']>>,
) {
  return ['resources', '/resources/mediaTypes.:format', toValue(args)] as const
}

export function getResourcesMediaTypesFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['mediaTypes.:format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMediaTypesFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources['mediaTypes.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMediaTypesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['mediaTypes.:format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesMediaTypesFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources)['mediaTypes.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMediaTypesFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMediaTypesFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources['mediaTypes.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesSourcesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['sources.json']['$get']>>,
) {
  return ['resources', '/resources/sources.json', toValue(args)] as const
}

export function getResourcesSourcesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['sources.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesSourcesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources['sources.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesSourcesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['sources.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesSourcesJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesSourcesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesSourcesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources['sources.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesSourcesIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>>,
) {
  return ['resources', '/resources/sources/:id.json', toValue(args)] as const
}

export function getResourcesSourcesIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesSourcesIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.sources[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesSourcesIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesSourcesIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.sources)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesSourcesIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesSourcesIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.sources[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesSourcesIdSyndicateFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
  >,
) {
  return ['resources', '/resources/sources/:id/syndicate.:format', toValue(args)] as const
}

export function getResourcesSourcesIdSyndicateFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesSourcesIdSyndicateFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.sources[':id']['syndicate.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesSourcesIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
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
                  ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesSourcesIdSyndicateFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.sources)[':id']['syndicate.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesSourcesIdSyndicateFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesSourcesIdSyndicateFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.sources[':id']['syndicate.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTagsFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['tags.:format']['$get']>>,
) {
  return ['resources', '/resources/tags.:format', toValue(args)] as const
}

export function getResourcesTagsFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['tags.:format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTagsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources['tags.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTagsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)['tags.:format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesTagsFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['tags.:format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTagsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources['tags.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTagsTagLanguagesFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>
  >,
) {
  return ['resources', '/resources/tags/tagLanguages.:format', toValue(args)] as const
}

export function getResourcesTagsTagLanguagesFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTagsTagLanguagesFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.tags['tagLanguages.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTagsTagLanguagesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesTagsTagLanguagesFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.tags)['tagLanguages.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsTagLanguagesFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTagsTagLanguagesFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.tags['tagLanguages.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTagsTagTypesFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)['tagTypes.:format']['$get']>
  >,
) {
  return ['resources', '/resources/tags/tagTypes.:format', toValue(args)] as const
}

export function getResourcesTagsTagTypesFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)['tagTypes.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTagsTagTypesFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.tags['tagTypes.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTagsTagTypesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)['tagTypes.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesTagsTagTypesFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.tags)['tagTypes.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsTagTypesFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTagsTagTypesFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.tags['tagTypes.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTagsIdFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.tags)[':id.:format']['$get']>>,
) {
  return ['resources', '/resources/tags/:id.:format', toValue(args)] as const
}

export function getResourcesTagsIdFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.tags)[':id.:format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTagsIdFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.tags[':id.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTagsIdFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.tags)[':id.:format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesTagsIdFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.tags)[':id.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTagsIdFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.tags[':id.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTagsIdMediaFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['media.:format']['$get']>
  >,
) {
  return ['resources', '/resources/tags/:id/media.:format', toValue(args)] as const
}

export function getResourcesTagsIdMediaFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['media.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTagsIdMediaFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.tags[':id']['media.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTagsIdMediaFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['media.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesTagsIdMediaFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.tags)[':id']['media.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdMediaFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTagsIdMediaFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.tags[':id']['media.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTagsIdRelatedFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['related.:format']['$get']>
  >,
) {
  return ['resources', '/resources/tags/:id/related.:format', toValue(args)] as const
}

export function getResourcesTagsIdRelatedFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['related.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTagsIdRelatedFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.tags[':id']['related.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTagsIdRelatedFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['related.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>
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
                  ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesTagsIdRelatedFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.tags)[':id']['related.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdRelatedFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTagsIdRelatedFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.tags[':id']['related.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTagsIdSyndicateFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>
  >,
) {
  return ['resources', '/resources/tags/:id/syndicate.:format', toValue(args)] as const
}

export function getResourcesTagsIdSyndicateFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTagsIdSyndicateFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.tags[':id']['syndicate.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTagsIdSyndicateFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>
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
                  ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesTagsIdSyndicateFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.tags)[':id']['syndicate.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTagsIdSyndicateFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTagsIdSyndicateFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.tags[':id']['syndicate.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesUserMediaListsIdJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>
  >,
) {
  return ['resources', '/resources/userMediaLists/:id.json', toValue(args)] as const
}

export function getResourcesUserMediaListsIdJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesUserMediaListsIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.userMediaLists[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesUserMediaListsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesUserMediaListsIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.userMediaLists)[':id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesUserMediaListsIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesUserMediaListsIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.userMediaLists[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
