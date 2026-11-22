import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAttachmentKey() {
  return ['attachment'] as const
}

export function getKeywordKey() {
  return ['keyword'] as const
}

export function getLawDataKey() {
  return ['law_data'] as const
}

export function getLawFileKey() {
  return ['law_file'] as const
}

export function getLawRevisionsKey() {
  return ['law_revisions'] as const
}

export function getLawsKey() {
  return ['laws'] as const
}

export function getGetLawsKey(args: InferRequestType<typeof client.laws.$get>) {
  return ['laws', '/laws', args] as const
}

export function useGetLaws<TError = unknown>(
  args: InferRequestType<typeof client.laws.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLawsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.laws.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLaws<TError = unknown>(
  args: InferRequestType<typeof client.laws.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLawsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.laws.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLawRevisionsLawIdOrNumKey(
  args: InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>,
) {
  return ['law_revisions', '/law_revisions/:law_id_or_num', args] as const
}

export function useGetLawRevisionsLawIdOrNum<TError = unknown>(
  args: InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
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
        ? getGetLawRevisionsLawIdOrNumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.law_revisions[':law_id_or_num'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLawRevisionsLawIdOrNum<TError = unknown>(
  args: InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
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
        ? getGetLawRevisionsLawIdOrNumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.law_revisions[':law_id_or_num'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLawDataLawIdOrNumOrRevisionIdKey(
  args: InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>,
) {
  return ['law_data', '/law_data/:law_id_or_num_or_revision_id', args] as const
}

export function useGetLawDataLawIdOrNumOrRevisionId<TError = unknown>(
  args: InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
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
        ? getGetLawDataLawIdOrNumOrRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.law_data[':law_id_or_num_or_revision_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLawDataLawIdOrNumOrRevisionId<TError = unknown>(
  args: InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
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
        ? getGetLawDataLawIdOrNumOrRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.law_data[':law_id_or_num_or_revision_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttachmentLawRevisionIdKey(
  args: InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>,
) {
  return ['attachment', '/attachment/:law_revision_id', args] as const
}

export function useGetAttachmentLawRevisionId<TError = unknown>(
  args: InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
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
        ? getGetAttachmentLawRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachment[':law_revision_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachmentLawRevisionId<TError = unknown>(
  args: InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
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
        ? getGetAttachmentLawRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachment[':law_revision_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKeywordKey(args: InferRequestType<typeof client.keyword.$get>) {
  return ['keyword', '/keyword', args] as const
}

export function useGetKeyword<TError = unknown>(
  args: InferRequestType<typeof client.keyword.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeywordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keyword.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKeyword<TError = unknown>(
  args: InferRequestType<typeof client.keyword.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetKeywordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.keyword.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLawFileFileTypeLawIdOrNumOrRevisionIdKey(
  args: InferRequestType<
    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
  >,
) {
  return ['law_file', '/law_file/:file_type/:law_id_or_num_or_revision_id', args] as const
}

export function useGetLawFileFileTypeLawIdOrNumOrRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
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
        ? getGetLawFileFileTypeLawIdOrNumOrRevisionIdKey(args)
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
                (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
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
          client.law_file[':file_type'][':law_id_or_num_or_revision_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLawFileFileTypeLawIdOrNumOrRevisionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
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
        ? getGetLawFileFileTypeLawIdOrNumOrRevisionIdKey(args)
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
                (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
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
          client.law_file[':file_type'][':law_id_or_num_or_revision_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
