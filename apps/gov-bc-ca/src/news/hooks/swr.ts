import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiFacebookPostsByUriKey(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
) {
  return ['api', '/api/FacebookPosts/ByUri', args] as const
}

export function useGetApiFacebookPostsByUri<TError = unknown>(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
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
        ? getGetApiFacebookPostsByUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.FacebookPosts.ByUri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFacebookPostsByUri<TError = unknown>(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
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
        ? getGetApiFacebookPostsByUriKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.FacebookPosts.ByUri.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.FacebookPosts.ByUri.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiHomeKey(args: InferRequestType<typeof client.api.Home.$get>) {
  return ['api', '/api/Home', args] as const
}

export function useGetApiHome<TError = unknown>(
  args: InferRequestType<typeof client.api.Home.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHomeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Home.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiHome<TError = unknown>(
  args: InferRequestType<typeof client.api.Home.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHomeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Home.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Home.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiMinistriesKey(args: InferRequestType<typeof client.api.Ministries.$get>) {
  return ['api', '/api/Ministries', args] as const
}

export function useGetApiMinistries<TError = unknown>(
  args: InferRequestType<typeof client.api.Ministries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMinistriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Ministries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMinistries<TError = unknown>(
  args: InferRequestType<typeof client.api.Ministries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiMinistriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Ministries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Ministries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMinistriesKeyKey(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
) {
  return ['api', '/api/Ministries/:key', args] as const
}

export function useGetApiMinistriesKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
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
        ? getGetApiMinistriesKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Ministries[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMinistriesKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
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
        ? getGetApiMinistriesKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Ministries)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Ministries[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiMinistriesKeyMinisterKey(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
) {
  return ['api', '/api/Ministries/:key/Minister', args] as const
}

export function useGetApiMinistriesKeyMinister<TError = unknown>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
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
        ? getGetApiMinistriesKeyMinisterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Ministries[':key'].Minister.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiMinistriesKeyMinister<TError = unknown>(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
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
        ? getGetApiMinistriesKeyMinisterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Ministries)[':key']['Minister']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Ministries[':key'].Minister.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiNewslettersKey(
  args: InferRequestType<typeof client.api.Newsletters.$get>,
) {
  return ['api', '/api/Newsletters', args] as const
}

export function useGetApiNewsletters<TError = unknown>(
  args: InferRequestType<typeof client.api.Newsletters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiNewslettersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Newsletters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNewsletters<TError = unknown>(
  args: InferRequestType<typeof client.api.Newsletters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiNewslettersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Newsletters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Newsletters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiNewslettersImagesGuidKey(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
) {
  return ['api', '/api/Newsletters/Images/:guid', args] as const
}

export function useGetApiNewslettersImagesGuid<TError = unknown>(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
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
        ? getGetApiNewslettersImagesGuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Newsletters.Images[':guid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNewslettersImagesGuid<TError = unknown>(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
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
        ? getGetApiNewslettersImagesGuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters.Images)[':guid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Newsletters.Images[':guid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiNewslettersNewsletterKeyKey(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
) {
  return ['api', '/api/Newsletters/:newsletterKey', args] as const
}

export function useGetApiNewslettersNewsletterKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
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
        ? getGetApiNewslettersNewsletterKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Newsletters[':newsletterKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNewslettersNewsletterKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
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
        ? getGetApiNewslettersNewsletterKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Newsletters[':newsletterKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiNewslettersNewsletterKeyEditionsEditionKeyKey(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
) {
  return ['api', '/api/Newsletters/:newsletterKey/Editions/:editionKey', args] as const
}

export function useGetApiNewslettersNewsletterKeyEditionsEditionKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiNewslettersNewsletterKeyEditionsEditionKeyKey(args)
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
                (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
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
          client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNewslettersNewsletterKeyEditionsEditionKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiNewslettersNewsletterKeyEditionsEditionKeyKey(args)
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
                (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
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
          client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyKey(
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

export function useGetApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyKey(args)
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
                (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
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
          client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].Articles[
            ':articleKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyKey(args)
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
                (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
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
          client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].Articles[
            ':articleKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsKey(args: InferRequestType<typeof client.api.Posts.$get>) {
  return ['api', '/api/Posts', args] as const
}

export function useGetApiPosts<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPosts<TError = unknown>(
  args: InferRequestType<typeof client.api.Posts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Posts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsKeysIndexKindIndexKeyKey(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
) {
  return ['api', '/api/Posts/Keys/:indexKind/:indexKey', args] as const
}

export function useGetApiPostsKeysIndexKindIndexKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
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
        ? getGetApiPostsKeysIndexKindIndexKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.Keys[':indexKind'][':indexKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsKeysIndexKindIndexKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
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
        ? getGetApiPostsKeysIndexKindIndexKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.Keys[':indexKind'][':indexKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsKeysReferenceKey(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
) {
  return ['api', '/api/Posts/Keys/:reference', args] as const
}

export function useGetApiPostsKeysReference<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
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
        ? getGetApiPostsKeysReferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.Keys[':reference'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsKeysReference<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
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
        ? getGetApiPostsKeysReferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Keys)[':reference']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts.Keys[':reference'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsLatestIndexKindIndexKeyKey(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
) {
  return ['api', '/api/Posts/Latest/:indexKind/:indexKey', args] as const
}

export function useGetApiPostsLatestIndexKindIndexKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
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
        ? getGetApiPostsLatestIndexKindIndexKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.Latest[':indexKind'][':indexKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsLatestIndexKindIndexKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
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
        ? getGetApiPostsLatestIndexKindIndexKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.Latest[':indexKind'][':indexKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsLatestMediaUriMediaTypeKey(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
) {
  return ['api', '/api/Posts/LatestMediaUri/:mediaType', args] as const
}

export function useGetApiPostsLatestMediaUriMediaType<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
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
        ? getGetApiPostsLatestMediaUriMediaTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.LatestMediaUri[':mediaType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsLatestMediaUriMediaType<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
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
        ? getGetApiPostsLatestMediaUriMediaTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.Posts.LatestMediaUri[':mediaType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPostsKeyKey(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
) {
  return ['api', '/api/Posts/:key', args] as const
}

export function useGetApiPostsKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiPostsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPostsKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiPostsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Posts)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Posts[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiResourceLinksKey(
  args: InferRequestType<typeof client.api.ResourceLinks.$get>,
) {
  return ['api', '/api/ResourceLinks', args] as const
}

export function useGetApiResourceLinks<TError = unknown>(
  args: InferRequestType<typeof client.api.ResourceLinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
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
        ? getGetApiResourceLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ResourceLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiResourceLinks<TError = unknown>(
  args: InferRequestType<typeof client.api.ResourceLinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
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
        ? getGetApiResourceLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ResourceLinks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ResourceLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSectorsKey(args: InferRequestType<typeof client.api.Sectors.$get>) {
  return ['api', '/api/Sectors', args] as const
}

export function useGetApiSectors<TError = unknown>(
  args: InferRequestType<typeof client.api.Sectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Sectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSectors<TError = unknown>(
  args: InferRequestType<typeof client.api.Sectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSectorsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Sectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Sectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSectorsKeyKey(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
) {
  return ['api', '/api/Sectors/:key', args] as const
}

export function useGetApiSectorsKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSectorsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Sectors[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSectorsKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSectorsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Sectors)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Sectors[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiServicesKey(args: InferRequestType<typeof client.api.Services.$get>) {
  return ['api', '/api/Services', args] as const
}

export function useGetApiServices<TError = unknown>(
  args: InferRequestType<typeof client.api.Services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServices<TError = unknown>(
  args: InferRequestType<typeof client.api.Services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiServicesKeyKey(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
) {
  return ['api', '/api/Services/:key', args] as const
}

export function useGetApiServicesKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiServicesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Services[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiServicesKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiServicesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Services)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Services[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSlidesKey(args: InferRequestType<typeof client.api.Slides.$get>) {
  return ['api', '/api/Slides', args] as const
}

export function useGetApiSlides<TError = unknown>(
  args: InferRequestType<typeof client.api.Slides.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSlidesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Slides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSlides<TError = unknown>(
  args: InferRequestType<typeof client.api.Slides.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSlidesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Slides.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Slides.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSlidesIdKey(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
) {
  return ['api', '/api/Slides/:id', args] as const
}

export function useGetApiSlidesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSlidesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Slides[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSlidesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiSlidesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Slides)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Slides[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTagsKey(args: InferRequestType<typeof client.api.Tags.$get>) {
  return ['api', '/api/Tags', args] as const
}

export function useGetApiTags<TError = unknown>(
  args: InferRequestType<typeof client.api.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiTags<TError = unknown>(
  args: InferRequestType<typeof client.api.Tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.Tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiTagsKeyKey(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
) {
  return ['api', '/api/Tags/:key', args] as const
}

export function useGetApiTagsKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTagsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Tags[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTagsKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiTagsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Tags)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Tags[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiThemesKey(args: InferRequestType<typeof client.api.Themes.$get>) {
  return ['api', '/api/Themes', args] as const
}

export function useGetApiThemes<TError = unknown>(
  args: InferRequestType<typeof client.api.Themes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiThemesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Themes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiThemes<TError = unknown>(
  args: InferRequestType<typeof client.api.Themes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiThemesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.Themes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Themes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiThemesKeyKey(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
) {
  return ['api', '/api/Themes/:key', args] as const
}

export function useGetApiThemesKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiThemesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Themes[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiThemesKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiThemesKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.Themes)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.Themes[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
