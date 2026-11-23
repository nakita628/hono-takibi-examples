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

export function useResourcesJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['resources.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useResourcesCampaignsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesCampaignsJsonQueryKey>
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
      ...getResourcesCampaignsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesCampaignsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['campaigns.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesCampaignsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesCampaignsIdJsonQueryKey>
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
      ...getResourcesCampaignsIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesCampaignsIdJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesCampaignsIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesCampaignsIdMediaJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesCampaignsIdMediaJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesCampaignsIdMediaJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesCampaignsIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesCampaignsIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesCampaignsIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesCampaignsIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesLanguagesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesLanguagesJsonQueryKey>
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
      ...getResourcesLanguagesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesLanguagesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['languages.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesLanguagesJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesLanguagesIdJsonQueryKey>
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
      ...getResourcesLanguagesIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesLanguagesIdJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesLanguagesIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesMediaJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesMediaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['media.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesMediaJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaFeaturedJsonQueryKey>
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
      ...getResourcesMediaFeaturedJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaFeaturedJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaFeaturedJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesMediaMostPopularMediaFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesMediaMostPopularMediaFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaMostPopularMediaFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaMostPopularMediaFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaSearchResultsJsonQueryKey>
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
      ...getResourcesMediaSearchResultsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaSearchResultsJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaSearchResultsJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesMediaIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesMediaIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources.media)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesMediaIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaIdContentQueryKey>
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
      ...getResourcesMediaIdContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdContent<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaIdContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaIdEmbedJsonQueryKey>
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
      ...getResourcesMediaIdEmbedJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdEmbedJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaIdEmbedJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaIdPreviewJpgQueryKey>
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
      ...getResourcesMediaIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdPreviewJpg<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaIdPreviewJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesMediaIdRelatedMediaFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesMediaIdRelatedMediaFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdRelatedMediaFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaIdRelatedMediaFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesMediaIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesMediaIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaIdThumbnailJpgQueryKey>
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
      ...getResourcesMediaIdThumbnailJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdThumbnailJpg<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaIdThumbnailJpgQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesMediaIdYoutubeMetaDataJsonQueryKey>
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
      ...getResourcesMediaIdYoutubeMetaDataJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaIdYoutubeMetaDataJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaIdYoutubeMetaDataJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesMediaTypesFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesMediaTypesFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesMediaTypesFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesMediaTypesFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesSourcesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesSourcesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesSourcesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesSourcesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['sources.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesSourcesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesSourcesIdJsonQueryKey>
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
      ...getResourcesSourcesIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesSourcesIdJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesSourcesIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesSourcesIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesSourcesIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesSourcesIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesSourcesIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesTagsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['tags.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['tags.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesTagsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesTagsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)['tags.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)['tags.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesTagsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useResourcesTagsTagLanguagesFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesTagsTagLanguagesFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesTagsTagLanguagesFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesTagsTagLanguagesFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesTagsTagTypesFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesTagsTagTypesFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesTagsTagTypesFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesTagsTagTypesFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesTagsIdFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesTagsIdFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesTagsIdFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesTagsIdFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesTagsIdMediaFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesTagsIdMediaFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesTagsIdMediaFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesTagsIdMediaFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesTagsIdRelatedFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesTagsIdRelatedFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesTagsIdRelatedFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesTagsIdRelatedFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useResourcesTagsIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getResourcesTagsIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesTagsIdSyndicateFormat<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesTagsIdSyndicateFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getResourcesUserMediaListsIdJsonQueryKey>
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
      ...getResourcesUserMediaListsIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesUserMediaListsIdJson<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getResourcesUserMediaListsIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
