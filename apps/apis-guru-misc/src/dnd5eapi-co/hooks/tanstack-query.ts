import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >({
    queryKey: getApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiAbilityScoresIndexQueryKey(
  args: InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
) {
  return ['api', '/api/ability-scores/:index', args] as const
}

export function getApiAbilityScoresIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAbilityScoresIndexQueryKey>
  >({
    queryKey: getApiAbilityScoresIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['ability-scores'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAbilityScoresIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAbilityScoresIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiAbilityScoresIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAbilityScoresIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAbilityScoresIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiAbilityScoresIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAlignmentsIndexQueryKey(
  args: InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
) {
  return ['api', '/api/alignments/:index', args] as const
}

export function getApiAlignmentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlignmentsIndexQueryKey>
  >({
    queryKey: getApiAlignmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.alignments[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAlignmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlignmentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlignmentsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlignmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlignmentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlignmentsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiBackgroundsIndexQueryKey(
  args: InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
) {
  return ['api', '/api/backgrounds/:index', args] as const
}

export function getApiBackgroundsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBackgroundsIndexQueryKey>
  >({
    queryKey: getApiBackgroundsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.backgrounds[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiBackgroundsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBackgroundsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiBackgroundsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiBackgroundsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBackgroundsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiBackgroundsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiClassesIndexQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['$get']>,
) {
  return ['api', '/api/classes/:index', args] as const
}

export function getApiClassesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexQueryKey>
  >({
    queryKey: getApiClassesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiClassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiClassesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiClassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiClassesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiClassesIndexFeaturesQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
) {
  return ['api', '/api/classes/:index/features', args] as const
}

export function getApiClassesIndexFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexFeaturesQueryKey>
  >({
    queryKey: getApiClassesIndexFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
) {
  return ['api', '/api/classes/:index/levels', args] as const
}

export function getApiClassesIndexLevelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsClassLevelQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>,
) {
  return ['api', '/api/classes/:index/levels/:class_level', args] as const
}

export function getApiClassesIndexLevelsClassLevelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsClassLevelQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsClassLevelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels[':class_level'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexLevelsClassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsClassLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexLevelsClassLevelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexLevelsClassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsClassLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexLevelsClassLevelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsClassLevelFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
) {
  return ['api', '/api/classes/:index/levels/:class_level/features', args] as const
}

export function getApiClassesIndexLevelsClassLevelFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsClassLevelFeaturesQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsClassLevelFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels[':class_level'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexLevelsClassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsClassLevelFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexLevelsClassLevelFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexLevelsClassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsClassLevelFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexLevelsClassLevelFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexLevelsSpellLevelSpellsQueryKey(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
) {
  return ['api', '/api/classes/:index/levels/:spell_level/spells', args] as const
}

export function getApiClassesIndexLevelsSpellLevelSpellsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsSpellLevelSpellsQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsSpellLevelSpellsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels[':spell_level'].spells.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexLevelsSpellLevelSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsSpellLevelSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexLevelsSpellLevelSpellsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexLevelsSpellLevelSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsSpellLevelSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexLevelsSpellLevelSpellsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexMultiClassingQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
) {
  return ['api', '/api/classes/:index/multi-classing', args] as const
}

export function getApiClassesIndexMultiClassingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexMultiClassingQueryKey>
  >({
    queryKey: getApiClassesIndexMultiClassingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index']['multi-classing'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexMultiClassing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexMultiClassingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexMultiClassingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexMultiClassing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexMultiClassingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexMultiClassingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexProficienciesQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
) {
  return ['api', '/api/classes/:index/proficiencies', args] as const
}

export function getApiClassesIndexProficienciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexProficienciesQueryKey>
  >({
    queryKey: getApiClassesIndexProficienciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].proficiencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexProficienciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexProficienciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexSpellcastingQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
) {
  return ['api', '/api/classes/:index/spellcasting', args] as const
}

export function getApiClassesIndexSpellcastingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSpellcastingQueryKey>
  >({
    queryKey: getApiClassesIndexSpellcastingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].spellcasting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexSpellcasting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSpellcastingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexSpellcastingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexSpellcasting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSpellcastingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexSpellcastingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexSpellsQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
) {
  return ['api', '/api/classes/:index/spells', args] as const
}

export function getApiClassesIndexSpellsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSpellsQueryKey>
  >({
    queryKey: getApiClassesIndexSpellsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].spells.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexSpellsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexSpellsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiClassesIndexSubclassesQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
) {
  return ['api', '/api/classes/:index/subclasses', args] as const
}

export function getApiClassesIndexSubclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSubclassesQueryKey>
  >({
    queryKey: getApiClassesIndexSubclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].subclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiClassesIndexSubclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSubclassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiClassesIndexSubclassesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiClassesIndexSubclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSubclassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiClassesIndexSubclassesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiConditionsIndexQueryKey(
  args: InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
) {
  return ['api', '/api/conditions/:index', args] as const
}

export function getApiConditionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConditionsIndexQueryKey>
  >({
    queryKey: getApiConditionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.conditions[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiConditionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConditionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiConditionsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiConditionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConditionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiConditionsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiDamageTypesIndexQueryKey(
  args: InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
) {
  return ['api', '/api/damage-types/:index', args] as const
}

export function getApiDamageTypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDamageTypesIndexQueryKey>
  >({
    queryKey: getApiDamageTypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['damage-types'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDamageTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDamageTypesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiDamageTypesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiDamageTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDamageTypesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiDamageTypesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiEquipmentCategoriesIndexQueryKey(
  args: InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
) {
  return ['api', '/api/equipment-categories/:index', args] as const
}

export function getApiEquipmentCategoriesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEquipmentCategoriesIndexQueryKey>
  >({
    queryKey: getApiEquipmentCategoriesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['equipment-categories'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEquipmentCategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEquipmentCategoriesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiEquipmentCategoriesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiEquipmentCategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEquipmentCategoriesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiEquipmentCategoriesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiEquipmentIndexQueryKey(
  args: InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
) {
  return ['api', '/api/equipment/:index', args] as const
}

export function getApiEquipmentIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEquipmentIndexQueryKey>
  >({
    queryKey: getApiEquipmentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.equipment[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiEquipmentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEquipmentIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEquipmentIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEquipmentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEquipmentIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEquipmentIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFeatsIndexQueryKey(
  args: InferRequestType<(typeof client.api.feats)[':index']['$get']>,
) {
  return ['api', '/api/feats/:index', args] as const
}

export function getApiFeatsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.feats)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeatsIndexQueryKey>
  >({
    queryKey: getApiFeatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.feats[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiFeatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.feats)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeatsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFeatsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFeatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.feats)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeatsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFeatsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiFeaturesIndexQueryKey(
  args: InferRequestType<(typeof client.api.features)[':index']['$get']>,
) {
  return ['api', '/api/features/:index', args] as const
}

export function getApiFeaturesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.features)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeaturesIndexQueryKey>
  >({
    queryKey: getApiFeaturesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.features[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.features)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeaturesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiFeaturesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.features)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeaturesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiFeaturesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiLanguagesIndexQueryKey(
  args: InferRequestType<(typeof client.api.languages)[':index']['$get']>,
) {
  return ['api', '/api/languages/:index', args] as const
}

export function getApiLanguagesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.languages)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLanguagesIndexQueryKey>
  >({
    queryKey: getApiLanguagesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.languages[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiLanguagesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.languages)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLanguagesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiLanguagesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiLanguagesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.languages)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLanguagesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiLanguagesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMagicItemsIndexQueryKey(
  args: InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
) {
  return ['api', '/api/magic-items/:index', args] as const
}

export function getApiMagicItemsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMagicItemsIndexQueryKey>
  >({
    queryKey: getApiMagicItemsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['magic-items'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMagicItemsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMagicItemsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMagicItemsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMagicItemsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMagicItemsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMagicItemsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMagicSchoolsIndexQueryKey(
  args: InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
) {
  return ['api', '/api/magic-schools/:index', args] as const
}

export function getApiMagicSchoolsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMagicSchoolsIndexQueryKey>
  >({
    queryKey: getApiMagicSchoolsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['magic-schools'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMagicSchoolsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMagicSchoolsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMagicSchoolsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMagicSchoolsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMagicSchoolsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMagicSchoolsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMonstersQueryKey(args: InferRequestType<typeof client.api.monsters.$get>) {
  return ['api', '/api/monsters', args] as const
}

export function getApiMonstersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.monsters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMonstersQueryKey>
  >({
    queryKey: getApiMonstersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.monsters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiMonsters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.monsters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMonstersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMonstersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMonsters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.monsters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMonstersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMonstersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiMonstersIndexQueryKey(
  args: InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
) {
  return ['api', '/api/monsters/:index', args] as const
}

export function getApiMonstersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonstersIndexQueryKey>
  >({
    queryKey: getApiMonstersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.monsters[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiMonstersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMonstersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiMonstersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiMonstersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMonstersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiMonstersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProficienciesIndexQueryKey(
  args: InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
) {
  return ['api', '/api/proficiencies/:index', args] as const
}

export function getApiProficienciesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProficienciesIndexQueryKey>
  >({
    queryKey: getApiProficienciesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.proficiencies[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiProficienciesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProficienciesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiProficienciesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiProficienciesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProficienciesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiProficienciesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiRacesIndexQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['$get']>,
) {
  return ['api', '/api/races/:index', args] as const
}

export function getApiRacesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexQueryKey>
  >({
    queryKey: getApiRacesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiRacesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRacesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRacesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRacesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiRacesIndexProficienciesQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
) {
  return ['api', '/api/races/:index/proficiencies', args] as const
}

export function getApiRacesIndexProficienciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexProficienciesQueryKey>
  >({
    queryKey: getApiRacesIndexProficienciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].proficiencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRacesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiRacesIndexProficienciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRacesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiRacesIndexProficienciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiRacesIndexSubracesQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
) {
  return ['api', '/api/races/:index/subraces', args] as const
}

export function getApiRacesIndexSubracesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexSubracesQueryKey>
  >({
    queryKey: getApiRacesIndexSubracesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].subraces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRacesIndexSubraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexSubracesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiRacesIndexSubracesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRacesIndexSubraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexSubracesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiRacesIndexSubracesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiRacesIndexTraitsQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
) {
  return ['api', '/api/races/:index/traits', args] as const
}

export function getApiRacesIndexTraitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexTraitsQueryKey>
  >({
    queryKey: getApiRacesIndexTraitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].traits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRacesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexTraitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRacesIndexTraitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRacesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexTraitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRacesIndexTraitsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiRuleSectionsIndexQueryKey(
  args: InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
) {
  return ['api', '/api/rule-sections/:index', args] as const
}

export function getApiRuleSectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRuleSectionsIndexQueryKey>
  >({
    queryKey: getApiRuleSectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['rule-sections'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRuleSectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRuleSectionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRuleSectionsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRuleSectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRuleSectionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRuleSectionsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiRulesIndexQueryKey(
  args: InferRequestType<(typeof client.api.rules)[':index']['$get']>,
) {
  return ['api', '/api/rules/:index', args] as const
}

export function getApiRulesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rules)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRulesIndexQueryKey>
  >({
    queryKey: getApiRulesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rules[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiRulesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rules)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRulesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRulesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRulesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rules)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRulesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRulesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSkillsIndexQueryKey(
  args: InferRequestType<(typeof client.api.skills)[':index']['$get']>,
) {
  return ['api', '/api/skills/:index', args] as const
}

export function getApiSkillsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.skills)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSkillsIndexQueryKey>
  >({
    queryKey: getApiSkillsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.skills[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSkillsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.skills)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSkillsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSkillsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSkillsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.skills)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSkillsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSkillsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSpellsQueryKey(args: InferRequestType<typeof client.api.spells.$get>) {
  return ['api', '/api/spells', args] as const
}

export function getApiSpellsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.spells.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSpellsQueryKey>
  >({
    queryKey: getApiSpellsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spells.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSpells<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.spells.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSpellsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSpells<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.spells.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSpellsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSpellsIndexQueryKey(
  args: InferRequestType<(typeof client.api.spells)[':index']['$get']>,
) {
  return ['api', '/api/spells/:index', args] as const
}

export function getApiSpellsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spells)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpellsIndexQueryKey>
  >({
    queryKey: getApiSpellsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spells[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiSpellsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spells)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpellsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSpellsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSpellsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spells)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpellsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSpellsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSubclassesIndexQueryKey(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
) {
  return ['api', '/api/subclasses/:index', args] as const
}

export function getApiSubclassesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexQueryKey>
  >({
    queryKey: getApiSubclassesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubclassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSubclassesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSubclassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSubclassesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSubclassesIndexFeaturesQueryKey(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
) {
  return ['api', '/api/subclasses/:index/features', args] as const
}

export function getApiSubclassesIndexFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexFeaturesQueryKey>
  >({
    queryKey: getApiSubclassesIndexFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubclassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSubclassesIndexFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSubclassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSubclassesIndexFeaturesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSubclassesIndexLevelsQueryKey(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
) {
  return ['api', '/api/subclasses/:index/levels', args] as const
}

export function getApiSubclassesIndexLevelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsQueryKey>
  >({
    queryKey: getApiSubclassesIndexLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].levels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubclassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSubclassesIndexLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSubclassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSubclassesIndexLevelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSubclassesIndexLevelsSubclassLevelQueryKey(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
) {
  return ['api', '/api/subclasses/:index/levels/:subclass_level', args] as const
}

export function getApiSubclassesIndexLevelsSubclassLevelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelQueryKey>
  >({
    queryKey: getApiSubclassesIndexLevelsSubclassLevelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].levels[':subclass_level'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubclassesIndexLevelsSubclassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSubclassesIndexLevelsSubclassLevelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSubclassesIndexLevelsSubclassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSubclassesIndexLevelsSubclassLevelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
) {
  return ['api', '/api/subclasses/:index/levels/:subclass_level/features', args] as const
}

export function getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey>
  >({
    queryKey: getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].levels[':subclass_level'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubclassesIndexLevelsSubclassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSubclassesIndexLevelsSubclassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSubracesIndexQueryKey(
  args: InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
) {
  return ['api', '/api/subraces/:index', args] as const
}

export function getApiSubracesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexQueryKey>
  >({
    queryKey: getApiSubracesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subraces[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubracesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSubracesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSubracesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSubracesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiSubracesIndexProficienciesQueryKey(
  args: InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
) {
  return ['api', '/api/subraces/:index/proficiencies', args] as const
}

export function getApiSubracesIndexProficienciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexProficienciesQueryKey>
  >({
    queryKey: getApiSubracesIndexProficienciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subraces[':index'].proficiencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubracesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSubracesIndexProficienciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSubracesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSubracesIndexProficienciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiSubracesIndexTraitsQueryKey(
  args: InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
) {
  return ['api', '/api/subraces/:index/traits', args] as const
}

export function getApiSubracesIndexTraitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexTraitsQueryKey>
  >({
    queryKey: getApiSubracesIndexTraitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subraces[':index'].traits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiSubracesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexTraitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSubracesIndexTraitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSubracesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexTraitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSubracesIndexTraitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiTraitsIndexQueryKey(
  args: InferRequestType<(typeof client.api.traits)[':index']['$get']>,
) {
  return ['api', '/api/traits/:index', args] as const
}

export function getApiTraitsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.traits)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTraitsIndexQueryKey>
  >({
    queryKey: getApiTraitsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.traits[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiTraitsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.traits)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTraitsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTraitsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTraitsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.traits)[':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTraitsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTraitsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiWeaponPropertiesIndexQueryKey(
  args: InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
) {
  return ['api', '/api/weapon-properties/:index', args] as const
}

export function getApiWeaponPropertiesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWeaponPropertiesIndexQueryKey>
  >({
    queryKey: getApiWeaponPropertiesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['weapon-properties'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWeaponPropertiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWeaponPropertiesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiWeaponPropertiesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWeaponPropertiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWeaponPropertiesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiWeaponPropertiesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiEndpointQueryKey(
  args: InferRequestType<(typeof client.api)[':endpoint']['$get']>,
) {
  return ['api', '/api/:endpoint', args] as const
}

export function getApiEndpointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)[':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEndpointQueryKey>
  >({
    queryKey: getApiEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':endpoint'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)[':endpoint']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEndpointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)[':endpoint']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEndpointQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
