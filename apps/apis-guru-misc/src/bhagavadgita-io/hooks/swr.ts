import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getGetApiV1ChaptersKey(args: InferRequestType<typeof client.api.v1.chapters.$get>) {
  return ['api', '/api/v1/chapters', args] as const
}

export function useGetApiV1Chapters<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.chapters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ChaptersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.chapters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Chapters<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.chapters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ChaptersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chapters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.chapters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChaptersChapterNumberKey(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>,
) {
  return ['api', '/api/v1/chapters/:chapter_number', args] as const
}

export function useGetApiV1ChaptersChapterNumber<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
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
        ? getGetApiV1ChaptersChapterNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.chapters[':chapter_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChaptersChapterNumber<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
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
        ? getGetApiV1ChaptersChapterNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.chapters[':chapter_number'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChaptersChapterNumberVersesKey(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>,
) {
  return ['api', '/api/v1/chapters/:chapter_number/verses', args] as const
}

export function useGetApiV1ChaptersChapterNumberVerses<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
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
        ? getGetApiV1ChaptersChapterNumberVersesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.chapters[':chapter_number'].verses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChaptersChapterNumberVerses<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
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
        ? getGetApiV1ChaptersChapterNumberVersesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.chapters)[':chapter_number']['verses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.chapters[':chapter_number'].verses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ChaptersChapterNumberVersesVerseNumberKey(
  args: InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
  >,
) {
  return ['api', '/api/v1/chapters/:chapter_number/verses/:verse_number', args] as const
}

export function useGetApiV1ChaptersChapterNumberVersesVerseNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
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
        ? getGetApiV1ChaptersChapterNumberVersesVerseNumberKey(args)
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
                (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
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
          client.api.v1.chapters[':chapter_number'].verses[':verse_number'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ChaptersChapterNumberVersesVerseNumber<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
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
        ? getGetApiV1ChaptersChapterNumberVersesVerseNumberKey(args)
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
                (typeof client.api.v1.chapters)[':chapter_number']['verses'][':verse_number']['$get']
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
          client.api.v1.chapters[':chapter_number'].verses[':verse_number'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1VersesKey(args: InferRequestType<typeof client.api.v1.verses.$get>) {
  return ['api', '/api/v1/verses', args] as const
}

export function useGetApiV1Verses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.verses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1VersesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.verses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Verses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.verses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1VersesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.verses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthOauthTokenKey() {
  return ['auth', '/auth/oauth/token', 'POST'] as const
}

export function usePostAuthOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.oauth.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.oauth.token.$post> }) =>
        parseResponse(client.auth.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
