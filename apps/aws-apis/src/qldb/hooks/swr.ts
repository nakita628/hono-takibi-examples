import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJournalS3ExportsKey() {
  return ['journal-s3-exports'] as const
}

export function getLedgersKey() {
  return ['ledgers'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetLedgersNameJournalKinesisStreamsStreamIdKey(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams/:streamId', keyArgs] as const
}

export function useGetLedgersNameJournalKinesisStreamsStreamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
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
        ? getGetLedgersNameJournalKinesisStreamsStreamIdKey(args)
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
                (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
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
          client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgersNameJournalKinesisStreamsStreamId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
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
        ? getGetLedgersNameJournalKinesisStreamsStreamIdKey(args)
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
                (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
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
          client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteLedgersNameJournalKinesisStreamsStreamIdKey() {
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams/:streamId', 'DELETE'] as const
}

export function useDeleteLedgersNameJournalKinesisStreamsStreamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLedgersNameJournalKinesisStreamsStreamIdKey()
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
            (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLedgersKey(args: InferRequestType<typeof client.ledgers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers', keyArgs] as const
}

export function useGetLedgers<TError = unknown>(
  args: InferRequestType<typeof client.ledgers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLedgersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ledgers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLedgers<TError = unknown>(
  args: InferRequestType<typeof client.ledgers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLedgersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ledgers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostLedgersKey() {
  return ['ledgers', '/ledgers', 'POST'] as const
}

export function usePostLedgers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ledgers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ledgers.$post> }) =>
        parseResponse(client.ledgers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLedgersNameKey(
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name', keyArgs] as const
}

export function useGetLedgersName<TError = unknown>(
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLedgersNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ledgers[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgersName<TError = unknown>(
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLedgersNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ledgers[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLedgersNameKey() {
  return ['ledgers', '/ledgers/:name', 'DELETE'] as const
}

export function useDeleteLedgersName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLedgersNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ledgers)[':name']['$delete']> },
      ) => parseResponse(client.ledgers[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLedgersNameKey() {
  return ['ledgers', '/ledgers/:name', 'PATCH'] as const
}

export function usePatchLedgersName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLedgersNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ledgers)[':name']['$patch']> },
      ) => parseResponse(client.ledgers[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLedgersNameJournalS3ExportsExportIdKey(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-s3-exports/:exportId', keyArgs] as const
}

export function useGetLedgersNameJournalS3ExportsExportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
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
        ? getGetLedgersNameJournalS3ExportsExportIdKey(args)
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
                (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
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
          client.ledgers[':name']['journal-s3-exports'][':exportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgersNameJournalS3ExportsExportId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
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
        ? getGetLedgersNameJournalS3ExportsExportIdKey(args)
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
                (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
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
          client.ledgers[':name']['journal-s3-exports'][':exportId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLedgersNameJournalS3ExportsKey(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-s3-exports', keyArgs] as const
}

export function useGetLedgersNameJournalS3Exports<TError = unknown>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
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
        ? getGetLedgersNameJournalS3ExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledgers[':name']['journal-s3-exports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgersNameJournalS3Exports<TError = unknown>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
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
        ? getGetLedgersNameJournalS3ExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledgers[':name']['journal-s3-exports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLedgersNameJournalS3ExportsKey() {
  return ['ledgers', '/ledgers/:name/journal-s3-exports', 'POST'] as const
}

export function usePostLedgersNameJournalS3Exports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgersNameJournalS3ExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>
        },
      ) => parseResponse(client.ledgers[':name']['journal-s3-exports'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLedgersNameBlockKey() {
  return ['ledgers', '/ledgers/:name/block', 'POST'] as const
}

export function usePostLedgersNameBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgersNameBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ledgers)[':name']['block']['$post']> },
      ) => parseResponse(client.ledgers[':name'].block.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLedgersNameDigestKey() {
  return ['ledgers', '/ledgers/:name/digest', 'POST'] as const
}

export function usePostLedgersNameDigest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['digest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['digest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgersNameDigestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ledgers)[':name']['digest']['$post']> },
      ) => parseResponse(client.ledgers[':name'].digest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLedgersNameRevisionKey() {
  return ['ledgers', '/ledgers/:name/revision', 'POST'] as const
}

export function usePostLedgersNameRevision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['revision']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['revision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgersNameRevisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ledgers)[':name']['revision']['$post']> },
      ) => parseResponse(client.ledgers[':name'].revision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLedgersNameJournalKinesisStreamsKey(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams', keyArgs] as const
}

export function useGetLedgersNameJournalKinesisStreams<TError = unknown>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
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
        ? getGetLedgersNameJournalKinesisStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledgers[':name']['journal-kinesis-streams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLedgersNameJournalKinesisStreams<TError = unknown>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
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
        ? getGetLedgersNameJournalKinesisStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ledgers[':name']['journal-kinesis-streams'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLedgersNameJournalKinesisStreamsKey() {
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams', 'POST'] as const
}

export function usePostLedgersNameJournalKinesisStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLedgersNameJournalKinesisStreamsKey()
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
            (typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']
          >
        },
      ) =>
        parseResponse(client.ledgers[':name']['journal-kinesis-streams'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJournalS3ExportsKey(
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['journal-s3-exports', '/journal-s3-exports', keyArgs] as const
}

export function useGetJournalS3Exports<TError = unknown>(
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
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
        ? getGetJournalS3ExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['journal-s3-exports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJournalS3Exports<TError = unknown>(
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
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
        ? getGetJournalS3ExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['journal-s3-exports'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLedgersNamePermissionsModeKey() {
  return ['ledgers', '/ledgers/:name/permissions-mode', 'PATCH'] as const
}

export function usePatchLedgersNamePermissionsMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLedgersNamePermissionsModeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>
        },
      ) => parseResponse(client.ledgers[':name']['permissions-mode'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
