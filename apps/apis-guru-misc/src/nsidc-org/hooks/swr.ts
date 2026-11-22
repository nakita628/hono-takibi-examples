import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFacetsKey() {
  return ['Facets'] as const
}

export function getOpenSearchKey() {
  return ['OpenSearch'] as const
}

export function getOpenSearchDescriptionKey() {
  return ['OpenSearchDescription'] as const
}

export function getSuggestKey() {
  return ['suggest'] as const
}

export function getGetFacetsKey(args: InferRequestType<typeof client.Facets.$get>) {
  return ['Facets', '/Facets', args] as const
}

export function useGetFacets<TError = unknown>(
  args: InferRequestType<typeof client.Facets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Facets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFacets<TError = unknown>(
  args: InferRequestType<typeof client.Facets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Facets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.Facets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOpenSearchKey(args: InferRequestType<typeof client.OpenSearch.$get>) {
  return ['OpenSearch', '/OpenSearch', args] as const
}

export function useGetOpenSearch<TError = unknown>(
  args: InferRequestType<typeof client.OpenSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.OpenSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenSearch<TError = unknown>(
  args: InferRequestType<typeof client.OpenSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearch.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.OpenSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenSearchDescriptionKey() {
  return ['OpenSearchDescription', '/OpenSearchDescription'] as const
}

export function useGetOpenSearchDescription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOpenSearchDescriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.OpenSearchDescription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenSearchDescription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOpenSearchDescriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.OpenSearchDescription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.OpenSearchDescription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSuggestKey(args: InferRequestType<typeof client.suggest.$get>) {
  return ['suggest', '/suggest', args] as const
}

export function useGetSuggest<TError = unknown>(
  args: InferRequestType<typeof client.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuggestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.suggest.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSuggest<TError = unknown>(
  args: InferRequestType<typeof client.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSuggestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suggest.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.suggest.$get(args, clientOptions)), restSwrOptions),
  }
}
