import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSearchKey() {
  return ['search'] as const
}

export function getGetSearchVersionNumberAdditionalDataExtKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>,
) {
  return ['search', '/search/:versionNumber/additionalData.:ext', args] as const
}

export function useGetSearchVersionNumberAdditionalDataExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
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
        ? getGetSearchVersionNumberAdditionalDataExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber']['additionalData.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberAdditionalDataExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
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
        ? getGetSearchVersionNumberAdditionalDataExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber']['additionalData.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberCSCategoryExtKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>,
) {
  return ['search', '/search/:versionNumber/cS/:category.:ext', args] as const
}

export function useGetSearchVersionNumberCSCategoryExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
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
        ? getGetSearchVersionNumberCSCategoryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].cS[':category.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberCSCategoryExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
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
        ? getGetSearchVersionNumberCSCategoryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].cS[':category.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberCategorySearchQueryExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/categorySearch/:query.:ext', args] as const
}

export function useGetSearchVersionNumberCategorySearchQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
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
        ? getGetSearchVersionNumberCategorySearchQueryExtKey(args)
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
                (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
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
          client.search[':versionNumber'].categorySearch[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberCategorySearchQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
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
        ? getGetSearchVersionNumberCategorySearchQueryExtKey(args)
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
                (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
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
          client.search[':versionNumber'].categorySearch[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberGeocodeQueryExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/geocode/:query.:ext', args] as const
}

export function useGetSearchVersionNumberGeocodeQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
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
        ? getGetSearchVersionNumberGeocodeQueryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].geocode[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberGeocodeQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
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
        ? getGetSearchVersionNumberGeocodeQueryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].geocode[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberGeometryFilterExtKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>,
) {
  return ['search', '/search/:versionNumber/geometryFilter.:ext', args] as const
}

export function useGetSearchVersionNumberGeometryFilterExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
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
        ? getGetSearchVersionNumberGeometryFilterExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber']['geometryFilter.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberGeometryFilterExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
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
        ? getGetSearchVersionNumberGeometryFilterExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber']['geometryFilter.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSearchVersionNumberGeometryFilterExtKey() {
  return ['search', '/search/:versionNumber/geometryFilter.:ext', 'POST'] as const
}

export function usePostSearchVersionNumberGeometryFilterExt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchVersionNumberGeometryFilterExtKey()
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
            (typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']
          >
        },
      ) =>
        parseResponse(
          client.search[':versionNumber']['geometryFilter.:ext'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSearchVersionNumberGeometrySearchQueryExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/geometrySearch/:query.:ext', args] as const
}

export function useGetSearchVersionNumberGeometrySearchQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
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
        ? getGetSearchVersionNumberGeometrySearchQueryExtKey(args)
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
                (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
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
          client.search[':versionNumber'].geometrySearch[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberGeometrySearchQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
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
        ? getGetSearchVersionNumberGeometrySearchQueryExtKey(args)
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
                (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
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
          client.search[':versionNumber'].geometrySearch[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSearchVersionNumberGeometrySearchQueryExtKey() {
  return ['search', '/search/:versionNumber/geometrySearch/:query.:ext', 'POST'] as const
}

export function usePostSearchVersionNumberGeometrySearchQueryExt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchVersionNumberGeometrySearchQueryExtKey()
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
            (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
          >
        },
      ) =>
        parseResponse(
          client.search[':versionNumber'].geometrySearch[':query.:ext'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSearchVersionNumberNearbySearchExtKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>,
) {
  return ['search', '/search/:versionNumber/nearbySearch/.:ext', args] as const
}

export function useGetSearchVersionNumberNearbySearchExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
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
        ? getGetSearchVersionNumberNearbySearchExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].nearbySearch['.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberNearbySearchExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
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
        ? getGetSearchVersionNumberNearbySearchExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].nearbySearch['.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberPoiSearchQueryExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/poiSearch/:query.:ext', args] as const
}

export function useGetSearchVersionNumberPoiSearchQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
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
        ? getGetSearchVersionNumberPoiSearchQueryExtKey(args)
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
                (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
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
          client.search[':versionNumber'].poiSearch[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberPoiSearchQueryExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
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
        ? getGetSearchVersionNumberPoiSearchQueryExtKey(args)
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
                (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
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
          client.search[':versionNumber'].poiSearch[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberReverseGeocodeCrossStreetPositionExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
  >,
) {
  return [
    'search',
    '/search/:versionNumber/reverseGeocode/crossStreet/:position.:ext',
    args,
  ] as const
}

export function useGetSearchVersionNumberReverseGeocodeCrossStreetPositionExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
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
        ? getGetSearchVersionNumberReverseGeocodeCrossStreetPositionExtKey(args)
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
                (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
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
          client.search[':versionNumber'].reverseGeocode.crossStreet[':position.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberReverseGeocodeCrossStreetPositionExt<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
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
        ? getGetSearchVersionNumberReverseGeocodeCrossStreetPositionExtKey(args)
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
                (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
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
          client.search[':versionNumber'].reverseGeocode.crossStreet[':position.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberReverseGeocodePositionExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/reverseGeocode/:position.:ext', args] as const
}

export function useGetSearchVersionNumberReverseGeocodePositionExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
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
        ? getGetSearchVersionNumberReverseGeocodePositionExtKey(args)
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
                (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
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
          client.search[':versionNumber'].reverseGeocode[':position.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberReverseGeocodePositionExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
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
        ? getGetSearchVersionNumberReverseGeocodePositionExtKey(args)
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
                (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
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
          client.search[':versionNumber'].reverseGeocode[':position.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberRoutedFilterPositionHeadingExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/routedFilter/:position/:heading.:ext', args] as const
}

export function useGetSearchVersionNumberRoutedFilterPositionHeadingExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
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
        ? getGetSearchVersionNumberRoutedFilterPositionHeadingExtKey(args)
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
                (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
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
          client.search[':versionNumber'].routedFilter[':position'][':heading.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberRoutedFilterPositionHeadingExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
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
        ? getGetSearchVersionNumberRoutedFilterPositionHeadingExtKey(args)
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
                (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
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
          client.search[':versionNumber'].routedFilter[':position'][':heading.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSearchVersionNumberRoutedFilterPositionHeadingExtKey() {
  return ['search', '/search/:versionNumber/routedFilter/:position/:heading.:ext', 'POST'] as const
}

export function usePostSearchVersionNumberRoutedFilterPositionHeadingExt<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchVersionNumberRoutedFilterPositionHeadingExtKey()
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
            (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
          >
        },
      ) =>
        parseResponse(
          client.search[':versionNumber'].routedFilter[':position'][':heading.:ext'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSearchVersionNumberRoutedSearchQueryPositionHeadingExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
  >,
) {
  return [
    'search',
    '/search/:versionNumber/routedSearch/:query/:position/:heading.:ext',
    args,
  ] as const
}

export function useGetSearchVersionNumberRoutedSearchQueryPositionHeadingExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
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
        ? getGetSearchVersionNumberRoutedSearchQueryPositionHeadingExtKey(args)
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
                (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
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
          client.search[':versionNumber'].routedSearch[':query'][':position'][':heading.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberRoutedSearchQueryPositionHeadingExt<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
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
        ? getGetSearchVersionNumberRoutedSearchQueryPositionHeadingExtKey(args)
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
                (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
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
          client.search[':versionNumber'].routedSearch[':query'][':position'][':heading.:ext'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberSQueryExtKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>,
) {
  return ['search', '/search/:versionNumber/s/:query.:ext', args] as const
}

export function useGetSearchVersionNumberSQueryExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
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
        ? getGetSearchVersionNumberSQueryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search[':versionNumber'].s[':query.:ext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberSQueryExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
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
        ? getGetSearchVersionNumberSQueryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.search[':versionNumber'].s[':query.:ext'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchVersionNumberSearchQueryExtKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>,
) {
  return ['search', '/search/:versionNumber/search/:query.:ext', args] as const
}

export function useGetSearchVersionNumberSearchQueryExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
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
        ? getGetSearchVersionNumberSearchQueryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].search[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberSearchQueryExt<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
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
        ? getGetSearchVersionNumberSearchQueryExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber'].search[':query.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSearchVersionNumberSearchAlongRouteQueryExtKey() {
  return ['search', '/search/:versionNumber/searchAlongRoute/:query.:ext', 'POST'] as const
}

export function usePostSearchVersionNumberSearchAlongRouteQueryExt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchVersionNumberSearchAlongRouteQueryExtKey()
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
            (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
          >
        },
      ) =>
        parseResponse(
          client.search[':versionNumber'].searchAlongRoute[':query.:ext'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSearchVersionNumberStructuredGeocodeExtKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/structuredGeocode.:ext', args] as const
}

export function useGetSearchVersionNumberStructuredGeocodeExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
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
        ? getGetSearchVersionNumberStructuredGeocodeExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber']['structuredGeocode.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchVersionNumberStructuredGeocodeExt<TError = unknown>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
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
        ? getGetSearchVersionNumberStructuredGeocodeExtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.search[':versionNumber']['structuredGeocode.:ext'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
