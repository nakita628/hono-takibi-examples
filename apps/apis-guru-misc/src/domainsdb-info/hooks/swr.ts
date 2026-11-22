import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDomainsKey() {
  return ['domains'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getGetDomainsSearchKey(args: InferRequestType<typeof client.domains.search.$get>) {
  return ['domains', '/domains/search', args] as const
}

export function useGetDomainsSearch<TError = unknown>(
  args: InferRequestType<typeof client.domains.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsSearch<TError = unknown>(
  args: InferRequestType<typeof client.domains.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDomainsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsTldZoneIdKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id', args] as const
}

export function useGetDomainsTldZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
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
        ? getGetDomainsTldZoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.tld[':zone_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsTldZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
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
        ? getGetDomainsTldZoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.tld[':zone_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsTldZoneIdDownloadKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id/download', args] as const
}

export function useGetDomainsTldZoneIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
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
        ? getGetDomainsTldZoneIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.tld[':zone_id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsTldZoneIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
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
        ? getGetDomainsTldZoneIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.tld[':zone_id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsTldZoneIdSearchKey(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
) {
  return ['domains', '/domains/tld/:zone_id/search', args] as const
}

export function useGetDomainsTldZoneIdSearch<TError = unknown>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
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
        ? getGetDomainsTldZoneIdSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.tld[':zone_id'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsTldZoneIdSearch<TError = unknown>(
  args: InferRequestType<(typeof client.domains.tld)[':zone_id']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
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
        ? getGetDomainsTldZoneIdSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.tld)[':zone_id']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.tld[':zone_id'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsUpdatesAddedKey(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
) {
  return ['domains', '/domains/updates/added', args] as const
}

export function useGetDomainsUpdatesAdded<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
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
        ? getGetDomainsUpdatesAddedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.added.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsUpdatesAdded<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.added.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
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
        ? getGetDomainsUpdatesAddedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.added.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.added.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsUpdatesAddedDownloadKey(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
) {
  return ['domains', '/domains/updates/added/download', args] as const
}

export function useGetDomainsUpdatesAddedDownload<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
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
        ? getGetDomainsUpdatesAddedDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.added.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsUpdatesAddedDownload<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.added.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
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
        ? getGetDomainsUpdatesAddedDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.added.download.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.added.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsUpdatesDeletedKey(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
) {
  return ['domains', '/domains/updates/deleted', args] as const
}

export function useGetDomainsUpdatesDeleted<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
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
        ? getGetDomainsUpdatesDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsUpdatesDeleted<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.deleted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
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
        ? getGetDomainsUpdatesDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.deleted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsUpdatesDeletedDownloadKey(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
) {
  return ['domains', '/domains/updates/deleted/download', args] as const
}

export function useGetDomainsUpdatesDeletedDownload<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
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
        ? getGetDomainsUpdatesDeletedDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.deleted.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsUpdatesDeletedDownload<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.deleted.download.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
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
        ? getGetDomainsUpdatesDeletedDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.domains.updates.deleted.download.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.deleted.download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomainsUpdatesListKey(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
) {
  return ['domains', '/domains/updates/list', args] as const
}

export function useGetDomainsUpdatesList<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
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
        ? getGetDomainsUpdatesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsUpdatesList<TError = unknown>(
  args: InferRequestType<typeof client.domains.updates.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
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
        ? getGetDomainsUpdatesListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.domains.updates.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.updates.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoApiKey(args: InferRequestType<typeof client.info.api.$get>) {
  return ['info', '/info/api', args] as const
}

export function useGetInfoApi<TError = unknown>(
  args: InferRequestType<typeof client.info.api.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoApiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.info.api.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInfoApi<TError = unknown>(
  args: InferRequestType<typeof client.info.api.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoApiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.api.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.info.api.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetInfoStatIndexKey(args: InferRequestType<typeof client.info.stat.index.$get>) {
  return ['info', '/info/stat/', args] as const
}

export function useGetInfoStatIndex<TError = unknown>(
  args: InferRequestType<typeof client.info.stat.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoStatIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.stat.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoStatIndex<TError = unknown>(
  args: InferRequestType<typeof client.info.stat.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoStatIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.stat.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.stat.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoStatZoneKey(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
) {
  return ['info', '/info/stat/:zone', args] as const
}

export function useGetInfoStatZone<TError = unknown>(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInfoStatZoneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.stat[':zone'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoStatZone<TError = unknown>(
  args: InferRequestType<(typeof client.info.stat)[':zone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInfoStatZoneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.stat)[':zone']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.stat[':zone'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoTldIndexKey() {
  return ['info', '/info/tld/'] as const
}

export function useGetInfoTldIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoTldIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.tld.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoTldIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoTldIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.tld.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.tld.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoTldZoneKey(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
) {
  return ['info', '/info/tld/:zone', args] as const
}

export function useGetInfoTldZone<TError = unknown>(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInfoTldZoneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.tld[':zone'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoTldZone<TError = unknown>(
  args: InferRequestType<(typeof client.info.tld)[':zone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInfoTldZoneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info.tld)[':zone']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.tld[':zone'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
