import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectChartsAxesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Axes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.Axes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsAxesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsAxisDataTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.AxisDataTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsAxisDataTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsAxisDataTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.AxisDataTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsAxisDataTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsAxisDataTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.AxisDataTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsAxisDataTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsChartDataId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartData)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.ChartData)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsChartDataIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsChartUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChartUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.ChartUpdate)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsChartUpdateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutChartsChartUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChartsChartUpdateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectChartsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsColumnCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.ColumnCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.ColumnCollections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsColumnCollectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.Columns)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsColumnsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsDataPointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.DataPoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.DataPoints)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsDataPointsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutChartsOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChartsOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectChartsPlotType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.PlotType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsPlotTypeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsPlotTypeTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.PlotType.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsPlotTypeTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsPlotTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.PlotType)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.PlotType)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsPlotTypeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsRowCol<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowCol.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsRowColQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsRowColTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.RowCol.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsRowColTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsRowColId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.RowCol)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.RowCol)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsRowColIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsRowCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowCollections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.RowCollections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsRowCollectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsRowNameFormatTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Charts.RowNameFormatTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsRowNameFormatTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsRowNameFormatTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Charts.RowNameFormatTypes.TypeId)[':type_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsRowNameFormatTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsRowNameFormatTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.RowNameFormatTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChartsRowNameFormatTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectChartsRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.Rows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsRowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectChartsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Charts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Charts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectConnectionShapesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ConnectionShapes.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionShapesChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectConnectionShapesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.Details)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ConnectionShapes.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionShapesDetailsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectConnectionShapesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ConnectionShapes.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionShapesOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutConnectionShapesOpenOfficeXmlId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConnectionShapesOpenOfficeXmlIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectConnectionShapesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ConnectionShapes.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionShapesSvgIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectConnectionShapesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ConnectionShapes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ConnectionShapes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionShapesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDocumentsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Documents.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDocumentsChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDocumentsCloneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDocumentsCloneIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDocumentsDocumentType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Documents.DocumentType.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocumentsDocumentTypeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectDocumentsDocumentTypeTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Documents.DocumentType.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDocumentsDocumentTypeTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDocumentsDocumentTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Documents.DocumentType)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Documents.DocumentType)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDocumentsDocumentTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDocumentsDownloadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Documents.Download)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Documents.Download)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocumentsDownloadIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDocumentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Documents)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Documents)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDocumentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectGroupsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Groups.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGroupsChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGroupsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Groups.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGroupsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Groups.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGroupsOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutGroupsOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGroupsOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectGroupsSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Groups.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Groups)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGroupsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectImagesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getImagesChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectImagesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutImagesGetImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutImagesGetImageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectImagesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getImagesOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutImagesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutImagesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectImagesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Images)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShapeTreesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ShapeTrees.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShapeTreesChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectShapeTreesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ShapeTrees.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShapeTreesDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShapeTreesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ShapeTrees.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShapeTreesOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutShapeTreesOpenOfficeXmlId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutShapeTreesOpenOfficeXmlIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectShapeTreesSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ShapeTrees.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShapeTreesSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShapeTreesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ShapeTrees)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ShapeTrees)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShapeTreesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShapesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shapes.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShapesChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectShapesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shapes.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShapesDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShapesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shapes.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShapesOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutShapesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutShapesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectShapesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shapes.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShapesSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectShapesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Shapes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shapes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShapesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedColorTransformationAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.ColorTransformationAttributes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedColorTransformationAttributesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedColorTransformationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTransformations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.ColorTransformations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedColorTransformationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedColorTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.ColorTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedColorTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedColorTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.ColorTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedColorTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedColorTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ColorTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.ColorTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedColorTypesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedDashTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.DashTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedDashTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedDashTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.DashTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedDashTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedDashTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.DashTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.DashTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedDashTypesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedEffectAttributesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectAttributes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.EffectAttributes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedEffectAttributesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedEffectTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.EffectTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedEffectTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedEffectTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.EffectTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedEffectTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedEffectTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.EffectTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.EffectTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedEffectTypesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedEffectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Effects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.Effects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedEffectsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedFillMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.FillMap)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedFillMapIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedFillTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.FillTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedFillTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedFillTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.FillTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedFillTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedFillTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.FillTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.FillTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedFillTypesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedGradientFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.GradientFills)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedGradientFillsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedGradientStopsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.GradientStops)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.GradientStops)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedGradientStopsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedImageFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.ImageFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.ImageFills)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedImageFillsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedLineEndSizes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndSizes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedLineEndSizesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedLineEndSizesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.LineEndSizes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedLineEndSizesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedLineEndSizesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndSizes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.LineEndSizes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedLineEndSizesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedLineEndTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Shared.LineEndTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedLineEndTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedLineEndTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.LineEndTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedLineEndTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedLineEndTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.LineEndTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.LineEndTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedLineEndTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSharedLinesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Lines)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.Lines)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedLinesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedParagraphId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Paragraph)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.Paragraph)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedParagraphIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedSolidFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.SolidFills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.SolidFills)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedSolidFillsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedTextId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.Text)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.Text)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedTextIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSharedTextContainerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Shared.TextContainer)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Shared.TextContainer)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSharedTextContainerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesColorMapsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.ColorMaps)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.ColorMaps)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlidesColorMapsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSlidesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlidesDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSlidesGraphicTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GraphicTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlidesGraphicTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSlidesGraphicTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.GraphicTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesGraphicTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesGraphicTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GraphicTypes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.GraphicTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesGraphicTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesGraphicsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Graphics)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.Graphics)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlidesGraphicsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSlidesGroupElementTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Slides.GroupElementTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlidesGroupElementTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSlidesGroupElementTypesTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.GroupElementTypes.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesGroupElementTypesTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesGroupElementTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.GroupElementTypes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesGroupElementTypesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesGroupElementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.GroupElements)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.GroupElements)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesGroupElementsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSlidesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSlidesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSlidesSlideMastersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.SlideMasters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.SlideMasters)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSlidesSlideMastersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSlidesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlidesSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSlidesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Slides)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Slides)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSlidesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSmartArtsChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.SmartArts.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmartArtsChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectSmartArtsDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.SmartArts.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmartArtsDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSmartArtsOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.SmartArts.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSmartArtsOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSmartArtsOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSmartArtsOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSmartArtsSvgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts.Svg)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.SmartArts.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmartArtsSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSmartArtsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.SmartArts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.SmartArts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmartArtsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTablesBordersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Borders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.Borders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesBordersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTablesCellsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Cells)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.Cells)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesCellsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTablesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTablesChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTablesColumnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Columns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.Columns)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesColumnsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTablesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTablesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTablesOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutTablesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTablesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTablesRowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Rows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.Rows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesRowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTablesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTablesTableUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Tables.TableUpdate)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables.TableUpdate)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesTableUpdateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTablesTableUpdateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTablesTableUpdateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTablesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Tables)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Tables)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTablesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesBackgroundFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.BackgroundFills)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.BackgroundFills)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThemesBackgroundFillsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectThemesChildObjectsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.ChildObjects)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.ChildObjects)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThemesChildObjectsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectThemesColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Colors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.Colors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesColorsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesCustomColorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.CustomColors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.CustomColors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThemesCustomColorsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectThemesDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Details)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.Details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesDetailsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesEffectMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.EffectMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.EffectMap)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesEffectMapIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesFillsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fills)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.Fills)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesFillsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesFontsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Fonts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.Fonts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesFontsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesIntensity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Themes.Intensity.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesIntensityQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesIntensityTypeIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.Intensity.TypeId)[':type_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThemesIntensityTypeIdTypeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectThemesIntensityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Intensity)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.Intensity)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesIntensityIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesLineMapId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.LineMap)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.LineMap)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesLineMapIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesOpenOfficeXmlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.OpenOfficeXml)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getThemesOpenOfficeXmlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutThemesOpenOfficeXmlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThemesOpenOfficeXmlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectThemesSvgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes.Svg)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes.Svg)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesSvgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectThemesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.Themes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Themes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThemesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
