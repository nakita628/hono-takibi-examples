import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getFeatureCategoriesQueryKey(
  args: InferRequestType<typeof client.featureCategories.$get>,
) {
  return ['featureCategories', '/featureCategories', args] as const
}

export function getFeatureCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.featureCategories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureCategoriesQueryKey>
  >({
    queryKey: getFeatureCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.featureCategories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeatureCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.featureCategories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeatureCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeatureCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeatureClassesQueryKey(
  args: InferRequestType<typeof client.featureClasses.$get>,
) {
  return ['featureClasses', '/featureClasses', args] as const
}

export function getFeatureClassesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.featureClasses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureClassesQueryKey>
  >({
    queryKey: getFeatureClassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.featureClasses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeatureClasses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.featureClasses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeatureClassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeatureClassesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeatureTypesQueryKey(args: InferRequestType<typeof client.featureTypes.$get>) {
  return ['featureTypes', '/featureTypes', args] as const
}

export function getFeatureTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.featureTypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeatureTypesQueryKey>
  >({
    queryKey: getFeatureTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.featureTypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeatureTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.featureTypes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeatureTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeatureTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeaturesFeatureIdQueryKey(
  args: InferRequestType<(typeof client.features)[':featureId']['$get']>,
) {
  return ['features', '/features/:featureId', args] as const
}

export function getFeaturesFeatureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.features)[':featureId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeaturesFeatureIdQueryKey>
  >({
    queryKey: getFeaturesFeatureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.features[':featureId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeaturesFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.features)[':featureId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeaturesFeatureIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFeaturesFeatureIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNameAuthoritiesQueryKey(
  args: InferRequestType<typeof client.nameAuthorities.$get>,
) {
  return ['nameAuthorities', '/nameAuthorities', args] as const
}

export function getNameAuthoritiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nameAuthorities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNameAuthoritiesQueryKey>
  >({
    queryKey: getNameAuthoritiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nameAuthorities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNameAuthorities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nameAuthorities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNameAuthoritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNameAuthoritiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesChangesQueryKey(args: InferRequestType<typeof client.names.changes.$get>) {
  return ['names', '/names/changes', args] as const
}

export function getNamesChangesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.names.changes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNamesChangesQueryKey>
  >({
    queryKey: getNamesChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamesChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.changes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNamesChangesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesChangesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesDecisionsRecentQueryKey(
  args: InferRequestType<typeof client.names.decisions.recent.$get>,
) {
  return ['names', '/names/decisions/recent', args] as const
}

export function getNamesDecisionsRecentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.decisions.recent.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesDecisionsRecentQueryKey>
  >({
    queryKey: getNamesDecisionsRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.decisions.recent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamesDecisionsRecent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.decisions.recent.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesDecisionsRecentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNamesDecisionsRecentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamesDecisionsYearQueryKey(
  args: InferRequestType<typeof client.names.decisions.year.$get>,
) {
  return ['names', '/names/decisions/year', args] as const
}

export function getNamesDecisionsYearQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.names.decisions.year.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNamesDecisionsYearQueryKey>
  >({
    queryKey: getNamesDecisionsYearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.decisions.year.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamesDecisionsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.decisions.year.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesDecisionsYearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesDecisionsYearQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesInsideQueryKey(args: InferRequestType<typeof client.names.inside.$get>) {
  return ['names', '/names/inside', args] as const
}

export function getNamesInsideQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.names.inside.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesInsideQueryKey>
  >({
    queryKey: getNamesInsideQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.inside.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamesInside<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.inside.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNamesInsideQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesInsideQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesNearQueryKey(args: InferRequestType<typeof client.names.near.$get>) {
  return ['names', '/names/near', args] as const
}

export function getNamesNearQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.names.near.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesNearQueryKey>
  >({
    queryKey: getNamesNearQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.near.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamesNear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.near.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNamesNearQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesNearQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesNotOfficialSearchQueryKey(
  args: InferRequestType<typeof client.names.notOfficial.search.$get>,
) {
  return ['names', '/names/notOfficial/search', args] as const
}

export function getNamesNotOfficialSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.notOfficial.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesNotOfficialSearchQueryKey>
  >({
    queryKey: getNamesNotOfficialSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.notOfficial.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamesNotOfficialSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.notOfficial.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesNotOfficialSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNamesNotOfficialSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamesOfficialSearchQueryKey(
  args: InferRequestType<typeof client.names.official.search.$get>,
) {
  return ['names', '/names/official/search', args] as const
}

export function getNamesOfficialSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.names.official.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesOfficialSearchQueryKey>
  >({
    queryKey: getNamesOfficialSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.official.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamesOfficialSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.official.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesOfficialSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesOfficialSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesSearchQueryKey(args: InferRequestType<typeof client.names.search.$get>) {
  return ['names', '/names/search', args] as const
}

export function getNamesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.names.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesSearchQueryKey>
  >({
    queryKey: getNamesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.names.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNamesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNamesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNamesNameIdOutputFormatQueryKey(
  args: InferRequestType<(typeof client.names)[':nameId.:outputFormat']['$get']>,
) {
  return ['names', '/names/:nameId.:outputFormat', args] as const
}

export function getNamesNameIdOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.names)[':nameId.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.names)[':nameId.:outputFormat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.names)[':nameId.:outputFormat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesNameIdOutputFormatQueryKey>
  >({
    queryKey: getNamesNameIdOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.names[':nameId.:outputFormat'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamesNameIdOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.names)[':nameId.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.names)[':nameId.:outputFormat']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.names)[':nameId.:outputFormat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamesNameIdOutputFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNamesNameIdOutputFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
