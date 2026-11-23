import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureCategories.$get>>,
) {
  return ['featureCategories', '/featureCategories', toValue(args)] as const
}

export function getFeatureCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureCategories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.featureCategories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureCategories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>
            >
          >,
          ReturnType<typeof getFeatureCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureCategories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.featureCategories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureClassesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureClasses.$get>>,
) {
  return ['featureClasses', '/featureClasses', toValue(args)] as const
}

export function getFeatureClassesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureClasses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureClassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.featureClasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureClasses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureClasses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
          >,
          ReturnType<typeof getFeatureClassesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureClasses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureClassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureClassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.featureClasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureTypes.$get>>,
) {
  return ['featureTypes', '/featureTypes', toValue(args)] as const
}

export function getFeatureTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.featureTypes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeatureTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.featureTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>
          >,
          ReturnType<typeof getFeatureTypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.featureTypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeatureTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.featureTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeaturesFeatureIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.features)[':featureId']['$get']>>,
) {
  return ['features', '/features/:featureId', toValue(args)] as const
}

export function getFeaturesFeatureIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.features)[':featureId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeaturesFeatureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.features[':featureId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeaturesFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.features)[':featureId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeaturesFeatureIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.features)[':featureId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeaturesFeatureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeaturesFeatureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.features[':featureId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNameAuthoritiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nameAuthorities.$get>>,
) {
  return ['nameAuthorities', '/nameAuthorities', toValue(args)] as const
}

export function getNameAuthoritiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nameAuthorities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNameAuthoritiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nameAuthorities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNameAuthorities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nameAuthorities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>
            >
          >,
          ReturnType<typeof getNameAuthoritiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nameAuthorities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNameAuthoritiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNameAuthoritiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nameAuthorities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.changes.$get>>,
) {
  return ['names', '/names/changes', toValue(args)] as const
}

export function getNamesChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.changes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesChanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.changes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
          >,
          ReturnType<typeof getNamesChangesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.changes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNamesChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesDecisionsRecentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.decisions.recent.$get>>,
) {
  return ['names', '/names/decisions/recent', toValue(args)] as const
}

export function getNamesDecisionsRecentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.decisions.recent.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesDecisionsRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.decisions.recent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesDecisionsRecent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.decisions.recent.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
            >
          >,
          ReturnType<typeof getNamesDecisionsRecentQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.recent.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesDecisionsRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesDecisionsRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.decisions.recent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesDecisionsYearQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.decisions.year.$get>>,
) {
  return ['names', '/names/decisions/year', toValue(args)] as const
}

export function getNamesDecisionsYearQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.decisions.year.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesDecisionsYearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.decisions.year.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesDecisionsYear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.decisions.year.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>
            >
          >,
          ReturnType<typeof getNamesDecisionsYearQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.decisions.year.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNamesDecisionsYearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesDecisionsYearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.decisions.year.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesInsideQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.inside.$get>>,
) {
  return ['names', '/names/inside', toValue(args)] as const
}

export function getNamesInsideQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.inside.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesInsideQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.inside.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNamesInside<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.inside.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>
          >,
          ReturnType<typeof getNamesInsideQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.inside.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesInsideQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesInsideQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.inside.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesNearQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.near.$get>>,
) {
  return ['names', '/names/near', toValue(args)] as const
}

export function getNamesNearQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.near.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesNearQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.near.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNamesNear<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.near.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>
          >,
          ReturnType<typeof getNamesNearQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.near.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesNearQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesNearQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.near.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesNotOfficialSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.notOfficial.search.$get>>,
) {
  return ['names', '/names/notOfficial/search', toValue(args)] as const
}

export function getNamesNotOfficialSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.notOfficial.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesNotOfficialSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.notOfficial.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesNotOfficialSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.notOfficial.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
            >
          >,
          ReturnType<typeof getNamesNotOfficialSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.notOfficial.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesNotOfficialSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesNotOfficialSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.notOfficial.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesOfficialSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.official.search.$get>>,
) {
  return ['names', '/names/official/search', toValue(args)] as const
}

export function getNamesOfficialSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.official.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesOfficialSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.official.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesOfficialSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.official.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
            >
          >,
          ReturnType<typeof getNamesOfficialSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.names.official.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamesOfficialSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesOfficialSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.official.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.search.$get>>,
) {
  return ['names', '/names/search', toValue(args)] as const
}

export function getNamesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNamesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>
          >,
          ReturnType<typeof getNamesSearchQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesNameIdOutputFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.names)[':nameId.:outputFormat']['$get']>>,
) {
  return ['names', '/names/:nameId.:outputFormat', toValue(args)] as const
}

export function getNamesNameIdOutputFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.names)[':nameId.:outputFormat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesNameIdOutputFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names[':nameId.:outputFormat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamesNameIdOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.names)[':nameId.:outputFormat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.names)[':nameId.:outputFormat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.names)[':nameId.:outputFormat']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.names)[':nameId.:outputFormat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNamesNameIdOutputFormatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesNameIdOutputFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names[':nameId.:outputFormat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
