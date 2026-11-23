import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFeatureCategoriesKey() {
  return ['featureCategories'] as const
}

export function getFeatureClassesKey() {
  return ['featureClasses'] as const
}

export function getFeatureTypesKey() {
  return ['featureTypes'] as const
}

export function getFeaturesKey() {
  return ['features'] as const
}

export function getNameAuthoritiesKey() {
  return ['nameAuthorities'] as const
}

export function getNamesKey() {
  return ['names'] as const
}

export function getGetFeatureCategoriesKey(
  args: InferRequestType<typeof client.featureCategories.$get>,
) {
  return ['featureCategories', '/featureCategories', args] as const
}

export function useGetFeatureCategories<TError = unknown>(
  args: InferRequestType<typeof client.featureCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
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
        ? getGetFeatureCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.featureCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureCategories<TError = unknown>(
  args: InferRequestType<typeof client.featureCategories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
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
        ? getGetFeatureCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.featureCategories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeatureClassesKey(args: InferRequestType<typeof client.featureClasses.$get>) {
  return ['featureClasses', '/featureClasses', args] as const
}

export function useGetFeatureClasses<TError = unknown>(
  args: InferRequestType<typeof client.featureClasses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureClassesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.featureClasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureClasses<TError = unknown>(
  args: InferRequestType<typeof client.featureClasses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureClassesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.featureClasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeatureTypesKey(args: InferRequestType<typeof client.featureTypes.$get>) {
  return ['featureTypes', '/featureTypes', args] as const
}

export function useGetFeatureTypes<TError = unknown>(
  args: InferRequestType<typeof client.featureTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.featureTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureTypes<TError = unknown>(
  args: InferRequestType<typeof client.featureTypes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeatureTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.featureTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeaturesFeatureIdKey(
  args: InferRequestType<(typeof client.features)[':featureId']['$get']>,
) {
  return ['features', '/features/:featureId', args] as const
}

export function useGetFeaturesFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':featureId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
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
        ? getGetFeaturesFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features[':featureId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeaturesFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.features)[':featureId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
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
        ? getGetFeaturesFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.features[':featureId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNameAuthoritiesKey(
  args: InferRequestType<typeof client.nameAuthorities.$get>,
) {
  return ['nameAuthorities', '/nameAuthorities', args] as const
}

export function useGetNameAuthorities<TError = unknown>(
  args: InferRequestType<typeof client.nameAuthorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
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
        ? getGetNameAuthoritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nameAuthorities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNameAuthorities<TError = unknown>(
  args: InferRequestType<typeof client.nameAuthorities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
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
        ? getGetNameAuthoritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nameAuthorities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesChangesKey(args: InferRequestType<typeof client.names.changes.$get>) {
  return ['names', '/names/changes', args] as const
}

export function useGetNamesChanges<TError = unknown>(
  args: InferRequestType<typeof client.names.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesChanges<TError = unknown>(
  args: InferRequestType<typeof client.names.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesDecisionsRecentKey(
  args: InferRequestType<typeof client.names.decisions.recent.$get>,
) {
  return ['names', '/names/decisions/recent', args] as const
}

export function useGetNamesDecisionsRecent<TError = unknown>(
  args: InferRequestType<typeof client.names.decisions.recent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
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
        ? getGetNamesDecisionsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.decisions.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesDecisionsRecent<TError = unknown>(
  args: InferRequestType<typeof client.names.decisions.recent.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
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
        ? getGetNamesDecisionsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.decisions.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesDecisionsYearKey(
  args: InferRequestType<typeof client.names.decisions.year.$get>,
) {
  return ['names', '/names/decisions/year', args] as const
}

export function useGetNamesDecisionsYear<TError = unknown>(
  args: InferRequestType<typeof client.names.decisions.year.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>
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
        ? getGetNamesDecisionsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.decisions.year.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesDecisionsYear<TError = unknown>(
  args: InferRequestType<typeof client.names.decisions.year.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>
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
        ? getGetNamesDecisionsYearKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.decisions.year.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesInsideKey(args: InferRequestType<typeof client.names.inside.$get>) {
  return ['names', '/names/inside', args] as const
}

export function useGetNamesInside<TError = unknown>(
  args: InferRequestType<typeof client.names.inside.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesInsideKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.inside.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesInside<TError = unknown>(
  args: InferRequestType<typeof client.names.inside.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesInsideKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.inside.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesNearKey(args: InferRequestType<typeof client.names.near.$get>) {
  return ['names', '/names/near', args] as const
}

export function useGetNamesNear<TError = unknown>(
  args: InferRequestType<typeof client.names.near.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesNearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.near.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesNear<TError = unknown>(
  args: InferRequestType<typeof client.names.near.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesNearKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.near.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesNotOfficialSearchKey(
  args: InferRequestType<typeof client.names.notOfficial.search.$get>,
) {
  return ['names', '/names/notOfficial/search', args] as const
}

export function useGetNamesNotOfficialSearch<TError = unknown>(
  args: InferRequestType<typeof client.names.notOfficial.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
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
        ? getGetNamesNotOfficialSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.notOfficial.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesNotOfficialSearch<TError = unknown>(
  args: InferRequestType<typeof client.names.notOfficial.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
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
        ? getGetNamesNotOfficialSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.notOfficial.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesOfficialSearchKey(
  args: InferRequestType<typeof client.names.official.search.$get>,
) {
  return ['names', '/names/official/search', args] as const
}

export function useGetNamesOfficialSearch<TError = unknown>(
  args: InferRequestType<typeof client.names.official.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
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
        ? getGetNamesOfficialSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.official.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesOfficialSearch<TError = unknown>(
  args: InferRequestType<typeof client.names.official.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
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
        ? getGetNamesOfficialSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.official.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesSearchKey(args: InferRequestType<typeof client.names.search.$get>) {
  return ['names', '/names/search', args] as const
}

export function useGetNamesSearch<TError = unknown>(
  args: InferRequestType<typeof client.names.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesSearch<TError = unknown>(
  args: InferRequestType<typeof client.names.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesNameIdOutputFormatKey(
  args: InferRequestType<(typeof client.names)[':nameId.{outputFormat}']['$get']>,
) {
  return ['names', '/names/:nameId.{outputFormat}', args] as const
}

export function useGetNamesNameIdOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.names)[':nameId.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.names)[':nameId.{outputFormat}']['$get']>>
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
        ? getGetNamesNameIdOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.names)[':nameId.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names[':nameId.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesNameIdOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.names)[':nameId.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.names)[':nameId.{outputFormat}']['$get']>>
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
        ? getGetNamesNameIdOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.names)[':nameId.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names[':nameId.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
