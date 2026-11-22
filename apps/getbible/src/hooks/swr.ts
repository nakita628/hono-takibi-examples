import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChecksumJsonKey() {
  return ['checksum.json'] as const
}

export function getChecksumShaKey() {
  return ['checksum.sha'] as const
}

export function getChecksumTxtKey() {
  return ['checksum.txt'] as const
}

export function getOpenapiJsonKey() {
  return ['openapi.json'] as const
}

export function getOpenapiShaKey() {
  return ['openapi.sha'] as const
}

export function getTranslationsJsonKey() {
  return ['translations.json'] as const
}

export function getTranslationsShaKey() {
  return ['translations.sha'] as const
}

export function getTranslationsTxtKey() {
  return ['translations.txt'] as const
}

export function getAbbreviationKey() {
  return ['{abbreviation}'] as const
}

export function getAbbreviationJsonKey() {
  return ['{abbreviation}.json'] as const
}

export function getAbbreviationShaKey() {
  return ['{abbreviation}.sha'] as const
}

export function getGetTranslationsJsonKey() {
  return ['translations.json', '/translations.json'] as const
}

export function useGetTranslationsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTranslationsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['translations.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTranslationsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTranslationsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['translations.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTranslationsTxtKey() {
  return ['translations.txt', '/translations.txt'] as const
}

export function useGetTranslationsTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTranslationsTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['translations.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTranslationsTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTranslationsTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['translations.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTranslationsShaKey() {
  return ['translations.sha', '/translations.sha'] as const
}

export function useGetTranslationsSha<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTranslationsShaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['translations.sha'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTranslationsSha<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTranslationsShaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['translations.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['translations.sha'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecksumJsonKey() {
  return ['checksum.json', '/checksum.json'] as const
}

export function useGetChecksumJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksumJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['checksum.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecksumJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksumJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['checksum.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecksumTxtKey() {
  return ['checksum.txt', '/checksum.txt'] as const
}

export function useGetChecksumTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksumTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['checksum.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecksumTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksumTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['checksum.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecksumShaKey() {
  return ['checksum.sha', '/checksum.sha'] as const
}

export function useGetChecksumSha<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksumShaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['checksum.sha'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecksumSha<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecksumShaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['checksum.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['checksum.sha'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationJsonKey(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
) {
  return [':abbreviation.json', '/:abbreviation.json', args] as const
}

export function useGetAbbreviationJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
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
        ? getGetAbbreviationJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
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
        ? getGetAbbreviationJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationShaKey(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
) {
  return [':abbreviation.sha', '/:abbreviation.sha', args] as const
}

export function useGetAbbreviationSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
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
        ? getGetAbbreviationShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
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
        ? getGetAbbreviationShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':abbreviation.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBooksJsonKey(
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/books.json', args] as const
}

export function useGetAbbreviationBooksJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
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
        ? getGetAbbreviationBooksJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['books.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBooksJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
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
        ? getGetAbbreviationBooksJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['books.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBooksTxtKey(
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/books.txt', args] as const
}

export function useGetAbbreviationBooksTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
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
        ? getGetAbbreviationBooksTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['books.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBooksTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
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
        ? getGetAbbreviationBooksTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['books.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBooksShaKey(
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/books.sha', args] as const
}

export function useGetAbbreviationBooksSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
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
        ? getGetAbbreviationBooksShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['books.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBooksSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['books.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
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
        ? getGetAbbreviationBooksShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['books.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['books.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationChecksumJsonKey(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/checksum.json', args] as const
}

export function useGetAbbreviationChecksumJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
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
        ? getGetAbbreviationChecksumJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['checksum.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationChecksumJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
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
        ? getGetAbbreviationChecksumJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['checksum.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationChecksumTxtKey(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/checksum.txt', args] as const
}

export function useGetAbbreviationChecksumTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
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
        ? getGetAbbreviationChecksumTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['checksum.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationChecksumTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
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
        ? getGetAbbreviationChecksumTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['checksum.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationChecksumShaKey(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/checksum.sha', args] as const
}

export function useGetAbbreviationChecksumSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
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
        ? getGetAbbreviationChecksumShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['checksum.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationChecksumSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation']['checksum.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
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
        ? getGetAbbreviationChecksumShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation']['checksum.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation']['checksum.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookJsonKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book.json', args] as const
}

export function useGetAbbreviationBookJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
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
        ? getGetAbbreviationBookJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation'][':book.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
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
        ? getGetAbbreviationBookJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation'][':book.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookShaKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book.sha', args] as const
}

export function useGetAbbreviationBookSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
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
        ? getGetAbbreviationBookShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation'][':book.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
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
        ? getGetAbbreviationBookShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':abbreviation'][':book.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChaptersJsonKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.json', args] as const
}

export function useGetAbbreviationBookChaptersJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
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
        ? getGetAbbreviationBookChaptersJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['chapters.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChaptersJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
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
        ? getGetAbbreviationBookChaptersJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['chapters.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChaptersTxtKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.txt', args] as const
}

export function useGetAbbreviationBookChaptersTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
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
        ? getGetAbbreviationBookChaptersTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['chapters.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChaptersTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
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
        ? getGetAbbreviationBookChaptersTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['chapters.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChaptersShaKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/chapters.sha', args] as const
}

export function useGetAbbreviationBookChaptersSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
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
        ? getGetAbbreviationBookChaptersShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['chapters.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChaptersSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
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
        ? getGetAbbreviationBookChaptersShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['chapters.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['chapters.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChecksumJsonKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.json', args] as const
}

export function useGetAbbreviationBookChecksumJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
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
        ? getGetAbbreviationBookChecksumJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['checksum.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChecksumJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
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
        ? getGetAbbreviationBookChecksumJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['checksum.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChecksumTxtKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.txt', args] as const
}

export function useGetAbbreviationBookChecksumTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
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
        ? getGetAbbreviationBookChecksumTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['checksum.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChecksumTxt<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
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
        ? getGetAbbreviationBookChecksumTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['checksum.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChecksumShaKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/checksum.sha', args] as const
}

export function useGetAbbreviationBookChecksumSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
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
        ? getGetAbbreviationBookChecksumShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['checksum.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChecksumSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
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
        ? getGetAbbreviationBookChecksumShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book']['checksum.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book']['checksum.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChapterJsonKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/:chapter.json', args] as const
}

export function useGetAbbreviationBookChapterJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
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
        ? getGetAbbreviationBookChapterJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book'][':chapter.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChapterJson<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
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
        ? getGetAbbreviationBookChapterJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book'][':chapter.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAbbreviationBookChapterShaKey(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
) {
  return [':abbreviation', '/:abbreviation/:book/:chapter.sha', args] as const
}

export function useGetAbbreviationBookChapterSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
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
        ? getGetAbbreviationBookChapterShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book'][':chapter.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbbreviationBookChapterSha<TError = unknown>(
  args: InferRequestType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
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
        ? getGetAbbreviationBookChapterShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':abbreviation'][':book'][':chapter.sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':abbreviation'][':book'][':chapter.sha'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenapiJsonKey() {
  return ['openapi.json', '/openapi.json'] as const
}

export function useGetOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenapiShaKey() {
  return ['openapi.sha', '/openapi.sha'] as const
}

export function useGetOpenapiSha<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiShaKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.sha'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapiSha<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiShaKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.sha']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['openapi.sha'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
