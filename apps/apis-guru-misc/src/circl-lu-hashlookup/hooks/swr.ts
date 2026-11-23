import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBulkKey() {
  return ['bulk'] as const
}

export function getChildrenKey() {
  return ['children'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getLookupKey() {
  return ['lookup'] as const
}

export function getParentsKey() {
  return ['parents'] as const
}

export function getSessionKey() {
  return ['session'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getPostBulkMd5Key() {
  return ['bulk', '/bulk/md5', 'POST'] as const
}

export function usePostBulkMd5<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.md5.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkMd5Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.bulk.md5.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBulkSha1Key() {
  return ['bulk', '/bulk/sha1', 'POST'] as const
}

export function usePostBulkSha1<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.sha1.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkSha1Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.bulk.sha1.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChildrenSha1CountCursorKey(
  args: InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>,
) {
  return ['children', '/children/:sha1/:count/:cursor', args] as const
}

export function useGetChildrenSha1CountCursor<TError = unknown>(
  args: InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
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
        ? getGetChildrenSha1CountCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.children[':sha1'][':count'][':cursor'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChildrenSha1CountCursor<TError = unknown>(
  args: InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
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
        ? getGetChildrenSha1CountCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.children[':sha1'][':count'][':cursor'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoKey() {
  return ['info', '/info'] as const
}

export function useGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLookupMd5Md5Key(
  args: InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>,
) {
  return ['lookup', '/lookup/md5/:md5', args] as const
}

export function useGetLookupMd5Md5<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLookupMd5Md5Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.md5[':md5'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupMd5Md5<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLookupMd5Md5Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.md5[':md5'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLookupSha1Sha1Key(
  args: InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>,
) {
  return ['lookup', '/lookup/sha1/:sha1', args] as const
}

export function useGetLookupSha1Sha1<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLookupSha1Sha1Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.sha1[':sha1'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupSha1Sha1<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLookupSha1Sha1Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.sha1[':sha1'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLookupSha256Sha256Key(
  args: InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>,
) {
  return ['lookup', '/lookup/sha256/:sha256', args] as const
}

export function useGetLookupSha256Sha256<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>
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
        ? getGetLookupSha256Sha256Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.sha256[':sha256'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLookupSha256Sha256<TError = unknown>(
  args: InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>
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
        ? getGetLookupSha256Sha256Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lookup.sha256[':sha256'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetParentsSha1CountCursorKey(
  args: InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>,
) {
  return ['parents', '/parents/:sha1/:count/:cursor', args] as const
}

export function useGetParentsSha1CountCursor<TError = unknown>(
  args: InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
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
        ? getGetParentsSha1CountCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.parents[':sha1'][':count'][':cursor'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParentsSha1CountCursor<TError = unknown>(
  args: InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
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
        ? getGetParentsSha1CountCursorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.parents[':sha1'][':count'][':cursor'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSessionCreateNameKey(
  args: InferRequestType<(typeof client.session.create)[':name']['$get']>,
) {
  return ['session', '/session/create/:name', args] as const
}

export function useGetSessionCreateName<TError = unknown>(
  args: InferRequestType<(typeof client.session.create)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
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
        ? getGetSessionCreateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session.create[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionCreateName<TError = unknown>(
  args: InferRequestType<(typeof client.session.create)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
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
        ? getGetSessionCreateNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session.create[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSessionGetNameKey(
  args: InferRequestType<(typeof client.session.get)[':name']['$get']>,
) {
  return ['session', '/session/get/:name', args] as const
}

export function useGetSessionGetName<TError = unknown>(
  args: InferRequestType<(typeof client.session.get)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSessionGetNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session.get[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionGetName<TError = unknown>(
  args: InferRequestType<(typeof client.session.get)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSessionGetNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.session.get[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsTopKey() {
  return ['stats', '/stats/top'] as const
}

export function useGetStatsTop<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsTopKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.top.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsTop<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsTopKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.top.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
