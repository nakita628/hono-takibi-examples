import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSearchKey() {
  return ['search'] as const
}

export function getGetSearchV1FieldsKey(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
) {
  return ['search', '/search/v1/fields', args] as const
}

export function useGetSearchV1Fields<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchV1FieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchV1Fields<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchV1FieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchV1OrganicKey(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
) {
  return ['search', '/search/v1/organic', args] as const
}

export function useGetSearchV1Organic<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
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
        ? getGetSearchV1OrganicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.organic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchV1Organic<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
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
        ? getGetSearchV1OrganicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.organic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchV1ScrapeKey(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
) {
  return ['search', '/search/v1/scrape', args] as const
}

export function useGetSearchV1Scrape<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchV1ScrapeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.scrape.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchV1Scrape<TError = unknown>(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchV1ScrapeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.v1.scrape.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
