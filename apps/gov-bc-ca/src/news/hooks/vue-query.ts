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

export function getApiFacebookPostsByUriQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>>,
) {
  return ['api', '/api/FacebookPosts/ByUri', toValue(args)] as const
}

export function getApiFacebookPostsByUriQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiFacebookPostsByUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.FacebookPosts.ByUri.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiFacebookPostsByUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
            >
          >,
          ReturnType<typeof getApiFacebookPostsByUriQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFacebookPostsByUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiFacebookPostsByUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.FacebookPosts.ByUri.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiHomeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Home.$get>>,
) {
  return ['api', '/api/Home', toValue(args)] as const
}

export function getApiHomeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Home.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiHomeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Home.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Home.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>
          >,
          ReturnType<typeof getApiHomeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHomeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiHomeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Home.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMinistriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Ministries.$get>>,
) {
  return ['api', '/api/Ministries', toValue(args)] as const
}

export function getApiMinistriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Ministries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMinistriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Ministries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMinistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Ministries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
          >,
          ReturnType<typeof getApiMinistriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiMinistriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMinistriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Ministries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMinistriesKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Ministries)[':key']['$get']>>,
) {
  return ['api', '/api/Ministries/:key', toValue(args)] as const
}

export function getApiMinistriesKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Ministries)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMinistriesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Ministries[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMinistriesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Ministries)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMinistriesKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMinistriesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMinistriesKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Ministries[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMinistriesKeyMinisterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>
  >,
) {
  return ['api', '/api/Ministries/:key/Minister', toValue(args)] as const
}

export function getApiMinistriesKeyMinisterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMinistriesKeyMinisterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Ministries[':key'].Minister.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiMinistriesKeyMinisterQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMinistriesKeyMinisterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMinistriesKeyMinisterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Ministries[':key'].Minister.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNewslettersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Newsletters.$get>>,
) {
  return ['api', '/api/Newsletters', toValue(args)] as const
}

export function getApiNewslettersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Newsletters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNewslettersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Newsletters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNewsletters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Newsletters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>
            >
          >,
          ReturnType<typeof getApiNewslettersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNewslettersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Newsletters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNewslettersImagesGuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>,
) {
  return ['api', '/api/Newsletters/Images/:guid', toValue(args)] as const
}

export function getApiNewslettersImagesGuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNewslettersImagesGuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Newsletters.Images[':guid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiNewslettersImagesGuidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersImagesGuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNewslettersImagesGuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Newsletters.Images[':guid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNewslettersNewsletterKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>
  >,
) {
  return ['api', '/api/Newsletters/:newsletterKey', toValue(args)] as const
}

export function getApiNewslettersNewsletterKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNewslettersNewsletterKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Newsletters[':newsletterKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiNewslettersNewsletterKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNewslettersNewsletterKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNewslettersNewsletterKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Newsletters[':newsletterKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
    >
  >,
) {
  return ['api', '/api/Newsletters/:newsletterKey/Editions/:editionKey', toValue(args)] as const
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
    >
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
                    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
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
                    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNewslettersNewsletterKeyEditionsEditionKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/Newsletters/:newsletterKey/Editions/:editionKey/Articles/:articleKey',
    toValue(args),
  ] as const
}

export function getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].Articles[
          ':articleKey'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
    >
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
                    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
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
                    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].Articles[
            ':articleKey'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.$get>>,
) {
  return ['api', '/api/Posts', toValue(args)] as const
}

export function getApiPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Posts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
          >,
          ReturnType<typeof getApiPostsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsKeysIndexKindIndexKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>
  >,
) {
  return ['api', '/api/Posts/Keys/:indexKind/:indexKey', toValue(args)] as const
}

export function getApiPostsKeysIndexKindIndexKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsKeysIndexKindIndexKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.Keys[':indexKind'][':indexKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>
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
                  ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiPostsKeysIndexKindIndexKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsKeysIndexKindIndexKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsKeysIndexKindIndexKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.Keys[':indexKind'][':indexKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsKeysReferenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>>,
) {
  return ['api', '/api/Posts/Keys/:reference', toValue(args)] as const
}

export function getApiPostsKeysReferenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsKeysReferenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.Keys[':reference'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPostsKeysReferenceQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsKeysReferenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsKeysReferenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.Keys[':reference'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsLatestIndexKindIndexKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>
  >,
) {
  return ['api', '/api/Posts/Latest/:indexKind/:indexKey', toValue(args)] as const
}

export function getApiPostsLatestIndexKindIndexKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsLatestIndexKindIndexKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.Latest[':indexKind'][':indexKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiPostsLatestIndexKindIndexKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsLatestIndexKindIndexKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsLatestIndexKindIndexKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.Latest[':indexKind'][':indexKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsLatestMediaUriMediaTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>
  >,
) {
  return ['api', '/api/Posts/LatestMediaUri/:mediaType', toValue(args)] as const
}

export function getApiPostsLatestMediaUriMediaTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsLatestMediaUriMediaTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts.LatestMediaUri[':mediaType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPostsLatestMediaUriMediaTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsLatestMediaUriMediaTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsLatestMediaUriMediaTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts.LatestMediaUri[':mediaType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPostsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts)[':key']['$get']>>,
) {
  return ['api', '/api/Posts/:key', toValue(args)] as const
}

export function getApiPostsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPostsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Posts[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPostsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Posts)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getApiPostsKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPostsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPostsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Posts[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiResourceLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ResourceLinks.$get>>,
) {
  return ['api', '/api/ResourceLinks', toValue(args)] as const
}

export function getApiResourceLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ResourceLinks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiResourceLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ResourceLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiResourceLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ResourceLinks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>
            >
          >,
          ReturnType<typeof getApiResourceLinksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiResourceLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiResourceLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ResourceLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Sectors.$get>>,
) {
  return ['api', '/api/Sectors', toValue(args)] as const
}

export function getApiSectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Sectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Sectors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Sectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
          >,
          ReturnType<typeof getApiSectorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Sectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSectorsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Sectors)[':key']['$get']>>,
) {
  return ['api', '/api/Sectors/:key', toValue(args)] as const
}

export function getApiSectorsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Sectors)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSectorsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Sectors[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSectorsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Sectors)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSectorsKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSectorsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSectorsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Sectors[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Services.$get>>,
) {
  return ['api', '/api/Services', toValue(args)] as const
}

export function getApiServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
          >,
          ReturnType<typeof getApiServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiServicesKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Services)[':key']['$get']>>,
) {
  return ['api', '/api/Services/:key', toValue(args)] as const
}

export function getApiServicesKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Services)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiServicesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Services[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiServicesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Services)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiServicesKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiServicesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiServicesKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Services[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSlidesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Slides.$get>>,
) {
  return ['api', '/api/Slides', toValue(args)] as const
}

export function getApiSlidesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Slides.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSlidesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Slides.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSlides<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Slides.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
          >,
          ReturnType<typeof getApiSlidesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSlidesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSlidesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Slides.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSlidesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Slides)[':id']['$get']>>,
) {
  return ['api', '/api/Slides/:id', toValue(args)] as const
}

export function getApiSlidesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Slides)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSlidesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Slides[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Slides)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSlidesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSlidesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSlidesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Slides[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Tags.$get>>,
) {
  return ['api', '/api/Tags', toValue(args)] as const
}

export function getApiTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>
          >,
          ReturnType<typeof getApiTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Tags)[':key']['$get']>>,
) {
  return ['api', '/api/Tags/:key', toValue(args)] as const
}

export function getApiTagsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Tags)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Tags[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTagsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Tags)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTagsKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Tags[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiThemesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Themes.$get>>,
) {
  return ['api', '/api/Themes', toValue(args)] as const
}

export function getApiThemesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Themes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiThemesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Themes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiThemes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.Themes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
          >,
          ReturnType<typeof getApiThemesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiThemesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiThemesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Themes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiThemesKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Themes)[':key']['$get']>>,
) {
  return ['api', '/api/Themes/:key', toValue(args)] as const
}

export function getApiThemesKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Themes)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiThemesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Themes[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiThemesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.Themes)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getApiThemesKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiThemesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiThemesKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Themes[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
