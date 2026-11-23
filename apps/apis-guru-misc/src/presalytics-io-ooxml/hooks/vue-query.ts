import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/Axes/:id', toValue(args)] as const
}

export function getChartsAxesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsAxesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.Axes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsAxesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getChartsAxesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsAxesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.Axes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsAxisDataTypesQueryKey() {
  return ['Charts', '/Charts/AxisDataTypes'] as const
}

export function getChartsAxisDataTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChartsAxisDataTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.AxisDataTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsAxisDataTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>
            >
          >,
          ReturnType<typeof getChartsAxisDataTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxisDataTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChartsAxisDataTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.AxisDataTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsAxisDataTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Charts', '/Charts/AxisDataTypes/TypeId/:type_id', toValue(args)] as const
}

export function getChartsAxisDataTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsAxisDataTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.AxisDataTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsAxisDataTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxisDataTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsAxisDataTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.AxisDataTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsAxisDataTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/AxisDataTypes/:id', toValue(args)] as const
}

export function getChartsAxisDataTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsAxisDataTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.AxisDataTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsAxisDataTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsAxisDataTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsAxisDataTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsAxisDataTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.AxisDataTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsChartDataIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/ChartData/:id', toValue(args)] as const
}

export function getChartsChartDataIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsChartDataIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.ChartData[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsChartDataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsChartDataIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsChartDataIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsChartDataIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.ChartData[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsChartUpdateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/ChartUpdate/:id', toValue(args)] as const
}

export function getChartsChartUpdateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsChartUpdateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.ChartUpdate[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsChartUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsChartUpdateIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsChartUpdateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsChartUpdateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.ChartUpdate[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/ChildObjects/:id', toValue(args)] as const
}

export function getChartsChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsColumnCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/ColumnCollections/:id', toValue(args)] as const
}

export function getChartsColumnCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsColumnCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.ColumnCollections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsColumnCollectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsColumnCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsColumnCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.ColumnCollections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsColumnsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/Columns/:id', toValue(args)] as const
}

export function getChartsColumnsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsColumnsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.Columns[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsColumnsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsColumnsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsColumnsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.Columns[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsDataPointsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/DataPoints/:id', toValue(args)] as const
}

export function getChartsDataPointsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsDataPointsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.DataPoints[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsDataPointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsDataPointsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsDataPointsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsDataPointsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.DataPoints[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Details)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/Details/:id', toValue(args)] as const
}

export function getChartsDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/OpenOfficeXml/:id', toValue(args)] as const
}

export function getChartsOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getChartsPlotTypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChartsPlotTypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.PlotType.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChartsPlotType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>
            >
          >,
          ReturnType<typeof getChartsPlotTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsPlotTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChartsPlotTypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.PlotType.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsPlotTypeTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Charts', '/Charts/PlotType/TypeId/:type_id', toValue(args)] as const
}

export function getChartsPlotTypeTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsPlotTypeTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.PlotType.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsPlotTypeTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsPlotTypeTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsPlotTypeTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.PlotType.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsPlotTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/PlotType/:id', toValue(args)] as const
}

export function getChartsPlotTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsPlotTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.PlotType[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsPlotTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsPlotTypeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsPlotTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsPlotTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.PlotType[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowColQueryKey() {
  return ['Charts', '/Charts/RowCol'] as const
}

export function getChartsRowColQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChartsRowColQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.RowCol.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChartsRowCol<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
          >,
          ReturnType<typeof getChartsRowColQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowColQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChartsRowColQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.RowCol.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowColTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Charts', '/Charts/RowCol/TypeId/:type_id', toValue(args)] as const
}

export function getChartsRowColTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsRowColTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.RowCol.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsRowColTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowColTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsRowColTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.RowCol.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowColIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/RowCol/:id', toValue(args)] as const
}

export function getChartsRowColIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsRowColIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.RowCol[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsRowColId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsRowColIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowColIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsRowColIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.RowCol[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/RowCollections/:id', toValue(args)] as const
}

export function getChartsRowCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsRowCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.RowCollections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsRowCollectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsRowCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.RowCollections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowNameFormatTypesQueryKey() {
  return ['Charts', '/Charts/RowNameFormatTypes'] as const
}

export function getChartsRowNameFormatTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChartsRowNameFormatTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.RowNameFormatTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>
              >
            >
          >,
          ReturnType<typeof getChartsRowNameFormatTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowNameFormatTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChartsRowNameFormatTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.RowNameFormatTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowNameFormatTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Charts', '/Charts/RowNameFormatTypes/TypeId/:type_id', toValue(args)] as const
}

export function getChartsRowNameFormatTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsRowNameFormatTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.RowNameFormatTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChartsRowNameFormatTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowNameFormatTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsRowNameFormatTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.RowNameFormatTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowNameFormatTypesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>
  >,
) {
  return ['Charts', '/Charts/RowNameFormatTypes/:id', toValue(args)] as const
}

export function getChartsRowNameFormatTypesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsRowNameFormatTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.RowNameFormatTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartsRowNameFormatTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowNameFormatTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsRowNameFormatTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.RowNameFormatTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsRowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/Rows/:id', toValue(args)] as const
}

export function getChartsRowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsRowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.Rows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getChartsRowsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsRowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsRowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.Rows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsSvgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/Svg/:id', toValue(args)] as const
}

export function getChartsSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getChartsSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartsSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts)[':id']['$get']>>,
) {
  return ['Charts', '/Charts/:id', toValue(args)] as const
}

export function getChartsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Charts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Charts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getChartsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Charts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionShapesChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>
  >,
) {
  return ['ConnectionShapes', '/ConnectionShapes/ChildObjects/:id', toValue(args)] as const
}

export function getConnectionShapesChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionShapesChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ConnectionShapes.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionShapesChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionShapesChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ConnectionShapes.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionShapesDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/Details/:id', toValue(args)] as const
}

export function getConnectionShapesDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionShapesDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ConnectionShapes.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionShapesDetailsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionShapesDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ConnectionShapes.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionShapesOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>
  >,
) {
  return ['ConnectionShapes', '/ConnectionShapes/OpenOfficeXml/:id', toValue(args)] as const
}

export function getConnectionShapesOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionShapesOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ConnectionShapes.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionShapesOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionShapesOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ConnectionShapes.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/Svg/:id', toValue(args)] as const
}

export function getConnectionShapesSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionShapesSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ConnectionShapes.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionShapesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionShapesSvgIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionShapesSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ConnectionShapes.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionShapesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>>,
) {
  return ['ConnectionShapes', '/ConnectionShapes/:id', toValue(args)] as const
}

export function getConnectionShapesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionShapesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ConnectionShapes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionShapesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionShapesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionShapesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionShapesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ConnectionShapes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Documents.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>>,
) {
  return ['Documents', '/Documents/ChildObjects/:id', toValue(args)] as const
}

export function getDocumentsChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Documents.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Documents.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDocumentsDocumentTypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDocumentsDocumentTypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Documents.DocumentType.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>
            >
          >,
          ReturnType<typeof getDocumentsDocumentTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDocumentsDocumentTypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Documents.DocumentType.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentTypeTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Documents', '/Documents/DocumentType/TypeId/:type_id', toValue(args)] as const
}

export function getDocumentsDocumentTypeTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentTypeTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Documents.DocumentType.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentTypeTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentTypeTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentTypeTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Documents.DocumentType.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDocumentTypeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>>,
) {
  return ['Documents', '/Documents/DocumentType/:id', toValue(args)] as const
}

export function getDocumentsDocumentTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Documents.DocumentType[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Documents.DocumentType[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsDownloadIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.Download)[':id']['$get']>>,
) {
  return ['Documents', '/Documents/Download/:id', toValue(args)] as const
}

export function getDocumentsDownloadIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.Download)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDownloadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Documents.Download[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDownloadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents.Download)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDownloadIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDownloadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDownloadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Documents.Download[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents)[':id']['$get']>>,
) {
  return ['Documents', '/Documents/:id', toValue(args)] as const
}

export function getDocumentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Documents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Documents)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDocumentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Documents[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.Documents)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.Documents)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>>,
) {
  return ['Groups', '/Groups/ChildObjects/:id', toValue(args)] as const
}

export function getGroupsChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Groups.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Groups.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.Details)[':id']['$get']>>,
) {
  return ['Groups', '/Groups/Details/:id', toValue(args)] as const
}

export function getGroupsDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Groups.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Groups.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['Groups', '/Groups/OpenOfficeXml/:id', toValue(args)] as const
}

export function getGroupsOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Groups.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Groups.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>>,
) {
  return ['Groups', '/Groups/Svg/:id', toValue(args)] as const
}

export function getGroupsSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Groups.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Groups.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups)[':id']['$get']>>,
) {
  return ['Groups', '/Groups/:id', toValue(args)] as const
}

export function getGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>>,
) {
  return ['Images', '/Images/ChildObjects/:id', toValue(args)] as const
}

export function getImagesChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Images.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Images.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.Details)[':id']['$get']>>,
) {
  return ['Images', '/Images/Details/:id', toValue(args)] as const
}

export function getImagesDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Images.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Images.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['Images', '/Images/OpenOfficeXml/:id', toValue(args)] as const
}

export function getImagesOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Images.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Images.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.Svg)[':id']['$get']>>,
) {
  return ['Images', '/Images/Svg/:id', toValue(args)] as const
}

export function getImagesSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Images.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getImagesSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Images.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images)[':id']['$get']>>,
) {
  return ['Images', '/Images/:id', toValue(args)] as const
}

export function getImagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Images[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Images)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getImagesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Images[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapeTreesChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>,
) {
  return ['ShapeTrees', '/ShapeTrees/ChildObjects/:id', toValue(args)] as const
}

export function getShapeTreesChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapeTreesChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ShapeTrees.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShapeTreesChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapeTreesChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ShapeTrees.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapeTreesDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>>,
) {
  return ['ShapeTrees', '/ShapeTrees/Details/:id', toValue(args)] as const
}

export function getShapeTreesDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapeTreesDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ShapeTrees.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapeTreesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShapeTreesDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapeTreesDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ShapeTrees.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapeTreesOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['ShapeTrees', '/ShapeTrees/OpenOfficeXml/:id', toValue(args)] as const
}

export function getShapeTreesOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapeTreesOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ShapeTrees.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShapeTreesOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapeTreesOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ShapeTrees.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>,
) {
  return ['ShapeTrees', '/ShapeTrees/Svg/:id', toValue(args)] as const
}

export function getShapeTreesSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapeTreesSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ShapeTrees.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapeTreesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShapeTreesSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapeTreesSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ShapeTrees.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapeTreesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>>,
) {
  return ['ShapeTrees', '/ShapeTrees/:id', toValue(args)] as const
}

export function getShapeTreesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapeTreesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ShapeTrees[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapeTreesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getShapeTreesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapeTreesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapeTreesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ShapeTrees[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapesChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>,
) {
  return ['Shapes', '/Shapes/ChildObjects/:id', toValue(args)] as const
}

export function getShapesChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapesChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shapes.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShapesChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapesChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shapes.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapesDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>>,
) {
  return ['Shapes', '/Shapes/Details/:id', toValue(args)] as const
}

export function getShapesDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapesDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shapes.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShapesDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapesDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shapes.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapesOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['Shapes', '/Shapes/OpenOfficeXml/:id', toValue(args)] as const
}

export function getShapesOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapesOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shapes.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShapesOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapesOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shapes.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>>,
) {
  return ['Shapes', '/Shapes/Svg/:id', toValue(args)] as const
}

export function getShapesSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapesSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shapes.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getShapesSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShapesSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapesSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shapes.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShapesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes)[':id']['$get']>>,
) {
  return ['Shapes', '/Shapes/:id', toValue(args)] as const
}

export function getShapesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShapesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shapes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShapesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shapes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getShapesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShapesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShapesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shapes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedColorTransformationAttributesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>
  >,
) {
  return ['Shared', '/Shared/ColorTransformationAttributes/:id', toValue(args)] as const
}

export function getSharedColorTransformationAttributesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedColorTransformationAttributesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.ColorTransformationAttributes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSharedColorTransformationAttributesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTransformationAttributesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedColorTransformationAttributesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.ColorTransformationAttributes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedColorTransformationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>
  >,
) {
  return ['Shared', '/Shared/ColorTransformations/:id', toValue(args)] as const
}

export function getSharedColorTransformationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedColorTransformationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.ColorTransformations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedColorTransformationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTransformationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedColorTransformationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.ColorTransformations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedColorTypesQueryKey() {
  return ['Shared', '/Shared/ColorTypes'] as const
}

export function getSharedColorTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSharedColorTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.ColorTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedColorTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>
            >
          >,
          ReturnType<typeof getSharedColorTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSharedColorTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.ColorTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedColorTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Shared', '/Shared/ColorTypes/TypeId/:type_id', toValue(args)] as const
}

export function getSharedColorTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedColorTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.ColorTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedColorTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedColorTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.ColorTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedColorTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/ColorTypes/:id', toValue(args)] as const
}

export function getSharedColorTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedColorTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.ColorTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedColorTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedColorTypesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedColorTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedColorTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.ColorTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedDashTypesQueryKey() {
  return ['Shared', '/Shared/DashTypes'] as const
}

export function getSharedDashTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSharedDashTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.DashTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSharedDashTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>
            >
          >,
          ReturnType<typeof getSharedDashTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedDashTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSharedDashTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.DashTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedDashTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Shared', '/Shared/DashTypes/TypeId/:type_id', toValue(args)] as const
}

export function getSharedDashTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedDashTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.DashTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedDashTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedDashTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedDashTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.DashTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedDashTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/DashTypes/:id', toValue(args)] as const
}

export function getSharedDashTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedDashTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.DashTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedDashTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedDashTypesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedDashTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedDashTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.DashTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedEffectAttributesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/EffectAttributes/:id', toValue(args)] as const
}

export function getSharedEffectAttributesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedEffectAttributesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.EffectAttributes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedEffectAttributesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectAttributesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedEffectAttributesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.EffectAttributes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedEffectTypesQueryKey() {
  return ['Shared', '/Shared/EffectTypes'] as const
}

export function getSharedEffectTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSharedEffectTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.EffectTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedEffectTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>
            >
          >,
          ReturnType<typeof getSharedEffectTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSharedEffectTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.EffectTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedEffectTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Shared', '/Shared/EffectTypes/TypeId/:type_id', toValue(args)] as const
}

export function getSharedEffectTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedEffectTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.EffectTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedEffectTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedEffectTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.EffectTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedEffectTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/EffectTypes/:id', toValue(args)] as const
}

export function getSharedEffectTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedEffectTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.EffectTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedEffectTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedEffectTypesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedEffectTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.EffectTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedEffectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/Effects/:id', toValue(args)] as const
}

export function getSharedEffectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedEffectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.Effects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedEffectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedEffectsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedEffectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedEffectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.Effects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedFillMapIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/FillMap/:id', toValue(args)] as const
}

export function getSharedFillMapIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedFillMapIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.FillMap[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedFillMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedFillMapIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillMapIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedFillMapIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.FillMap[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedFillTypesQueryKey() {
  return ['Shared', '/Shared/FillTypes'] as const
}

export function getSharedFillTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSharedFillTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.FillTypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSharedFillTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>
            >
          >,
          ReturnType<typeof getSharedFillTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSharedFillTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.FillTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedFillTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Shared', '/Shared/FillTypes/TypeId/:type_id', toValue(args)] as const
}

export function getSharedFillTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedFillTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.FillTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedFillTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedFillTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.FillTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedFillTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/FillTypes/:id', toValue(args)] as const
}

export function getSharedFillTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedFillTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.FillTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedFillTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedFillTypesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedFillTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedFillTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.FillTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedGradientFillsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/GradientFills/:id', toValue(args)] as const
}

export function getSharedGradientFillsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedGradientFillsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.GradientFills[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedGradientFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedGradientFillsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedGradientFillsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedGradientFillsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.GradientFills[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedGradientStopsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/GradientStops/:id', toValue(args)] as const
}

export function getSharedGradientStopsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedGradientStopsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.GradientStops[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedGradientStopsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedGradientStopsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedGradientStopsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedGradientStopsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.GradientStops[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedImageFillsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/ImageFills/:id', toValue(args)] as const
}

export function getSharedImageFillsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedImageFillsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.ImageFills[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedImageFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedImageFillsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedImageFillsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedImageFillsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.ImageFills[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLineEndSizesQueryKey() {
  return ['Shared', '/Shared/LineEndSizes'] as const
}

export function getSharedLineEndSizesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSharedLineEndSizesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.LineEndSizes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLineEndSizes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>
            >
          >,
          ReturnType<typeof getSharedLineEndSizesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndSizesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSharedLineEndSizesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.LineEndSizes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLineEndSizesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Shared', '/Shared/LineEndSizes/TypeId/:type_id', toValue(args)] as const
}

export function getSharedLineEndSizesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLineEndSizesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.LineEndSizes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedLineEndSizesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndSizesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLineEndSizesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.LineEndSizes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLineEndSizesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/LineEndSizes/:id', toValue(args)] as const
}

export function getSharedLineEndSizesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLineEndSizesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.LineEndSizes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLineEndSizesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedLineEndSizesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndSizesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLineEndSizesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.LineEndSizes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLineEndTypesQueryKey() {
  return ['Shared', '/Shared/LineEndTypes'] as const
}

export function getSharedLineEndTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSharedLineEndTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.LineEndTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLineEndTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>
            >
          >,
          ReturnType<typeof getSharedLineEndTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSharedLineEndTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.LineEndTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLineEndTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Shared', '/Shared/LineEndTypes/TypeId/:type_id', toValue(args)] as const
}

export function getSharedLineEndTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLineEndTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.LineEndTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedLineEndTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLineEndTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.LineEndTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLineEndTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/LineEndTypes/:id', toValue(args)] as const
}

export function getSharedLineEndTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLineEndTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.LineEndTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLineEndTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedLineEndTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLineEndTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLineEndTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.LineEndTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedLinesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/Lines/:id', toValue(args)] as const
}

export function getSharedLinesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedLinesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.Lines[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedLinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSharedLinesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedLinesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedLinesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.Lines[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedParagraphIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/Paragraph/:id', toValue(args)] as const
}

export function getSharedParagraphIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedParagraphIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.Paragraph[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedParagraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedParagraphIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedParagraphIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedParagraphIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.Paragraph[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedSolidFillsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/SolidFills/:id', toValue(args)] as const
}

export function getSharedSolidFillsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedSolidFillsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.SolidFills[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedSolidFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedSolidFillsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedSolidFillsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedSolidFillsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.SolidFills[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedTextIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Text)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/Text/:id', toValue(args)] as const
}

export function getSharedTextIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Text)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedTextIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.Text[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedTextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.Text)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSharedTextIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedTextIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedTextIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.Text[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSharedTextContainerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>>,
) {
  return ['Shared', '/Shared/TextContainer/:id', toValue(args)] as const
}

export function getSharedTextContainerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSharedTextContainerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Shared.TextContainer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedTextContainerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSharedTextContainerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedTextContainerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSharedTextContainerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Shared.TextContainer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/ChildObjects/:id', toValue(args)] as const
}

export function getSlidesChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesColorMapsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/ColorMaps/:id', toValue(args)] as const
}

export function getSlidesColorMapsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesColorMapsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.ColorMaps[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesColorMapsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesColorMapsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesColorMapsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesColorMapsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.ColorMaps[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Details)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/Details/:id', toValue(args)] as const
}

export function getSlidesDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGraphicTypesQueryKey() {
  return ['Slides', '/Slides/GraphicTypes'] as const
}

export function getSlidesGraphicTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSlidesGraphicTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.GraphicTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesGraphicTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>
            >
          >,
          ReturnType<typeof getSlidesGraphicTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSlidesGraphicTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.GraphicTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGraphicTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Slides', '/Slides/GraphicTypes/TypeId/:type_id', toValue(args)] as const
}

export function getSlidesGraphicTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesGraphicTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.GraphicTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesGraphicTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesGraphicTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.GraphicTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGraphicTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/GraphicTypes/:id', toValue(args)] as const
}

export function getSlidesGraphicTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesGraphicTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.GraphicTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesGraphicTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesGraphicTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesGraphicTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.GraphicTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGraphicsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/Graphics/:id', toValue(args)] as const
}

export function getSlidesGraphicsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesGraphicsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.Graphics[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesGraphicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesGraphicsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGraphicsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesGraphicsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.Graphics[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGroupElementTypesQueryKey() {
  return ['Slides', '/Slides/GroupElementTypes'] as const
}

export function getSlidesGroupElementTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSlidesGroupElementTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.GroupElementTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
            >
          >,
          ReturnType<typeof getSlidesGroupElementTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSlidesGroupElementTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.GroupElementTypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGroupElementTypesTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Slides', '/Slides/GroupElementTypes/TypeId/:type_id', toValue(args)] as const
}

export function getSlidesGroupElementTypesTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesGroupElementTypesTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.GroupElementTypes.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSlidesGroupElementTypesTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementTypesTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesGroupElementTypesTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.GroupElementTypes.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGroupElementTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/GroupElementTypes/:id', toValue(args)] as const
}

export function getSlidesGroupElementTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesGroupElementTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.GroupElementTypes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesGroupElementTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesGroupElementTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.GroupElementTypes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesGroupElementsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/GroupElements/:id', toValue(args)] as const
}

export function getSlidesGroupElementsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesGroupElementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.GroupElements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesGroupElementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesGroupElementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesGroupElementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesGroupElementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.GroupElements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/OpenOfficeXml/:id', toValue(args)] as const
}

export function getSlidesOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/SlideMasters/:id', toValue(args)] as const
}

export function getSlidesSlideMastersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesSlideMastersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.SlideMasters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesSlideMastersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSlidesSlideMastersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesSlideMastersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesSlideMastersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.SlideMasters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesSvgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/Svg/:id', toValue(args)] as const
}

export function getSlidesSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSlidesSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSlidesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides)[':id']['$get']>>,
) {
  return ['Slides', '/Slides/:id', toValue(args)] as const
}

export function getSlidesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSlidesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Slides[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Slides)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSlidesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSlidesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSlidesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Slides[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmartArtsChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>,
) {
  return ['SmartArts', '/SmartArts/ChildObjects/:id', toValue(args)] as const
}

export function getSmartArtsChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmartArtsChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SmartArts.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmartArtsChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmartArtsChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.SmartArts.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmartArtsDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>>,
) {
  return ['SmartArts', '/SmartArts/Details/:id', toValue(args)] as const
}

export function getSmartArtsDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmartArtsDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SmartArts.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmartArtsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmartArtsDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmartArtsDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.SmartArts.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmartArtsOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['SmartArts', '/SmartArts/OpenOfficeXml/:id', toValue(args)] as const
}

export function getSmartArtsOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmartArtsOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SmartArts.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmartArtsOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmartArtsOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.SmartArts.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>>,
) {
  return ['SmartArts', '/SmartArts/Svg/:id', toValue(args)] as const
}

export function getSmartArtsSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmartArtsSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SmartArts.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmartArtsSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmartArtsSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmartArtsSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.SmartArts.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmartArtsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts)[':id']['$get']>>,
) {
  return ['SmartArts', '/SmartArts/:id', toValue(args)] as const
}

export function getSmartArtsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmartArtsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.SmartArts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmartArtsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.SmartArts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSmartArtsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmartArtsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmartArtsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.SmartArts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesBordersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/Borders/:id', toValue(args)] as const
}

export function getTablesBordersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesBordersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.Borders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesBordersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTablesBordersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesBordersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesBordersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.Borders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesCellsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/Cells/:id', toValue(args)] as const
}

export function getTablesCellsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesCellsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.Cells[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesCellsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTablesCellsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesCellsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesCellsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.Cells[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/ChildObjects/:id', toValue(args)] as const
}

export function getTablesChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTablesChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesColumnsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/Columns/:id', toValue(args)] as const
}

export function getTablesColumnsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesColumnsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.Columns[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTablesColumnsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesColumnsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesColumnsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.Columns[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Details)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/Details/:id', toValue(args)] as const
}

export function getTablesDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTablesDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/OpenOfficeXml/:id', toValue(args)] as const
}

export function getTablesOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTablesOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/Rows/:id', toValue(args)] as const
}

export function getTablesRowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesRowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.Rows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTablesRowsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesRowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesRowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.Rows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesSvgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/Svg/:id', toValue(args)] as const
}

export function getTablesSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTablesSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTablesTableUpdateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/TableUpdate/:id', toValue(args)] as const
}

export function getTablesTableUpdateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesTableUpdateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables.TableUpdate[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesTableUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTablesTableUpdateIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableUpdateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesTableUpdateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables.TableUpdate[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTablesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables)[':id']['$get']>>,
) {
  return ['Tables', '/Tables/:id', toValue(args)] as const
}

export function getTablesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTablesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Tables[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTablesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Tables)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTablesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTablesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTablesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Tables[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesBackgroundFillsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/BackgroundFills/:id', toValue(args)] as const
}

export function getThemesBackgroundFillsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesBackgroundFillsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.BackgroundFills[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesBackgroundFillsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesBackgroundFillsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesBackgroundFillsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.BackgroundFills[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesChildObjectsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/ChildObjects/:id', toValue(args)] as const
}

export function getThemesChildObjectsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesChildObjectsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.ChildObjects[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesChildObjectsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesChildObjectsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesChildObjectsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.ChildObjects[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesColorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/Colors/:id', toValue(args)] as const
}

export function getThemesColorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesColorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Colors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesColorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesColorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesColorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Colors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesCustomColorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/CustomColors/:id', toValue(args)] as const
}

export function getThemesCustomColorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesCustomColorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.CustomColors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesCustomColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesCustomColorsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesCustomColorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesCustomColorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.CustomColors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesDetailsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Details)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/Details/:id', toValue(args)] as const
}

export function getThemesDetailsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Details)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Details)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesDetailsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesEffectMapIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/EffectMap/:id', toValue(args)] as const
}

export function getThemesEffectMapIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesEffectMapIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.EffectMap[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesEffectMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesEffectMapIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesEffectMapIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesEffectMapIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.EffectMap[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesFillsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/Fills/:id', toValue(args)] as const
}

export function getThemesFillsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesFillsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Fills[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getThemesFillsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesFillsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesFillsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Fills[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesFontsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/Fonts/:id', toValue(args)] as const
}

export function getThemesFontsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesFontsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Fonts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesFontsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getThemesFontsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesFontsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesFontsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Fonts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesIntensityQueryKey() {
  return ['Themes', '/Themes/Intensity'] as const
}

export function getThemesIntensityQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getThemesIntensityQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Intensity.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useThemesIntensity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>
            >
          >,
          ReturnType<typeof getThemesIntensityQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIntensityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getThemesIntensityQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Intensity.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesIntensityTypeIdTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>
  >,
) {
  return ['Themes', '/Themes/Intensity/TypeId/:type_id', toValue(args)] as const
}

export function getThemesIntensityTypeIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesIntensityTypeIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Intensity.TypeId[':type_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesIntensityTypeIdTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIntensityTypeIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesIntensityTypeIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Intensity.TypeId[':type_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesIntensityIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/Intensity/:id', toValue(args)] as const
}

export function getThemesIntensityIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesIntensityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Intensity[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesIntensityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesIntensityIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIntensityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesIntensityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Intensity[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesLineMapIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/LineMap/:id', toValue(args)] as const
}

export function getThemesLineMapIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesLineMapIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.LineMap[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesLineMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesLineMapIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesLineMapIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesLineMapIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.LineMap[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesOpenOfficeXmlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/OpenOfficeXml/:id', toValue(args)] as const
}

export function getThemesOpenOfficeXmlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesOpenOfficeXmlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.OpenOfficeXml[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThemesOpenOfficeXmlIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesOpenOfficeXmlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesOpenOfficeXmlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.OpenOfficeXml[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/Svg/:id', toValue(args)] as const
}

export function getThemesSvgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesSvgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes.Svg[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getThemesSvgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThemesSvgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesSvgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes.Svg[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getThemesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes)[':id']['$get']>>,
) {
  return ['Themes', '/Themes/:id', toValue(args)] as const
}

export function getThemesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThemesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Themes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThemesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Themes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getThemesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getThemesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThemesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Themes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
