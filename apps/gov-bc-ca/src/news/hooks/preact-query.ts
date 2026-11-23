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

export function getApiKey() {
  return ['api'] as const
}

export function getApiFacebookPostsByUriQueryKey(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
) {
  return ['api', '/api/FacebookPosts/ByUri', args] as const
}

export function getApiFacebookPostsByUriQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFacebookPostsByUriQueryKey>
  >({
    queryKey: getApiFacebookPostsByUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.FacebookPosts.ByUri.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFacebookPostsByUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFacebookPostsByUriQueryKey>
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
      ...getApiFacebookPostsByUriQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiFacebookPostsByUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFacebookPostsByUriQueryKey>
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
      ...getApiFacebookPostsByUriQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiHomeQueryKey(args: InferRequestType<typeof client.api.Home.$get>) {
  return ['api', '/api/Home', args] as const
}

export function getApiHomeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Home.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHomeQueryKey>
  >({
    queryKey: getApiHomeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Home.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Home.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiHomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiHomeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Home.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiHomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiHomeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMinistriesQueryKey(
  args: InferRequestType<typeof client.api.Ministries.$get>,
) {
  return ['api', '/api/Ministries', args] as const
}

export function getApiMinistriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Ministries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMinistriesQueryKey>
  >({
    queryKey: getApiMinistriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Ministries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMinistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Ministries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMinistriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMinistriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMinistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Ministries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMinistriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMinistriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMinistriesKeyQueryKey(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
) {
  return ['api', '/api/Ministries/:key', args] as const
}

export function getApiMinistriesKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMinistriesKeyQueryKey>
  >({
    queryKey: getApiMinistriesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Ministries[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMinistriesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMinistriesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMinistriesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMinistriesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMinistriesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMinistriesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMinistriesKeyMinisterQueryKey(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
) {
  return ['api', '/api/Ministries/:key/Minister', args] as const
}

export function getApiMinistriesKeyMinisterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMinistriesKeyMinisterQueryKey>
  >({
    queryKey: getApiMinistriesKeyMinisterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Ministries[':key'].Minister.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMinistriesKeyMinister<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMinistriesKeyMinisterQueryKey>
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
      ...getApiMinistriesKeyMinisterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiMinistriesKeyMinister<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMinistriesKeyMinisterQueryKey>
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
      ...getApiMinistriesKeyMinisterQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiNewslettersQueryKey(
  args: InferRequestType<typeof client.api.Newsletters.$get>,
) {
  return ['api', '/api/Newsletters', args] as const
}

export function getApiNewslettersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Newsletters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersQueryKey>
  >({
    queryKey: getApiNewslettersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Newsletters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiNewsletters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Newsletters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiNewslettersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiNewsletters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Newsletters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiNewslettersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiNewslettersImagesGuidQueryKey(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
) {
  return ['api', '/api/Newsletters/Images/:guid', args] as const
}

export function getApiNewslettersImagesGuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersImagesGuidQueryKey>
  >({
    queryKey: getApiNewslettersImagesGuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Newsletters.Images[':guid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiNewslettersImagesGuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersImagesGuidQueryKey>
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
      ...getApiNewslettersImagesGuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiNewslettersImagesGuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersImagesGuidQueryKey>
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
      ...getApiNewslettersImagesGuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiNewslettersNewsletterKeyQueryKey(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
) {
  return ['api', '/api/Newsletters/:newsletterKey', args] as const
}

export function getApiNewslettersNewsletterKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersNewsletterKeyQueryKey>
  >({
    queryKey: getApiNewslettersNewsletterKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Newsletters[':newsletterKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiNewslettersNewsletterKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersNewsletterKeyQueryKey>
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
      ...getApiNewslettersNewsletterKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiNewslettersNewsletterKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersNewsletterKeyQueryKey>
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
      ...getApiNewslettersNewsletterKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
) {
  return ['api', '/api/Newsletters/:newsletterKey/Editions/:editionKey', args] as const
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey>
  >({
    queryKey: getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiNewslettersNewsletterKeyEditionsEditionKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey>
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
      ...getApiNewslettersNewsletterKeyEditionsEditionKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiNewslettersNewsletterKeyEditionsEditionKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey>
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
      ...getApiNewslettersNewsletterKeyEditionsEditionKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
) {
  return [
    'api',
    '/api/Newsletters/:newsletterKey/Editions/:editionKey/Articles/:articleKey',
    args,
  ] as const
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey>
  >({
    queryKey: getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].Articles[
          ':articleKey'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey
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
      ...getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey
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
      ...getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsQueryKey(args: InferRequestType<typeof client.api.Posts.$get>) {
  return ['api', '/api/Posts', args] as const
}

export function getApiPostsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Posts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPostsQueryKey>
  >({
    queryKey: getApiPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Posts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPostsKeysIndexKindIndexKeyQueryKey(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
) {
  return ['api', '/api/Posts/Keys/:indexKind/:indexKey', args] as const
}

export function getApiPostsKeysIndexKindIndexKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsKeysIndexKindIndexKeyQueryKey>
  >({
    queryKey: getApiPostsKeysIndexKindIndexKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.Keys[':indexKind'][':indexKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsKeysIndexKindIndexKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsKeysIndexKindIndexKeyQueryKey>
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
      ...getApiPostsKeysIndexKindIndexKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsKeysIndexKindIndexKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsKeysIndexKindIndexKeyQueryKey>
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
      ...getApiPostsKeysIndexKindIndexKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsKeysReferenceQueryKey(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
) {
  return ['api', '/api/Posts/Keys/:reference', args] as const
}

export function getApiPostsKeysReferenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsKeysReferenceQueryKey>
  >({
    queryKey: getApiPostsKeysReferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.Keys[':reference'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsKeysReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsKeysReferenceQueryKey>
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
      ...getApiPostsKeysReferenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsKeysReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsKeysReferenceQueryKey>
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
      ...getApiPostsKeysReferenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsLatestIndexKindIndexKeyQueryKey(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
) {
  return ['api', '/api/Posts/Latest/:indexKind/:indexKey', args] as const
}

export function getApiPostsLatestIndexKindIndexKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsLatestIndexKindIndexKeyQueryKey>
  >({
    queryKey: getApiPostsLatestIndexKindIndexKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.Latest[':indexKind'][':indexKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsLatestIndexKindIndexKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsLatestIndexKindIndexKeyQueryKey>
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
      ...getApiPostsLatestIndexKindIndexKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsLatestIndexKindIndexKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsLatestIndexKindIndexKeyQueryKey>
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
      ...getApiPostsLatestIndexKindIndexKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsLatestMediaUriMediaTypeQueryKey(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
) {
  return ['api', '/api/Posts/LatestMediaUri/:mediaType', args] as const
}

export function getApiPostsLatestMediaUriMediaTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsLatestMediaUriMediaTypeQueryKey>
  >({
    queryKey: getApiPostsLatestMediaUriMediaTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts.LatestMediaUri[':mediaType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPostsLatestMediaUriMediaType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsLatestMediaUriMediaTypeQueryKey>
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
      ...getApiPostsLatestMediaUriMediaTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPostsLatestMediaUriMediaType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsLatestMediaUriMediaTypeQueryKey>
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
      ...getApiPostsLatestMediaUriMediaTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPostsKeyQueryKey(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
) {
  return ['api', '/api/Posts/:key', args] as const
}

export function getApiPostsKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsKeyQueryKey>
  >({
    queryKey: getApiPostsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Posts[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPostsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPostsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPostsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPostsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPostsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiResourceLinksQueryKey(
  args: InferRequestType<typeof client.api.ResourceLinks.$get>,
) {
  return ['api', '/api/ResourceLinks', args] as const
}

export function getApiResourceLinksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.ResourceLinks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiResourceLinksQueryKey>
  >({
    queryKey: getApiResourceLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ResourceLinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiResourceLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.ResourceLinks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiResourceLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiResourceLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiResourceLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.ResourceLinks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiResourceLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiResourceLinksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSectorsQueryKey(args: InferRequestType<typeof client.api.Sectors.$get>) {
  return ['api', '/api/Sectors', args] as const
}

export function getApiSectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Sectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSectorsQueryKey>
  >({
    queryKey: getApiSectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Sectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Sectors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSectorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Sectors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSectorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSectorsKeyQueryKey(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
) {
  return ['api', '/api/Sectors/:key', args] as const
}

export function getApiSectorsKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSectorsKeyQueryKey>
  >({
    queryKey: getApiSectorsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Sectors[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSectorsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectorsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSectorsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSectorsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSectorsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSectorsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiServicesQueryKey(args: InferRequestType<typeof client.api.Services.$get>) {
  return ['api', '/api/Services', args] as const
}

export function getApiServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiServicesQueryKey>
  >({
    queryKey: getApiServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Services.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Services.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiServicesKeyQueryKey(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
) {
  return ['api', '/api/Services/:key', args] as const
}

export function getApiServicesKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesKeyQueryKey>
  >({
    queryKey: getApiServicesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Services[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiServicesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiServicesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiServicesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiServicesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiServicesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiServicesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSlidesQueryKey(args: InferRequestType<typeof client.api.Slides.$get>) {
  return ['api', '/api/Slides', args] as const
}

export function getApiSlidesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Slides.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSlidesQueryKey>
  >({
    queryKey: getApiSlidesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Slides.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSlides<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Slides.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSlidesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSlidesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSlides<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Slides.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSlidesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSlidesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSlidesIdQueryKey(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
) {
  return ['api', '/api/Slides/:id', args] as const
}

export function getApiSlidesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSlidesIdQueryKey>
  >({
    queryKey: getApiSlidesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Slides[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSlidesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSlidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSlidesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSlidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTagsQueryKey(args: InferRequestType<typeof client.api.Tags.$get>) {
  return ['api', '/api/Tags', args] as const
}

export function getApiTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >({
    queryKey: getApiTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiTagsKeyQueryKey(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
) {
  return ['api', '/api/Tags/:key', args] as const
}

export function getApiTagsKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsKeyQueryKey>
  >({
    queryKey: getApiTagsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Tags[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTagsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTagsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTagsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiThemesQueryKey(args: InferRequestType<typeof client.api.Themes.$get>) {
  return ['api', '/api/Themes', args] as const
}

export function getApiThemesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.Themes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiThemesQueryKey>
  >({
    queryKey: getApiThemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Themes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiThemes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Themes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiThemesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiThemes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.Themes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiThemesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiThemesKeyQueryKey(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
) {
  return ['api', '/api/Themes/:key', args] as const
}

export function getApiThemesKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiThemesKeyQueryKey>
  >({
    queryKey: getApiThemesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Themes[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiThemesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiThemesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiThemesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiThemesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiThemesKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
