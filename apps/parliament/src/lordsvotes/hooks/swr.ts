import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDataKey() {
  return ['data'] as const
}

export function getGetDataDivisionsGroupedbypartyKey(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
) {
  return ['data', '/data/Divisions/groupedbyparty', args] as const
}

export function useGetDataDivisionsGroupedbyparty<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
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
        ? getGetDataDivisionsGroupedbypartyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.groupedbyparty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataDivisionsGroupedbyparty<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
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
        ? getGetDataDivisionsGroupedbypartyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.groupedbyparty.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataDivisionsMembervotingKey(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
) {
  return ['data', '/data/Divisions/membervoting', args] as const
}

export function useGetDataDivisionsMembervoting<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
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
        ? getGetDataDivisionsMembervotingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.membervoting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataDivisionsMembervoting<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.membervoting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
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
        ? getGetDataDivisionsMembervotingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.membervoting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataDivisionsSearchKey(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
) {
  return ['data', '/data/Divisions/search', args] as const
}

export function useGetDataDivisionsSearch<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
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
        ? getGetDataDivisionsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataDivisionsSearch<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
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
        ? getGetDataDivisionsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataDivisionsSearchTotalResultsKey(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
) {
  return ['data', '/data/Divisions/searchTotalResults', args] as const
}

export function useGetDataDivisionsSearchTotalResults<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
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
        ? getGetDataDivisionsSearchTotalResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.searchTotalResults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataDivisionsSearchTotalResults<TError = unknown>(
  args: InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
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
        ? getGetDataDivisionsSearchTotalResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions.searchTotalResults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataDivisionsDivisionIdKey(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
) {
  return ['data', '/data/Divisions/:divisionId', args] as const
}

export function useGetDataDivisionsDivisionId<TError = unknown>(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
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
        ? getGetDataDivisionsDivisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions[':divisionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataDivisionsDivisionId<TError = unknown>(
  args: InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
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
        ? getGetDataDivisionsDivisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.data.Divisions[':divisionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
