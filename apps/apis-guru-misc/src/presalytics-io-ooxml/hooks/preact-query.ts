import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChartsKey() {
  return ['Charts'] as const
}

export function getConnectionShapesKey() {
  return ['ConnectionShapes'] as const
}

export function getDocumentsKey() {
  return ['Documents'] as const
}

export function getGroupsKey() {
  return ['Groups'] as const
}

export function getImagesKey() {
  return ['Images'] as const
}

export function getShapeTreesKey() {
  return ['ShapeTrees'] as const
}

export function getShapesKey() {
  return ['Shapes'] as const
}

export function getSharedKey() {
  return ['Shared'] as const
}

export function getSlidesKey() {
  return ['Slides'] as const
}

export function getSmartArtsKey() {
  return ['SmartArts'] as const
}

export function getTablesKey() {
  return ['Tables'] as const
}

export function getThemesKey() {
  return ['Themes'] as const
}

export function getChartsAxesIdQueryKey(
  args: InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>,
) {
  return ['Charts', '/Charts/Axes/:id', args] as const
}

export function getChartsAxesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxesIdQueryKey>
  >({
    queryKey: getChartsAxesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.Axes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsAxesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsAxesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsAxesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsAxesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsAxisDataTypesQueryKey() {
  return ['Charts', '/Charts/AxisDataTypes'] as const
}

export function getChartsAxisDataTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxisDataTypesQueryKey>
  >({
    queryKey: getChartsAxisDataTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.AxisDataTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsAxisDataTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxisDataTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsAxisDataTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsAxisDataTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxisDataTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsAxisDataTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsAxisDataTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Charts', '/Charts/AxisDataTypes/TypeId/:type_id', args] as const
}

export function getChartsAxisDataTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxisDataTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getChartsAxisDataTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.AxisDataTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsAxisDataTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxisDataTypesTypeIdTypeIdQueryKey>
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
      ...getChartsAxisDataTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsAxisDataTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxisDataTypesTypeIdTypeIdQueryKey>
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
      ...getChartsAxisDataTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsAxisDataTypesIdQueryKey(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>,
) {
  return ['Charts', '/Charts/AxisDataTypes/:id', args] as const
}

export function getChartsAxisDataTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxisDataTypesIdQueryKey>
  >({
    queryKey: getChartsAxisDataTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.AxisDataTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsAxisDataTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxisDataTypesIdQueryKey>
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
      ...getChartsAxisDataTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsAxisDataTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsAxisDataTypesIdQueryKey>
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
      ...getChartsAxisDataTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsChartDataIdQueryKey(
  args: InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>,
) {
  return ['Charts', '/Charts/ChartData/:id', args] as const
}

export function getChartsChartDataIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsChartDataIdQueryKey>
  >({
    queryKey: getChartsChartDataIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.ChartData[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsChartDataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsChartDataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsChartDataIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsChartDataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsChartDataIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsChartDataIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsChartUpdateIdQueryKey(
  args: InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>,
) {
  return ['Charts', '/Charts/ChartUpdate/:id', args] as const
}

export function getChartsChartUpdateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsChartUpdateIdQueryKey>
  >({
    queryKey: getChartsChartUpdateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.ChartUpdate[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsChartUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsChartUpdateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsChartUpdateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsChartUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsChartUpdateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsChartUpdateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutChartsChartUpdateIdMutationKey() {
  return ['Charts', '/Charts/ChartUpdate/:id', 'PUT'] as const
}

export function getPutChartsChartUpdateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChartsChartUpdateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$put']>) {
      return parseResponse(client.Charts.ChartUpdate[':id'].$put(args, options))
    },
  })
}

export function usePutChartsChartUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChartsChartUpdateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChartsChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>,
) {
  return ['Charts', '/Charts/ChildObjects/:id', args] as const
}

export function getChartsChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsChildObjectsIdQueryKey>
  >({
    queryKey: getChartsChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsColumnCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>,
) {
  return ['Charts', '/Charts/ColumnCollections/:id', args] as const
}

export function getChartsColumnCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsColumnCollectionsIdQueryKey>
  >({
    queryKey: getChartsColumnCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.ColumnCollections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsColumnCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsColumnCollectionsIdQueryKey>
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
      ...getChartsColumnCollectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsColumnCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsColumnCollectionsIdQueryKey>
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
      ...getChartsColumnCollectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsColumnsIdQueryKey(
  args: InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>,
) {
  return ['Charts', '/Charts/Columns/:id', args] as const
}

export function getChartsColumnsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsColumnsIdQueryKey>
  >({
    queryKey: getChartsColumnsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.Columns[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsColumnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsColumnsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsColumnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsColumnsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsDataPointsIdQueryKey(
  args: InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>,
) {
  return ['Charts', '/Charts/DataPoints/:id', args] as const
}

export function getChartsDataPointsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsDataPointsIdQueryKey>
  >({
    queryKey: getChartsDataPointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.DataPoints[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsDataPointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsDataPointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsDataPointsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsDataPointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsDataPointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsDataPointsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsDetailsIdQueryKey(
  args: InferRequestType<(typeof client.Charts.Details)[':id']['$get']>,
) {
  return ['Charts', '/Charts/Details/:id', args] as const
}

export function getChartsDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsDetailsIdQueryKey>
  >({
    queryKey: getChartsDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.Details[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>,
) {
  return ['Charts', '/Charts/OpenOfficeXml/:id', args] as const
}

export function getChartsOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getChartsOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsOpenOfficeXmlIdQueryKey>
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
      ...getChartsOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsOpenOfficeXmlIdQueryKey>
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
      ...getChartsOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutChartsOpenOfficeXmlIdMutationKey() {
  return ['Charts', '/Charts/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutChartsOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChartsOpenOfficeXmlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$put']>) {
      return parseResponse(client.Charts.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutChartsOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChartsOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChartsPlotTypeQueryKey() {
  return ['Charts', '/Charts/PlotType'] as const
}

export function getChartsPlotTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsPlotTypeQueryKey>
  >({
    queryKey: getChartsPlotTypeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.PlotType.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsPlotType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartsPlotTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsPlotTypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsPlotType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartsPlotTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsPlotTypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsPlotTypeTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>,
) {
  return ['Charts', '/Charts/PlotType/TypeId/:type_id', args] as const
}

export function getChartsPlotTypeTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsPlotTypeTypeIdTypeIdQueryKey>
  >({
    queryKey: getChartsPlotTypeTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.PlotType.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsPlotTypeTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsPlotTypeTypeIdTypeIdQueryKey>
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
      ...getChartsPlotTypeTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsPlotTypeTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsPlotTypeTypeIdTypeIdQueryKey>
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
      ...getChartsPlotTypeTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsPlotTypeIdQueryKey(
  args: InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>,
) {
  return ['Charts', '/Charts/PlotType/:id', args] as const
}

export function getChartsPlotTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsPlotTypeIdQueryKey>
  >({
    queryKey: getChartsPlotTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.PlotType[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsPlotTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsPlotTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsPlotTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsPlotTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsPlotTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsPlotTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsRowColQueryKey() {
  return ['Charts', '/Charts/RowCol'] as const
}

export function getChartsRowColQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowColQueryKey>
  >({
    queryKey: getChartsRowColQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.RowCol.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsRowCol<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowColQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsRowColQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsRowCol<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowColQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsRowColQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsRowColTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>,
) {
  return ['Charts', '/Charts/RowCol/TypeId/:type_id', args] as const
}

export function getChartsRowColTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowColTypeIdTypeIdQueryKey>
  >({
    queryKey: getChartsRowColTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.RowCol.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsRowColTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowColTypeIdTypeIdQueryKey>
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
      ...getChartsRowColTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsRowColTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowColTypeIdTypeIdQueryKey>
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
      ...getChartsRowColTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsRowColIdQueryKey(
  args: InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>,
) {
  return ['Charts', '/Charts/RowCol/:id', args] as const
}

export function getChartsRowColIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowColIdQueryKey>
  >({
    queryKey: getChartsRowColIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.RowCol[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsRowColId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowColIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsRowColIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsRowColId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowColIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsRowColIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsRowCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>,
) {
  return ['Charts', '/Charts/RowCollections/:id', args] as const
}

export function getChartsRowCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowCollectionsIdQueryKey>
  >({
    queryKey: getChartsRowCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.RowCollections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsRowCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowCollectionsIdQueryKey>
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
      ...getChartsRowCollectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsRowCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowCollectionsIdQueryKey>
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
      ...getChartsRowCollectionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsRowNameFormatTypesQueryKey() {
  return ['Charts', '/Charts/RowNameFormatTypes'] as const
}

export function getChartsRowNameFormatTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowNameFormatTypesQueryKey>
  >({
    queryKey: getChartsRowNameFormatTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.RowNameFormatTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsRowNameFormatTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowNameFormatTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsRowNameFormatTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsRowNameFormatTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowNameFormatTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsRowNameFormatTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsRowNameFormatTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Charts', '/Charts/RowNameFormatTypes/TypeId/:type_id', args] as const
}

export function getChartsRowNameFormatTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowNameFormatTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getChartsRowNameFormatTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.RowNameFormatTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsRowNameFormatTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowNameFormatTypesTypeIdTypeIdQueryKey>
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
      ...getChartsRowNameFormatTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsRowNameFormatTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowNameFormatTypesTypeIdTypeIdQueryKey>
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
      ...getChartsRowNameFormatTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsRowNameFormatTypesIdQueryKey(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>,
) {
  return ['Charts', '/Charts/RowNameFormatTypes/:id', args] as const
}

export function getChartsRowNameFormatTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowNameFormatTypesIdQueryKey>
  >({
    queryKey: getChartsRowNameFormatTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.RowNameFormatTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartsRowNameFormatTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowNameFormatTypesIdQueryKey>
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
      ...getChartsRowNameFormatTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartsRowNameFormatTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowNameFormatTypesIdQueryKey>
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
      ...getChartsRowNameFormatTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartsRowsIdQueryKey(
  args: InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>,
) {
  return ['Charts', '/Charts/Rows/:id', args] as const
}

export function getChartsRowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowsIdQueryKey>
  >({
    queryKey: getChartsRowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.Rows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsRowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsRowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsRowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsSvgIdQueryKey(
  args: InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>,
) {
  return ['Charts', '/Charts/Svg/:id', args] as const
}

export function getChartsSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsSvgIdQueryKey>
  >({
    queryKey: getChartsSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartsIdQueryKey(args: InferRequestType<(typeof client.Charts)[':id']['$get']>) {
  return ['Charts', '/Charts/:id', args] as const
}

export function getChartsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Charts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsIdQueryKey>
  >({
    queryKey: getChartsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Charts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Charts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConnectionShapesChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/ChildObjects/:id', args] as const
}

export function getConnectionShapesChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesChildObjectsIdQueryKey>
  >({
    queryKey: getConnectionShapesChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ConnectionShapes.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionShapesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesChildObjectsIdQueryKey>
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
      ...getConnectionShapesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionShapesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesChildObjectsIdQueryKey>
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
      ...getConnectionShapesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConnectionShapesDetailsIdQueryKey(
  args: InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/Details/:id', args] as const
}

export function getConnectionShapesDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesDetailsIdQueryKey>
  >({
    queryKey: getConnectionShapesDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ConnectionShapes.Details[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionShapesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesDetailsIdQueryKey>
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
      ...getConnectionShapesDetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionShapesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesDetailsIdQueryKey>
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
      ...getConnectionShapesDetailsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConnectionShapesOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/OpenOfficeXml/:id', args] as const
}

export function getConnectionShapesOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getConnectionShapesOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ConnectionShapes.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionShapesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesOpenOfficeXmlIdQueryKey>
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
      ...getConnectionShapesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionShapesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesOpenOfficeXmlIdQueryKey>
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
      ...getConnectionShapesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutConnectionShapesOpenOfficeXmlIdMutationKey() {
  return ['ConnectionShapes', '/ConnectionShapes/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutConnectionShapesOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConnectionShapesOpenOfficeXmlIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$put']>,
    ) {
      return parseResponse(client.ConnectionShapes.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutConnectionShapesOpenOfficeXmlId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConnectionShapesOpenOfficeXmlIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionShapesSvgIdQueryKey(
  args: InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/Svg/:id', args] as const
}

export function getConnectionShapesSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesSvgIdQueryKey>
  >({
    queryKey: getConnectionShapesSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ConnectionShapes.Svg[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionShapesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesSvgIdQueryKey>
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
      ...getConnectionShapesSvgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionShapesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesSvgIdQueryKey>
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
      ...getConnectionShapesSvgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConnectionShapesIdQueryKey(
  args: InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/:id', args] as const
}

export function getConnectionShapesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesIdQueryKey>
  >({
    queryKey: getConnectionShapesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ConnectionShapes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionShapesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConnectionShapesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConnectionShapesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionShapesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConnectionShapesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDocumentsMutationKey() {
  return ['Documents', '/Documents', 'POST'] as const
}

export function getPostDocumentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.$post>>>>>,
    TError,
    InferRequestType<typeof client.Documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Documents.$post>) {
      return parseResponse(client.Documents.$post(args, options))
    },
  })
}

export function usePostDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDocumentsChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>,
) {
  return ['Documents', '/Documents/ChildObjects/:id', args] as const
}

export function getDocumentsChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsChildObjectsIdQueryKey>
  >({
    queryKey: getDocumentsChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Documents.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsChildObjectsIdQueryKey>
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
      ...getDocumentsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsChildObjectsIdQueryKey>
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
      ...getDocumentsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDocumentsCloneIdMutationKey() {
  return ['Documents', '/Documents/Clone/:id', 'POST'] as const
}

export function getPostDocumentsCloneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Clone)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Documents.Clone)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsCloneIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Documents.Clone)[':id']['$post']>) {
      return parseResponse(client.Documents.Clone[':id'].$post(args, options))
    },
  })
}

export function usePostDocumentsCloneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.Clone)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Documents.Clone)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDocumentsCloneIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDocumentsDocumentTypeQueryKey() {
  return ['Documents', '/Documents/DocumentType'] as const
}

export function getDocumentsDocumentTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentTypeQueryKey>
  >({
    queryKey: getDocumentsDocumentTypeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Documents.DocumentType.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsDocumentType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsDocumentTypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsDocumentType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsDocumentTypeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocumentsDocumentTypeTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>,
) {
  return ['Documents', '/Documents/DocumentType/TypeId/:type_id', args] as const
}

export function getDocumentsDocumentTypeTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentTypeTypeIdTypeIdQueryKey>
  >({
    queryKey: getDocumentsDocumentTypeTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Documents.DocumentType.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsDocumentTypeTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentTypeTypeIdTypeIdQueryKey>
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
      ...getDocumentsDocumentTypeTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentsDocumentTypeTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentTypeTypeIdTypeIdQueryKey>
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
      ...getDocumentsDocumentTypeTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocumentsDocumentTypeIdQueryKey(
  args: InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>,
) {
  return ['Documents', '/Documents/DocumentType/:id', args] as const
}

export function getDocumentsDocumentTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentTypeIdQueryKey>
  >({
    queryKey: getDocumentsDocumentTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Documents.DocumentType[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsDocumentTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentTypeIdQueryKey>
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
      ...getDocumentsDocumentTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDocumentsDocumentTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDocumentTypeIdQueryKey>
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
      ...getDocumentsDocumentTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDocumentsDownloadIdQueryKey(
  args: InferRequestType<(typeof client.Documents.Download)[':id']['$get']>,
) {
  return ['Documents', '/Documents/Download/:id', args] as const
}

export function getDocumentsDownloadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.Download)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDownloadIdQueryKey>
  >({
    queryKey: getDocumentsDownloadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Documents.Download[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDocumentsDownloadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.Download)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDownloadIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsDownloadIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsDownloadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents.Download)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsDownloadIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsDownloadIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.Documents)[':id']['$get']>,
) {
  return ['Documents', '/Documents/:id', args] as const
}

export function getDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIdQueryKey>
  >({
    queryKey: getDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Documents[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDocumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Documents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDocumentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteDocumentsIdMutationKey() {
  return ['Documents', '/Documents/:id', 'DELETE'] as const
}

export function getDeleteDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Documents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Documents)[':id']['$delete']>) {
      return parseResponse(client.Documents[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Documents)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDocumentsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>,
) {
  return ['Groups', '/Groups/ChildObjects/:id', args] as const
}

export function getGroupsChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsChildObjectsIdQueryKey>
  >({
    queryKey: getGroupsChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Groups.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsDetailsIdQueryKey(
  args: InferRequestType<(typeof client.Groups.Details)[':id']['$get']>,
) {
  return ['Groups', '/Groups/Details/:id', args] as const
}

export function getGroupsDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsDetailsIdQueryKey>
  >({
    queryKey: getGroupsDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Groups.Details[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>,
) {
  return ['Groups', '/Groups/OpenOfficeXml/:id', args] as const
}

export function getGroupsOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getGroupsOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Groups.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsOpenOfficeXmlIdQueryKey>
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
      ...getGroupsOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsOpenOfficeXmlIdQueryKey>
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
      ...getGroupsOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGroupsOpenOfficeXmlIdMutationKey() {
  return ['Groups', '/Groups/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutGroupsOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsOpenOfficeXmlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$put']>) {
      return parseResponse(client.Groups.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutGroupsOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsSvgIdQueryKey(
  args: InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>,
) {
  return ['Groups', '/Groups/Svg/:id', args] as const
}

export function getGroupsSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsSvgIdQueryKey>
  >({
    queryKey: getGroupsSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Groups.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsIdQueryKey(args: InferRequestType<(typeof client.Groups)[':id']['$get']>) {
  return ['Groups', '/Groups/:id', args] as const
}

export function getGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Groups)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdQueryKey>
  >({
    queryKey: getGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Groups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getImagesChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>,
) {
  return ['Images', '/Images/ChildObjects/:id', args] as const
}

export function getImagesChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesChildObjectsIdQueryKey>
  >({
    queryKey: getImagesChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useImagesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getImagesDetailsIdQueryKey(
  args: InferRequestType<(typeof client.Images.Details)[':id']['$get']>,
) {
  return ['Images', '/Images/Details/:id', args] as const
}

export function getImagesDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesDetailsIdQueryKey>
  >({
    queryKey: getImagesDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.Details[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImagesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutImagesGetImageIdMutationKey() {
  return ['Images', '/Images/GetImage/:Id', 'PUT'] as const
}

export function getPutImagesGetImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Images.GetImage)[':Id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Images.GetImage)[':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImagesGetImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Images.GetImage)[':Id']['$put']>) {
      return parseResponse(client.Images.GetImage[':Id'].$put(args, options))
    },
  })
}

export function usePutImagesGetImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.GetImage)[':Id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Images.GetImage)[':Id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImagesGetImageIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImagesOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>,
) {
  return ['Images', '/Images/OpenOfficeXml/:id', args] as const
}

export function getImagesOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getImagesOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useImagesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesOpenOfficeXmlIdQueryKey>
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
      ...getImagesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseImagesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesOpenOfficeXmlIdQueryKey>
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
      ...getImagesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutImagesOpenOfficeXmlIdMutationKey() {
  return ['Images', '/Images/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutImagesOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImagesOpenOfficeXmlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$put']>) {
      return parseResponse(client.Images.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutImagesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImagesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImagesSvgIdQueryKey(
  args: InferRequestType<(typeof client.Images.Svg)[':id']['$get']>,
) {
  return ['Images', '/Images/Svg/:id', args] as const
}

export function getImagesSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesSvgIdQueryKey>
  >({
    queryKey: getImagesSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImagesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getImagesIdQueryKey(args: InferRequestType<(typeof client.Images)[':id']['$get']>) {
  return ['Images', '/Images/:id', args] as const
}

export function getImagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Images)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdQueryKey>
  >({
    queryKey: getImagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Images[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Images)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShapeTreesChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>,
) {
  return ['ShapeTrees', '/ShapeTrees/ChildObjects/:id', args] as const
}

export function getShapeTreesChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesChildObjectsIdQueryKey>
  >({
    queryKey: getShapeTreesChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ShapeTrees.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShapeTreesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesChildObjectsIdQueryKey>
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
      ...getShapeTreesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShapeTreesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesChildObjectsIdQueryKey>
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
      ...getShapeTreesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShapeTreesDetailsIdQueryKey(
  args: InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>,
) {
  return ['ShapeTrees', '/ShapeTrees/Details/:id', args] as const
}

export function getShapeTreesDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesDetailsIdQueryKey>
  >({
    queryKey: getShapeTreesDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ShapeTrees.Details[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShapeTreesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShapeTreesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShapeTreesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShapeTreesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShapeTreesOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>,
) {
  return ['ShapeTrees', '/ShapeTrees/OpenOfficeXml/:id', args] as const
}

export function getShapeTreesOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getShapeTreesOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ShapeTrees.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShapeTreesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesOpenOfficeXmlIdQueryKey>
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
      ...getShapeTreesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShapeTreesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesOpenOfficeXmlIdQueryKey>
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
      ...getShapeTreesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShapeTreesOpenOfficeXmlIdMutationKey() {
  return ['ShapeTrees', '/ShapeTrees/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutShapeTreesOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShapeTreesOpenOfficeXmlIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$put']>,
    ) {
      return parseResponse(client.ShapeTrees.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutShapeTreesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShapeTreesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShapeTreesSvgIdQueryKey(
  args: InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>,
) {
  return ['ShapeTrees', '/ShapeTrees/Svg/:id', args] as const
}

export function getShapeTreesSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesSvgIdQueryKey>
  >({
    queryKey: getShapeTreesSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ShapeTrees.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShapeTreesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShapeTreesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShapeTreesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShapeTreesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShapeTreesIdQueryKey(
  args: InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>,
) {
  return ['ShapeTrees', '/ShapeTrees/:id', args] as const
}

export function getShapeTreesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesIdQueryKey>
  >({
    queryKey: getShapeTreesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ShapeTrees[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShapeTreesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShapeTreesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShapeTreesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapeTreesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShapeTreesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShapesChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>,
) {
  return ['Shapes', '/Shapes/ChildObjects/:id', args] as const
}

export function getShapesChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesChildObjectsIdQueryKey>
  >({
    queryKey: getShapesChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shapes.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShapesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShapesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShapesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShapesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShapesDetailsIdQueryKey(
  args: InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>,
) {
  return ['Shapes', '/Shapes/Details/:id', args] as const
}

export function getShapesDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesDetailsIdQueryKey>
  >({
    queryKey: getShapesDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shapes.Details[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShapesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShapesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShapesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShapesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShapesOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>,
) {
  return ['Shapes', '/Shapes/OpenOfficeXml/:id', args] as const
}

export function getShapesOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getShapesOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shapes.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShapesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesOpenOfficeXmlIdQueryKey>
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
      ...getShapesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShapesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesOpenOfficeXmlIdQueryKey>
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
      ...getShapesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutShapesOpenOfficeXmlIdMutationKey() {
  return ['Shapes', '/Shapes/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutShapesOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShapesOpenOfficeXmlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$put']>) {
      return parseResponse(client.Shapes.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutShapesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutShapesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShapesSvgIdQueryKey(
  args: InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>,
) {
  return ['Shapes', '/Shapes/Svg/:id', args] as const
}

export function getShapesSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesSvgIdQueryKey>
  >({
    queryKey: getShapesSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shapes.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShapesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShapesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShapesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShapesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShapesIdQueryKey(args: InferRequestType<(typeof client.Shapes)[':id']['$get']>) {
  return ['Shapes', '/Shapes/:id', args] as const
}

export function getShapesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Shapes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShapesIdQueryKey>
  >({
    queryKey: getShapesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shapes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShapesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShapesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShapesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shapes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShapesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShapesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedColorTransformationAttributesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/ColorTransformationAttributes/:id', args] as const
}

export function getSharedColorTransformationAttributesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTransformationAttributesIdQueryKey>
  >({
    queryKey: getSharedColorTransformationAttributesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.ColorTransformationAttributes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedColorTransformationAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTransformationAttributesIdQueryKey>
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
      ...getSharedColorTransformationAttributesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedColorTransformationAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTransformationAttributesIdQueryKey>
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
      ...getSharedColorTransformationAttributesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedColorTransformationsIdQueryKey(
  args: InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>,
) {
  return ['Shared', '/Shared/ColorTransformations/:id', args] as const
}

export function getSharedColorTransformationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTransformationsIdQueryKey>
  >({
    queryKey: getSharedColorTransformationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.ColorTransformations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedColorTransformationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTransformationsIdQueryKey>
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
      ...getSharedColorTransformationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedColorTransformationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTransformationsIdQueryKey>
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
      ...getSharedColorTransformationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedColorTypesQueryKey() {
  return ['Shared', '/Shared/ColorTypes'] as const
}

export function getSharedColorTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTypesQueryKey>
  >({
    queryKey: getSharedColorTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.ColorTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedColorTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedColorTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedColorTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedColorTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedColorTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Shared', '/Shared/ColorTypes/TypeId/:type_id', args] as const
}

export function getSharedColorTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSharedColorTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.ColorTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedColorTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTypesTypeIdTypeIdQueryKey>
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
      ...getSharedColorTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedColorTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTypesTypeIdTypeIdQueryKey>
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
      ...getSharedColorTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedColorTypesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/ColorTypes/:id', args] as const
}

export function getSharedColorTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTypesIdQueryKey>
  >({
    queryKey: getSharedColorTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.ColorTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedColorTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedColorTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedColorTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedColorTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedColorTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedDashTypesQueryKey() {
  return ['Shared', '/Shared/DashTypes'] as const
}

export function getSharedDashTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedDashTypesQueryKey>
  >({
    queryKey: getSharedDashTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.DashTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSharedDashTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSharedDashTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedDashTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedDashTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSharedDashTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedDashTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedDashTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Shared', '/Shared/DashTypes/TypeId/:type_id', args] as const
}

export function getSharedDashTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedDashTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSharedDashTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.DashTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedDashTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedDashTypesTypeIdTypeIdQueryKey>
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
      ...getSharedDashTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedDashTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedDashTypesTypeIdTypeIdQueryKey>
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
      ...getSharedDashTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedDashTypesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/DashTypes/:id', args] as const
}

export function getSharedDashTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedDashTypesIdQueryKey>
  >({
    queryKey: getSharedDashTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.DashTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedDashTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedDashTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedDashTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedDashTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedDashTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedDashTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedEffectAttributesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/EffectAttributes/:id', args] as const
}

export function getSharedEffectAttributesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectAttributesIdQueryKey>
  >({
    queryKey: getSharedEffectAttributesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.EffectAttributes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedEffectAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectAttributesIdQueryKey>
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
      ...getSharedEffectAttributesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedEffectAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectAttributesIdQueryKey>
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
      ...getSharedEffectAttributesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedEffectTypesQueryKey() {
  return ['Shared', '/Shared/EffectTypes'] as const
}

export function getSharedEffectTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectTypesQueryKey>
  >({
    queryKey: getSharedEffectTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.EffectTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedEffectTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedEffectTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedEffectTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedEffectTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedEffectTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Shared', '/Shared/EffectTypes/TypeId/:type_id', args] as const
}

export function getSharedEffectTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSharedEffectTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.EffectTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedEffectTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectTypesTypeIdTypeIdQueryKey>
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
      ...getSharedEffectTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedEffectTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectTypesTypeIdTypeIdQueryKey>
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
      ...getSharedEffectTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedEffectTypesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/EffectTypes/:id', args] as const
}

export function getSharedEffectTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectTypesIdQueryKey>
  >({
    queryKey: getSharedEffectTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.EffectTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedEffectTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedEffectTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedEffectTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedEffectTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedEffectsIdQueryKey(
  args: InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>,
) {
  return ['Shared', '/Shared/Effects/:id', args] as const
}

export function getSharedEffectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectsIdQueryKey>
  >({
    queryKey: getSharedEffectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.Effects[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSharedEffectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedEffectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedEffectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedEffectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedEffectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedFillMapIdQueryKey(
  args: InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>,
) {
  return ['Shared', '/Shared/FillMap/:id', args] as const
}

export function getSharedFillMapIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillMapIdQueryKey>
  >({
    queryKey: getSharedFillMapIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.FillMap[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSharedFillMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillMapIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedFillMapIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedFillMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillMapIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedFillMapIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedFillTypesQueryKey() {
  return ['Shared', '/Shared/FillTypes'] as const
}

export function getSharedFillTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillTypesQueryKey>
  >({
    queryKey: getSharedFillTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.FillTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSharedFillTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedFillTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedFillTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedFillTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedFillTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Shared', '/Shared/FillTypes/TypeId/:type_id', args] as const
}

export function getSharedFillTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSharedFillTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.FillTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedFillTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillTypesTypeIdTypeIdQueryKey>
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
      ...getSharedFillTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedFillTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillTypesTypeIdTypeIdQueryKey>
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
      ...getSharedFillTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedFillTypesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/FillTypes/:id', args] as const
}

export function getSharedFillTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillTypesIdQueryKey>
  >({
    queryKey: getSharedFillTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.FillTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedFillTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedFillTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedFillTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedFillTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedFillTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedGradientFillsIdQueryKey(
  args: InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>,
) {
  return ['Shared', '/Shared/GradientFills/:id', args] as const
}

export function getSharedGradientFillsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedGradientFillsIdQueryKey>
  >({
    queryKey: getSharedGradientFillsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.GradientFills[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedGradientFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedGradientFillsIdQueryKey>
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
      ...getSharedGradientFillsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedGradientFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedGradientFillsIdQueryKey>
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
      ...getSharedGradientFillsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedGradientStopsIdQueryKey(
  args: InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>,
) {
  return ['Shared', '/Shared/GradientStops/:id', args] as const
}

export function getSharedGradientStopsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedGradientStopsIdQueryKey>
  >({
    queryKey: getSharedGradientStopsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.GradientStops[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedGradientStopsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedGradientStopsIdQueryKey>
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
      ...getSharedGradientStopsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedGradientStopsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedGradientStopsIdQueryKey>
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
      ...getSharedGradientStopsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedImageFillsIdQueryKey(
  args: InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>,
) {
  return ['Shared', '/Shared/ImageFills/:id', args] as const
}

export function getSharedImageFillsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedImageFillsIdQueryKey>
  >({
    queryKey: getSharedImageFillsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.ImageFills[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedImageFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedImageFillsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedImageFillsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedImageFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedImageFillsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedImageFillsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedLineEndSizesQueryKey() {
  return ['Shared', '/Shared/LineEndSizes'] as const
}

export function getSharedLineEndSizesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndSizesQueryKey>
  >({
    queryKey: getSharedLineEndSizesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.LineEndSizes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedLineEndSizes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndSizesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedLineEndSizesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedLineEndSizes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndSizesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedLineEndSizesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedLineEndSizesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>,
) {
  return ['Shared', '/Shared/LineEndSizes/TypeId/:type_id', args] as const
}

export function getSharedLineEndSizesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndSizesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSharedLineEndSizesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.LineEndSizes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedLineEndSizesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndSizesTypeIdTypeIdQueryKey>
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
      ...getSharedLineEndSizesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedLineEndSizesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndSizesTypeIdTypeIdQueryKey>
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
      ...getSharedLineEndSizesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedLineEndSizesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/LineEndSizes/:id', args] as const
}

export function getSharedLineEndSizesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndSizesIdQueryKey>
  >({
    queryKey: getSharedLineEndSizesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.LineEndSizes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedLineEndSizesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndSizesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedLineEndSizesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedLineEndSizesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndSizesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedLineEndSizesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedLineEndTypesQueryKey() {
  return ['Shared', '/Shared/LineEndTypes'] as const
}

export function getSharedLineEndTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndTypesQueryKey>
  >({
    queryKey: getSharedLineEndTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.LineEndTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedLineEndTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedLineEndTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedLineEndTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedLineEndTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedLineEndTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Shared', '/Shared/LineEndTypes/TypeId/:type_id', args] as const
}

export function getSharedLineEndTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSharedLineEndTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.LineEndTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedLineEndTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndTypesTypeIdTypeIdQueryKey>
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
      ...getSharedLineEndTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedLineEndTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndTypesTypeIdTypeIdQueryKey>
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
      ...getSharedLineEndTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSharedLineEndTypesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>,
) {
  return ['Shared', '/Shared/LineEndTypes/:id', args] as const
}

export function getSharedLineEndTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndTypesIdQueryKey>
  >({
    queryKey: getSharedLineEndTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.LineEndTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedLineEndTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedLineEndTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedLineEndTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLineEndTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedLineEndTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedLinesIdQueryKey(
  args: InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>,
) {
  return ['Shared', '/Shared/Lines/:id', args] as const
}

export function getSharedLinesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLinesIdQueryKey>
  >({
    queryKey: getSharedLinesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.Lines[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSharedLinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLinesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedLinesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedLinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedLinesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedLinesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedParagraphIdQueryKey(
  args: InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>,
) {
  return ['Shared', '/Shared/Paragraph/:id', args] as const
}

export function getSharedParagraphIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedParagraphIdQueryKey>
  >({
    queryKey: getSharedParagraphIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.Paragraph[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedParagraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedParagraphIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedParagraphIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedParagraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedParagraphIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedParagraphIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedSolidFillsIdQueryKey(
  args: InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>,
) {
  return ['Shared', '/Shared/SolidFills/:id', args] as const
}

export function getSharedSolidFillsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedSolidFillsIdQueryKey>
  >({
    queryKey: getSharedSolidFillsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.SolidFills[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedSolidFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedSolidFillsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedSolidFillsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedSolidFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedSolidFillsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedSolidFillsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedTextIdQueryKey(
  args: InferRequestType<(typeof client.Shared.Text)[':id']['$get']>,
) {
  return ['Shared', '/Shared/Text/:id', args] as const
}

export function getSharedTextIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Text)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedTextIdQueryKey>
  >({
    queryKey: getSharedTextIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.Text[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSharedTextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Text)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedTextIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSharedTextIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSharedTextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.Text)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedTextIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSharedTextIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSharedTextContainerIdQueryKey(
  args: InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>,
) {
  return ['Shared', '/Shared/TextContainer/:id', args] as const
}

export function getSharedTextContainerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedTextContainerIdQueryKey>
  >({
    queryKey: getSharedTextContainerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Shared.TextContainer[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSharedTextContainerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedTextContainerIdQueryKey>
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
      ...getSharedTextContainerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSharedTextContainerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSharedTextContainerIdQueryKey>
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
      ...getSharedTextContainerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSlidesChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>,
) {
  return ['Slides', '/Slides/ChildObjects/:id', args] as const
}

export function getSlidesChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesChildObjectsIdQueryKey>
  >({
    queryKey: getSlidesChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesColorMapsIdQueryKey(
  args: InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>,
) {
  return ['Slides', '/Slides/ColorMaps/:id', args] as const
}

export function getSlidesColorMapsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesColorMapsIdQueryKey>
  >({
    queryKey: getSlidesColorMapsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.ColorMaps[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesColorMapsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesColorMapsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesColorMapsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesColorMapsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesColorMapsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesColorMapsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesDetailsIdQueryKey(
  args: InferRequestType<(typeof client.Slides.Details)[':id']['$get']>,
) {
  return ['Slides', '/Slides/Details/:id', args] as const
}

export function getSlidesDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesDetailsIdQueryKey>
  >({
    queryKey: getSlidesDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.Details[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSlidesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesGraphicTypesQueryKey() {
  return ['Slides', '/Slides/GraphicTypes'] as const
}

export function getSlidesGraphicTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicTypesQueryKey>
  >({
    queryKey: getSlidesGraphicTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.GraphicTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGraphicTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesGraphicTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesGraphicTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesGraphicTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesGraphicTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Slides', '/Slides/GraphicTypes/TypeId/:type_id', args] as const
}

export function getSlidesGraphicTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSlidesGraphicTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.GraphicTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGraphicTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicTypesTypeIdTypeIdQueryKey>
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
      ...getSlidesGraphicTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSlidesGraphicTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicTypesTypeIdTypeIdQueryKey>
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
      ...getSlidesGraphicTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSlidesGraphicTypesIdQueryKey(
  args: InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>,
) {
  return ['Slides', '/Slides/GraphicTypes/:id', args] as const
}

export function getSlidesGraphicTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicTypesIdQueryKey>
  >({
    queryKey: getSlidesGraphicTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.GraphicTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGraphicTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesGraphicTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesGraphicTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesGraphicTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesGraphicsIdQueryKey(
  args: InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>,
) {
  return ['Slides', '/Slides/Graphics/:id', args] as const
}

export function getSlidesGraphicsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicsIdQueryKey>
  >({
    queryKey: getSlidesGraphicsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.Graphics[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGraphicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesGraphicsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesGraphicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGraphicsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesGraphicsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesGroupElementTypesQueryKey() {
  return ['Slides', '/Slides/GroupElementTypes'] as const
}

export function getSlidesGroupElementTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementTypesQueryKey>
  >({
    queryKey: getSlidesGroupElementTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.GroupElementTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGroupElementTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesGroupElementTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesGroupElementTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesGroupElementTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesGroupElementTypesTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>,
) {
  return ['Slides', '/Slides/GroupElementTypes/TypeId/:type_id', args] as const
}

export function getSlidesGroupElementTypesTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementTypesTypeIdTypeIdQueryKey>
  >({
    queryKey: getSlidesGroupElementTypesTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.GroupElementTypes.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGroupElementTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementTypesTypeIdTypeIdQueryKey>
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
      ...getSlidesGroupElementTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSlidesGroupElementTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementTypesTypeIdTypeIdQueryKey>
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
      ...getSlidesGroupElementTypesTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSlidesGroupElementTypesIdQueryKey(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>,
) {
  return ['Slides', '/Slides/GroupElementTypes/:id', args] as const
}

export function getSlidesGroupElementTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementTypesIdQueryKey>
  >({
    queryKey: getSlidesGroupElementTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.GroupElementTypes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGroupElementTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementTypesIdQueryKey>
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
      ...getSlidesGroupElementTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSlidesGroupElementTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementTypesIdQueryKey>
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
      ...getSlidesGroupElementTypesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSlidesGroupElementsIdQueryKey(
  args: InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>,
) {
  return ['Slides', '/Slides/GroupElements/:id', args] as const
}

export function getSlidesGroupElementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementsIdQueryKey>
  >({
    queryKey: getSlidesGroupElementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.GroupElements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesGroupElementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementsIdQueryKey>
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
      ...getSlidesGroupElementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSlidesGroupElementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesGroupElementsIdQueryKey>
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
      ...getSlidesGroupElementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSlidesOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>,
) {
  return ['Slides', '/Slides/OpenOfficeXml/:id', args] as const
}

export function getSlidesOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getSlidesOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesOpenOfficeXmlIdQueryKey>
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
      ...getSlidesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSlidesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesOpenOfficeXmlIdQueryKey>
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
      ...getSlidesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSlidesOpenOfficeXmlIdMutationKey() {
  return ['Slides', '/Slides/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutSlidesOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSlidesOpenOfficeXmlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$put']>) {
      return parseResponse(client.Slides.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutSlidesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSlidesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSlidesSlideMastersIdQueryKey(
  args: InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>,
) {
  return ['Slides', '/Slides/SlideMasters/:id', args] as const
}

export function getSlidesSlideMastersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesSlideMastersIdQueryKey>
  >({
    queryKey: getSlidesSlideMastersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.SlideMasters[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSlidesSlideMastersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesSlideMastersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesSlideMastersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesSlideMastersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesSlideMastersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesSlideMastersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesSvgIdQueryKey(
  args: InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>,
) {
  return ['Slides', '/Slides/Svg/:id', args] as const
}

export function getSlidesSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesSvgIdQueryKey>
  >({
    queryKey: getSlidesSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSlidesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSlidesIdQueryKey(args: InferRequestType<(typeof client.Slides)[':id']['$get']>) {
  return ['Slides', '/Slides/:id', args] as const
}

export function getSlidesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Slides)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesIdQueryKey>
  >({
    queryKey: getSlidesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Slides[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSlidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Slides)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSlidesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSlidesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSmartArtsChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>,
) {
  return ['SmartArts', '/SmartArts/ChildObjects/:id', args] as const
}

export function getSmartArtsChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsChildObjectsIdQueryKey>
  >({
    queryKey: getSmartArtsChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.SmartArts.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSmartArtsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsChildObjectsIdQueryKey>
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
      ...getSmartArtsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmartArtsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsChildObjectsIdQueryKey>
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
      ...getSmartArtsChildObjectsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSmartArtsDetailsIdQueryKey(
  args: InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>,
) {
  return ['SmartArts', '/SmartArts/Details/:id', args] as const
}

export function getSmartArtsDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsDetailsIdQueryKey>
  >({
    queryKey: getSmartArtsDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.SmartArts.Details[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSmartArtsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmartArtsDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmartArtsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmartArtsDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSmartArtsOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>,
) {
  return ['SmartArts', '/SmartArts/OpenOfficeXml/:id', args] as const
}

export function getSmartArtsOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getSmartArtsOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.SmartArts.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSmartArtsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsOpenOfficeXmlIdQueryKey>
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
      ...getSmartArtsOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSmartArtsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsOpenOfficeXmlIdQueryKey>
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
      ...getSmartArtsOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSmartArtsOpenOfficeXmlIdMutationKey() {
  return ['SmartArts', '/SmartArts/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutSmartArtsOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmartArtsOpenOfficeXmlIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$put']>,
    ) {
      return parseResponse(client.SmartArts.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutSmartArtsOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmartArtsOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSmartArtsSvgIdQueryKey(
  args: InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>,
) {
  return ['SmartArts', '/SmartArts/Svg/:id', args] as const
}

export function getSmartArtsSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsSvgIdQueryKey>
  >({
    queryKey: getSmartArtsSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.SmartArts.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSmartArtsSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmartArtsSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmartArtsSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmartArtsSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSmartArtsIdQueryKey(
  args: InferRequestType<(typeof client.SmartArts)[':id']['$get']>,
) {
  return ['SmartArts', '/SmartArts/:id', args] as const
}

export function getSmartArtsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsIdQueryKey>
  >({
    queryKey: getSmartArtsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.SmartArts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSmartArtsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmartArtsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSmartArtsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.SmartArts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSmartArtsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmartArtsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesBordersIdQueryKey(
  args: InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>,
) {
  return ['Tables', '/Tables/Borders/:id', args] as const
}

export function getTablesBordersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesBordersIdQueryKey>
  >({
    queryKey: getTablesBordersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.Borders[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesBordersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesBordersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesBordersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesBordersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesBordersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesBordersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesCellsIdQueryKey(
  args: InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>,
) {
  return ['Tables', '/Tables/Cells/:id', args] as const
}

export function getTablesCellsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesCellsIdQueryKey>
  >({
    queryKey: getTablesCellsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.Cells[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesCellsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesCellsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesCellsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesCellsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesCellsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesCellsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>,
) {
  return ['Tables', '/Tables/ChildObjects/:id', args] as const
}

export function getTablesChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesChildObjectsIdQueryKey>
  >({
    queryKey: getTablesChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTablesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesColumnsIdQueryKey(
  args: InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>,
) {
  return ['Tables', '/Tables/Columns/:id', args] as const
}

export function getTablesColumnsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesColumnsIdQueryKey>
  >({
    queryKey: getTablesColumnsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.Columns[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesColumnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesColumnsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesColumnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesColumnsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesDetailsIdQueryKey(
  args: InferRequestType<(typeof client.Tables.Details)[':id']['$get']>,
) {
  return ['Tables', '/Tables/Details/:id', args] as const
}

export function getTablesDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesDetailsIdQueryKey>
  >({
    queryKey: getTablesDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.Details[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>,
) {
  return ['Tables', '/Tables/OpenOfficeXml/:id', args] as const
}

export function getTablesOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getTablesOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTablesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesOpenOfficeXmlIdQueryKey>
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
      ...getTablesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTablesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesOpenOfficeXmlIdQueryKey>
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
      ...getTablesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTablesOpenOfficeXmlIdMutationKey() {
  return ['Tables', '/Tables/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutTablesOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTablesOpenOfficeXmlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$put']>) {
      return parseResponse(client.Tables.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutTablesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTablesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTablesRowsIdQueryKey(
  args: InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>,
) {
  return ['Tables', '/Tables/Rows/:id', args] as const
}

export function getTablesRowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesRowsIdQueryKey>
  >({
    queryKey: getTablesRowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.Rows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesRowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesRowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesRowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesRowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesSvgIdQueryKey(
  args: InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>,
) {
  return ['Tables', '/Tables/Svg/:id', args] as const
}

export function getTablesSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesSvgIdQueryKey>
  >({
    queryKey: getTablesSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTablesTableUpdateIdQueryKey(
  args: InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>,
) {
  return ['Tables', '/Tables/TableUpdate/:id', args] as const
}

export function getTablesTableUpdateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableUpdateIdQueryKey>
  >({
    queryKey: getTablesTableUpdateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables.TableUpdate[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTablesTableUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableUpdateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesTableUpdateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesTableUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableUpdateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesTableUpdateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTablesTableUpdateIdMutationKey() {
  return ['Tables', '/Tables/TableUpdate/:id', 'PUT'] as const
}

export function getPutTablesTableUpdateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTablesTableUpdateIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$put']>) {
      return parseResponse(client.Tables.TableUpdate[':id'].$put(args, options))
    },
  })
}

export function usePutTablesTableUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTablesTableUpdateIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTablesIdQueryKey(args: InferRequestType<(typeof client.Tables)[':id']['$get']>) {
  return ['Tables', '/Tables/:id', args] as const
}

export function getTablesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Tables)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTablesIdQueryKey>
  >({
    queryKey: getTablesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Tables[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Tables)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesBackgroundFillsIdQueryKey(
  args: InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>,
) {
  return ['Themes', '/Themes/BackgroundFills/:id', args] as const
}

export function getThemesBackgroundFillsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesBackgroundFillsIdQueryKey>
  >({
    queryKey: getThemesBackgroundFillsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.BackgroundFills[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useThemesBackgroundFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesBackgroundFillsIdQueryKey>
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
      ...getThemesBackgroundFillsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseThemesBackgroundFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesBackgroundFillsIdQueryKey>
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
      ...getThemesBackgroundFillsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getThemesChildObjectsIdQueryKey(
  args: InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>,
) {
  return ['Themes', '/Themes/ChildObjects/:id', args] as const
}

export function getThemesChildObjectsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesChildObjectsIdQueryKey>
  >({
    queryKey: getThemesChildObjectsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.ChildObjects[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useThemesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesChildObjectsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesChildObjectsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesColorsIdQueryKey(
  args: InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>,
) {
  return ['Themes', '/Themes/Colors/:id', args] as const
}

export function getThemesColorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesColorsIdQueryKey>
  >({
    queryKey: getThemesColorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Colors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesColorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesColorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesColorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesColorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesCustomColorsIdQueryKey(
  args: InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>,
) {
  return ['Themes', '/Themes/CustomColors/:id', args] as const
}

export function getThemesCustomColorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesCustomColorsIdQueryKey>
  >({
    queryKey: getThemesCustomColorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.CustomColors[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useThemesCustomColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesCustomColorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesCustomColorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesCustomColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesCustomColorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesCustomColorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesDetailsIdQueryKey(
  args: InferRequestType<(typeof client.Themes.Details)[':id']['$get']>,
) {
  return ['Themes', '/Themes/Details/:id', args] as const
}

export function getThemesDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesDetailsIdQueryKey>
  >({
    queryKey: getThemesDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Details[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Details)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesDetailsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesEffectMapIdQueryKey(
  args: InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>,
) {
  return ['Themes', '/Themes/EffectMap/:id', args] as const
}

export function getThemesEffectMapIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesEffectMapIdQueryKey>
  >({
    queryKey: getThemesEffectMapIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.EffectMap[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useThemesEffectMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesEffectMapIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesEffectMapIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesEffectMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesEffectMapIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesEffectMapIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesFillsIdQueryKey(
  args: InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>,
) {
  return ['Themes', '/Themes/Fills/:id', args] as const
}

export function getThemesFillsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesFillsIdQueryKey>
  >({
    queryKey: getThemesFillsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Fills[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesFillsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesFillsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesFillsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesFillsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesFontsIdQueryKey(
  args: InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>,
) {
  return ['Themes', '/Themes/Fonts/:id', args] as const
}

export function getThemesFontsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesFontsIdQueryKey>
  >({
    queryKey: getThemesFontsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Fonts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesFontsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesFontsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesFontsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesFontsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesFontsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesFontsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesIntensityQueryKey() {
  return ['Themes', '/Themes/Intensity'] as const
}

export function getThemesIntensityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIntensityQueryKey>
  >({
    queryKey: getThemesIntensityQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Intensity.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesIntensity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIntensityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesIntensityQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesIntensity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIntensityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesIntensityQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesIntensityTypeIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>,
) {
  return ['Themes', '/Themes/Intensity/TypeId/:type_id', args] as const
}

export function getThemesIntensityTypeIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIntensityTypeIdTypeIdQueryKey>
  >({
    queryKey: getThemesIntensityTypeIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Intensity.TypeId[':type_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useThemesIntensityTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIntensityTypeIdTypeIdQueryKey>
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
      ...getThemesIntensityTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseThemesIntensityTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIntensityTypeIdTypeIdQueryKey>
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
      ...getThemesIntensityTypeIdTypeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getThemesIntensityIdQueryKey(
  args: InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>,
) {
  return ['Themes', '/Themes/Intensity/:id', args] as const
}

export function getThemesIntensityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIntensityIdQueryKey>
  >({
    queryKey: getThemesIntensityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Intensity[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useThemesIntensityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIntensityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesIntensityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesIntensityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIntensityIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesIntensityIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesLineMapIdQueryKey(
  args: InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>,
) {
  return ['Themes', '/Themes/LineMap/:id', args] as const
}

export function getThemesLineMapIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesLineMapIdQueryKey>
  >({
    queryKey: getThemesLineMapIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.LineMap[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesLineMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesLineMapIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesLineMapIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesLineMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesLineMapIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesLineMapIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesOpenOfficeXmlIdQueryKey(
  args: InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>,
) {
  return ['Themes', '/Themes/OpenOfficeXml/:id', args] as const
}

export function getThemesOpenOfficeXmlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesOpenOfficeXmlIdQueryKey>
  >({
    queryKey: getThemesOpenOfficeXmlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.OpenOfficeXml[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useThemesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesOpenOfficeXmlIdQueryKey>
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
      ...getThemesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseThemesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesOpenOfficeXmlIdQueryKey>
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
      ...getThemesOpenOfficeXmlIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutThemesOpenOfficeXmlIdMutationKey() {
  return ['Themes', '/Themes/OpenOfficeXml/:id', 'PUT'] as const
}

export function getPutThemesOpenOfficeXmlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThemesOpenOfficeXmlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$put']>) {
      return parseResponse(client.Themes.OpenOfficeXml[':id'].$put(args, options))
    },
  })
}

export function usePutThemesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutThemesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getThemesSvgIdQueryKey(
  args: InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>,
) {
  return ['Themes', '/Themes/Svg/:id', args] as const
}

export function getThemesSvgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesSvgIdQueryKey>
  >({
    queryKey: getThemesSvgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes.Svg[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesSvgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesSvgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getThemesIdQueryKey(args: InferRequestType<(typeof client.Themes)[':id']['$get']>) {
  return ['Themes', '/Themes/:id', args] as const
}

export function getThemesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.Themes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIdQueryKey>
  >({
    queryKey: getThemesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Themes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useThemesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getThemesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseThemesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Themes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getThemesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
