import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNameKey() {
  return ['name'] as const
}

export function getSearchJsonKey() {
  return ['search.json'] as const
}

export function getGetNameConceptTypeSpecificConceptJsonKey(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
) {
  return ['name', '/name/:concept-type/:specific-concept.json', args] as const
}

export function useGetNameConceptTypeSpecificConceptJson<TError = unknown>(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
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
        ? getGetNameConceptTypeSpecificConceptJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.name[':concept-type'][':specific-concept.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNameConceptTypeSpecificConceptJson<TError = unknown>(
  args: InferRequestType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
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
        ? getGetNameConceptTypeSpecificConceptJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.name)[':concept-type'][':specific-concept.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.name[':concept-type'][':specific-concept.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchJsonKey(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
) {
  return ['search.json', '/search.json', args] as const
}

export function useGetSearchJson<TError = unknown>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchJson<TError = unknown>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
