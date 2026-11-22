import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createApiFacebookPostsByUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiFacebookPostsByUriQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Home.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiHomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiHomeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMinistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Ministries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMinistriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMinistriesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMinistriesKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiMinistriesKeyMinister<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMinistriesKeyMinisterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiNewsletters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Newsletters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNewslettersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiNewslettersImagesGuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiNewslettersImagesGuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiNewslettersNewsletterKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiNewslettersNewsletterKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiNewslettersNewsletterKeyEditionsEditionKey<
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
  args: () => InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiNewslettersNewsletterKeyEditionsEditionKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKey<
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
  args: () => InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPosts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Posts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPostsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiPostsKeysIndexKindIndexKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPostsKeysIndexKindIndexKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsKeysReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPostsKeysReferenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsLatestIndexKindIndexKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPostsLatestIndexKindIndexKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsLatestMediaUriMediaType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPostsLatestMediaUriMediaTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiPostsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPostsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiResourceLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ResourceLinks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiResourceLinksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiSectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Sectors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSectorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiSectorsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSectorsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Services.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiServicesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Services)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiServicesKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiSlides<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Slides.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSlidesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSlidesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiTagsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiThemes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.Themes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiThemesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createApiThemesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiThemesKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
