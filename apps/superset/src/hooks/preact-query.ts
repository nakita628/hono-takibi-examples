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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1AdvancedDataTypeConvertQueryKey(
  args: InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>,
) {
  return ['api', '/api/v1/advanced_data_type/convert', args] as const
}

export function getApiV1AdvancedDataTypeConvertQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdvancedDataTypeConvertQueryKey>
  >({
    queryKey: getApiV1AdvancedDataTypeConvertQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.advanced_data_type.convert.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AdvancedDataTypeConvert<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdvancedDataTypeConvertQueryKey>
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
      ...getApiV1AdvancedDataTypeConvertQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AdvancedDataTypeConvert<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdvancedDataTypeConvertQueryKey>
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
      ...getApiV1AdvancedDataTypeConvertQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AdvancedDataTypeTypesQueryKey() {
  return ['api', '/api/v1/advanced_data_type/types'] as const
}

export function getApiV1AdvancedDataTypeTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdvancedDataTypeTypesQueryKey>
  >({
    queryKey: getApiV1AdvancedDataTypeTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.advanced_data_type.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AdvancedDataTypeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdvancedDataTypeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AdvancedDataTypeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AdvancedDataTypeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdvancedDataTypeTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AdvancedDataTypeTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AnnotationLayerIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.annotation_layer.index.$get>,
) {
  return ['api', '/api/v1/annotation_layer/', args] as const
}

export function getApiV1AnnotationLayerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.annotation_layer.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerIndexQueryKey>
  >({
    queryKey: getApiV1AnnotationLayerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.annotation_layer.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AnnotationLayerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.annotation_layer.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerIndexQueryKey>
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
      ...getApiV1AnnotationLayerIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AnnotationLayerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.annotation_layer.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerIndexQueryKey>
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
      ...getApiV1AnnotationLayerIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AnnotationLayerIndexMutationKey() {
  return ['api', '/api/v1/annotation_layer/', 'POST'] as const
}

export function getPostApiV1AnnotationLayerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.annotation_layer.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AnnotationLayerIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.annotation_layer.index.$post>) {
      return parseResponse(client.api.v1.annotation_layer.index.$post(args, options))
    },
  })
}

export function usePostApiV1AnnotationLayerIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.annotation_layer.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AnnotationLayerIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1AnnotationLayerIndexMutationKey() {
  return ['api', '/api/v1/annotation_layer/', 'DELETE'] as const
}

export function getDeleteApiV1AnnotationLayerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.annotation_layer.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AnnotationLayerIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.annotation_layer.index.$delete>) {
      return parseResponse(client.api.v1.annotation_layer.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1AnnotationLayerIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.annotation_layer.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AnnotationLayerIndexMutationOptions<
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

export function getApiV1AnnotationLayerInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.annotation_layer._info.$get>,
) {
  return ['api', '/api/v1/annotation_layer/_info', args] as const
}

export function getApiV1AnnotationLayerInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.annotation_layer._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerInfoQueryKey>
  >({
    queryKey: getApiV1AnnotationLayerInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.annotation_layer._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AnnotationLayerInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.annotation_layer._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerInfoQueryKey>
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
      ...getApiV1AnnotationLayerInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AnnotationLayerInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.annotation_layer._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerInfoQueryKey>
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
      ...getApiV1AnnotationLayerInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AnnotationLayerRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/annotation_layer/related/:column_name', args] as const
}

export function getApiV1AnnotationLayerRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1AnnotationLayerRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.annotation_layer.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AnnotationLayerRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerRelatedColumnNameQueryKey>
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
      ...getApiV1AnnotationLayerRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AnnotationLayerRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerRelatedColumnNameQueryKey>
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
      ...getApiV1AnnotationLayerRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AnnotationLayerPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>,
) {
  return ['api', '/api/v1/annotation_layer/:pk', args] as const
}

export function getApiV1AnnotationLayerPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerPkQueryKey>
  >({
    queryKey: getApiV1AnnotationLayerPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AnnotationLayerPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerPkQueryKey>
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
      ...getApiV1AnnotationLayerPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AnnotationLayerPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerPkQueryKey>
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
      ...getApiV1AnnotationLayerPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1AnnotationLayerPkMutationKey() {
  return ['api', '/api/v1/annotation_layer/:pk', 'PUT'] as const
}

export function getPutApiV1AnnotationLayerPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AnnotationLayerPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$put']>,
    ) {
      return parseResponse(client.api.v1.annotation_layer[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1AnnotationLayerPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AnnotationLayerPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1AnnotationLayerPkMutationKey() {
  return ['api', '/api/v1/annotation_layer/:pk', 'DELETE'] as const
}

export function getDeleteApiV1AnnotationLayerPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AnnotationLayerPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.annotation_layer[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1AnnotationLayerPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AnnotationLayerPkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AnnotationLayerPkAnnotationIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
  >,
) {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/', args] as const
}

export function getApiV1AnnotationLayerPkAnnotationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerPkAnnotationIndexQueryKey>
  >({
    queryKey: getApiV1AnnotationLayerPkAnnotationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AnnotationLayerPkAnnotationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerPkAnnotationIndexQueryKey>
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
      ...getApiV1AnnotationLayerPkAnnotationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AnnotationLayerPkAnnotationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerPkAnnotationIndexQueryKey>
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
      ...getApiV1AnnotationLayerPkAnnotationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AnnotationLayerPkAnnotationIndexMutationKey() {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/', 'POST'] as const
}

export function getPostApiV1AnnotationLayerPkAnnotationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AnnotationLayerPkAnnotationIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1AnnotationLayerPkAnnotationIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AnnotationLayerPkAnnotationIndexMutationOptions<
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

export function getDeleteApiV1AnnotationLayerPkAnnotationIndexMutationKey() {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/', 'DELETE'] as const
}

export function getDeleteApiV1AnnotationLayerPkAnnotationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AnnotationLayerPkAnnotationIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation.index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AnnotationLayerPkAnnotationIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AnnotationLayerPkAnnotationIndexMutationOptions<
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

export function getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
) {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/:annotation_id', args] as const
}

export function getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey>
  >({
    queryKey: getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AnnotationLayerPkAnnotationAnnotationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey>
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
      ...getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AnnotationLayerPkAnnotationAnnotationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey>
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
      ...getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1AnnotationLayerPkAnnotationAnnotationIdMutationKey() {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/:annotation_id', 'PUT'] as const
}

export function getPutApiV1AnnotationLayerPkAnnotationAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AnnotationLayerPkAnnotationAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1AnnotationLayerPkAnnotationAnnotationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AnnotationLayerPkAnnotationAnnotationIdMutationOptions<
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

export function getDeleteApiV1AnnotationLayerPkAnnotationAnnotationIdMutationKey() {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/:annotation_id', 'DELETE'] as const
}

export function getDeleteApiV1AnnotationLayerPkAnnotationAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AnnotationLayerPkAnnotationAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AnnotationLayerPkAnnotationAnnotationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AnnotationLayerPkAnnotationAnnotationIdMutationOptions<
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

export function getApiV1AssetsExportIndexQueryKey() {
  return ['api', '/api/v1/assets/export/'] as const
}

export function getApiV1AssetsExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AssetsExportIndexQueryKey>
  >({
    queryKey: getApiV1AssetsExportIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.assets.export.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AssetsExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AssetsExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AssetsExportIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AssetsExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AssetsExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AssetsExportIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AssetsImportIndexMutationKey() {
  return ['api', '/api/v1/assets/import/', 'POST'] as const
}

export function getPostApiV1AssetsImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.assets.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AssetsImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.assets.import.index.$post>) {
      return parseResponse(client.api.v1.assets.import.index.$post(args, options))
    },
  })
}

export function usePostApiV1AssetsImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.assets.import.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.assets.import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AssetsImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AvailableDomainsIndexQueryKey() {
  return ['api', '/api/v1/available_domains/'] as const
}

export function getApiV1AvailableDomainsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AvailableDomainsIndexQueryKey>
  >({
    queryKey: getApiV1AvailableDomainsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.available_domains.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AvailableDomainsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AvailableDomainsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AvailableDomainsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AvailableDomainsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AvailableDomainsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AvailableDomainsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1CachekeyInvalidateMutationKey() {
  return ['api', '/api/v1/cachekey/invalidate', 'POST'] as const
}

export function getPostApiV1CachekeyInvalidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.cachekey.invalidate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.cachekey.invalidate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CachekeyInvalidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.cachekey.invalidate.$post>) {
      return parseResponse(client.api.v1.cachekey.invalidate.$post(args, options))
    },
  })
}

export function usePostApiV1CachekeyInvalidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.cachekey.invalidate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.cachekey.invalidate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CachekeyInvalidateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChartIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.chart.index.$get>,
) {
  return ['api', '/api/v1/chart/', args] as const
}

export function getApiV1ChartIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.chart.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartIndexQueryKey>
  >({
    queryKey: getApiV1ChartIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ChartIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ChartIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ChartIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ChartIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1ChartIndexMutationKey() {
  return ['api', '/api/v1/chart/', 'POST'] as const
}

export function getPostApiV1ChartIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.chart.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.chart.index.$post>) {
      return parseResponse(client.api.v1.chart.index.$post(args, options))
    },
  })
}

export function usePostApiV1ChartIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.chart.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ChartIndexMutationKey() {
  return ['api', '/api/v1/chart/', 'DELETE'] as const
}

export function getDeleteApiV1ChartIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.chart.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ChartIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.chart.index.$delete>) {
      return parseResponse(client.api.v1.chart.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ChartIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.chart.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ChartIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChartInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.chart._info.$get>,
) {
  return ['api', '/api/v1/chart/_info', args] as const
}

export function getApiV1ChartInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.chart._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartInfoQueryKey>
  >({
    queryKey: getApiV1ChartInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ChartInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ChartInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ChartInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ChartInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1ChartDataMutationKey() {
  return ['api', '/api/v1/chart/data', 'POST'] as const
}

export function getPostApiV1ChartDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.data.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.chart.data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.chart.data.$post>) {
      return parseResponse(client.api.v1.chart.data.$post(args, options))
    },
  })
}

export function usePostApiV1ChartData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.data.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.chart.data.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChartDataStopMutationKey() {
  return ['api', '/api/v1/chart/data/stop', 'POST'] as const
}

export function getPostApiV1ChartDataStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.data.stop.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.chart.data.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartDataStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.chart.data.stop.$post>) {
      return parseResponse(client.api.v1.chart.data.stop.$post(args, options))
    },
  })
}

export function usePostApiV1ChartDataStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.data.stop.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.chart.data.stop.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartDataStopMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChartExportIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.chart.export.index.$get>,
) {
  return ['api', '/api/v1/chart/export/', args] as const
}

export function getApiV1ChartExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartExportIndexQueryKey>
  >({
    queryKey: getApiV1ChartExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartExportIndexQueryKey>
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
      ...getApiV1ChartExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartExportIndexQueryKey>
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
      ...getApiV1ChartExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ChartFavoriteStatusIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>,
) {
  return ['api', '/api/v1/chart/favorite_status/', args] as const
}

export function getApiV1ChartFavoriteStatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartFavoriteStatusIndexQueryKey>
  >({
    queryKey: getApiV1ChartFavoriteStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart.favorite_status.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartFavoriteStatusIndexQueryKey>
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
      ...getApiV1ChartFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartFavoriteStatusIndexQueryKey>
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
      ...getApiV1ChartFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1ChartImportIndexMutationKey() {
  return ['api', '/api/v1/chart/import/', 'POST'] as const
}

export function getPostApiV1ChartImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.chart.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.chart.import.index.$post>) {
      return parseResponse(client.api.v1.chart.import.index.$post(args, options))
    },
  })
}

export function usePostApiV1ChartImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.import.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.chart.import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChartRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/chart/related/:column_name', args] as const
}

export function getApiV1ChartRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1ChartRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartRelatedColumnNameQueryKey>
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
      ...getApiV1ChartRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartRelatedColumnNameQueryKey>
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
      ...getApiV1ChartRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1ChartWarmUpCacheMutationKey() {
  return ['api', '/api/v1/chart/warm_up_cache', 'PUT'] as const
}

export function getPutApiV1ChartWarmUpCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.warm_up_cache.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.chart.warm_up_cache.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ChartWarmUpCacheMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.chart.warm_up_cache.$put>) {
      return parseResponse(client.api.v1.chart.warm_up_cache.$put(args, options))
    },
  })
}

export function usePutApiV1ChartWarmUpCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.warm_up_cache.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.chart.warm_up_cache.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ChartWarmUpCacheMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChartIdOrUuidQueryKey(
  args: InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>,
) {
  return ['api', '/api/v1/chart/:id_or_uuid', args] as const
}

export function getApiV1ChartIdOrUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartIdOrUuidQueryKey>
  >({
    queryKey: getApiV1ChartIdOrUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':id_or_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartIdOrUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartIdOrUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ChartIdOrUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ChartIdOrUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartIdOrUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ChartIdOrUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1ChartPkMutationKey() {
  return ['api', '/api/v1/chart/:pk', 'PUT'] as const
}

export function getPutApiV1ChartPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.chart)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ChartPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.chart)[':pk']['$put']>) {
      return parseResponse(client.api.v1.chart[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1ChartPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.chart)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ChartPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1ChartPkMutationKey() {
  return ['api', '/api/v1/chart/:pk', 'DELETE'] as const
}

export function getDeleteApiV1ChartPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.chart)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ChartPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.chart)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.chart[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ChartPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.chart)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ChartPkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ChartPkCacheScreenshotIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>,
) {
  return ['api', '/api/v1/chart/:pk/cache_screenshot/', args] as const
}

export function getApiV1ChartPkCacheScreenshotIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkCacheScreenshotIndexQueryKey>
  >({
    queryKey: getApiV1ChartPkCacheScreenshotIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':pk'].cache_screenshot.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartPkCacheScreenshotIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkCacheScreenshotIndexQueryKey>
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
      ...getApiV1ChartPkCacheScreenshotIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartPkCacheScreenshotIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkCacheScreenshotIndexQueryKey>
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
      ...getApiV1ChartPkCacheScreenshotIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ChartPkDataIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>,
) {
  return ['api', '/api/v1/chart/:pk/data/', args] as const
}

export function getApiV1ChartPkDataIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkDataIndexQueryKey>
  >({
    queryKey: getApiV1ChartPkDataIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':pk'].data.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartPkDataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkDataIndexQueryKey>
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
      ...getApiV1ChartPkDataIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartPkDataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkDataIndexQueryKey>
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
      ...getApiV1ChartPkDataIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ChartPkDeckLayersIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>,
) {
  return ['api', '/api/v1/chart/:pk/deck_layers/', args] as const
}

export function getApiV1ChartPkDeckLayersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkDeckLayersIndexQueryKey>
  >({
    queryKey: getApiV1ChartPkDeckLayersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':pk'].deck_layers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartPkDeckLayersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkDeckLayersIndexQueryKey>
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
      ...getApiV1ChartPkDeckLayersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartPkDeckLayersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkDeckLayersIndexQueryKey>
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
      ...getApiV1ChartPkDeckLayersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1ChartPkFavoritesIndexMutationKey() {
  return ['api', '/api/v1/chart/:pk/favorites/', 'POST'] as const
}

export function getPostApiV1ChartPkFavoritesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartPkFavoritesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$post']>,
    ) {
      return parseResponse(client.api.v1.chart[':pk'].favorites.index.$post(args, options))
    },
  })
}

export function usePostApiV1ChartPkFavoritesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartPkFavoritesIndexMutationOptions<
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

export function getDeleteApiV1ChartPkFavoritesIndexMutationKey() {
  return ['api', '/api/v1/chart/:pk/favorites/', 'DELETE'] as const
}

export function getDeleteApiV1ChartPkFavoritesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ChartPkFavoritesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v1.chart[':pk'].favorites.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ChartPkFavoritesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.chart)[':pk']['favorites']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ChartPkFavoritesIndexMutationOptions<
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

export function getApiV1ChartPkScreenshotDigestIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
  >,
) {
  return ['api', '/api/v1/chart/:pk/screenshot/:digest/', args] as const
}

export function getApiV1ChartPkScreenshotDigestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkScreenshotDigestIndexQueryKey>
  >({
    queryKey: getApiV1ChartPkScreenshotDigestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':pk'].screenshot[':digest'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartPkScreenshotDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkScreenshotDigestIndexQueryKey>
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
      ...getApiV1ChartPkScreenshotDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartPkScreenshotDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkScreenshotDigestIndexQueryKey>
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
      ...getApiV1ChartPkScreenshotDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ChartPkThumbnailDigestIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
) {
  return ['api', '/api/v1/chart/:pk/thumbnail/:digest/', args] as const
}

export function getApiV1ChartPkThumbnailDigestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkThumbnailDigestIndexQueryKey>
  >({
    queryKey: getApiV1ChartPkThumbnailDigestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':pk'].thumbnail[':digest'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartPkThumbnailDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkThumbnailDigestIndexQueryKey>
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
      ...getApiV1ChartPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartPkThumbnailDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartPkThumbnailDigestIndexQueryKey>
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
      ...getApiV1ChartPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ChartUuidStrActivityIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>,
) {
  return ['api', '/api/v1/chart/:uuid_str/activity/', args] as const
}

export function getApiV1ChartUuidStrActivityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartUuidStrActivityIndexQueryKey>
  >({
    queryKey: getApiV1ChartUuidStrActivityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':uuid_str'].activity.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartUuidStrActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartUuidStrActivityIndexQueryKey>
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
      ...getApiV1ChartUuidStrActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartUuidStrActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartUuidStrActivityIndexQueryKey>
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
      ...getApiV1ChartUuidStrActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ChartUuidStrVersionsIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>,
) {
  return ['api', '/api/v1/chart/:uuid_str/versions/', args] as const
}

export function getApiV1ChartUuidStrVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartUuidStrVersionsIndexQueryKey>
  >({
    queryKey: getApiV1ChartUuidStrVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':uuid_str'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartUuidStrVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartUuidStrVersionsIndexQueryKey>
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
      ...getApiV1ChartUuidStrVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartUuidStrVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartUuidStrVersionsIndexQueryKey>
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
      ...getApiV1ChartUuidStrVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
) {
  return ['api', '/api/v1/chart/:uuid_str/versions/:version_uuid_str/', args] as const
}

export function getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey>
  >({
    queryKey: getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart[':uuid_str'].versions[':version_uuid_str'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ChartUuidStrVersionsVersionUuidStrIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey>
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
      ...getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ChartUuidStrVersionsVersionUuidStrIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey>
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
      ...getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1ChartUuidStrVersionsVersionUuidStrRestoreMutationKey() {
  return ['api', '/api/v1/chart/:uuid_str/versions/:version_uuid_str/restore', 'POST'] as const
}

export function getPostApiV1ChartUuidStrVersionsVersionUuidStrRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartUuidStrVersionsVersionUuidStrRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.chart[':uuid_str'].versions[':version_uuid_str'].restore.$post(args, options),
      )
    },
  })
}

export function usePostApiV1ChartUuidStrVersionsVersionUuidStrRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartUuidStrVersionsVersionUuidStrRestoreMutationOptions<
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

export function getPostApiV1ChartUuidPurgeMutationKey() {
  return ['api', '/api/v1/chart/:uuid/purge', 'POST'] as const
}

export function getPostApiV1ChartUuidPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid']['purge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.chart)[':uuid']['purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartUuidPurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.chart)[':uuid']['purge']['$post']>,
    ) {
      return parseResponse(client.api.v1.chart[':uuid'].purge.$post(args, options))
    },
  })
}

export function usePostApiV1ChartUuidPurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid']['purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.chart)[':uuid']['purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartUuidPurgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ChartUuidRestoreMutationKey() {
  return ['api', '/api/v1/chart/:uuid/restore', 'POST'] as const
}

export function getPostApiV1ChartUuidRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.chart)[':uuid']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ChartUuidRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.chart)[':uuid']['restore']['$post']>,
    ) {
      return parseResponse(client.api.v1.chart[':uuid'].restore.$post(args, options))
    },
  })
}

export function usePostApiV1ChartUuidRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.chart)[':uuid']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.chart)[':uuid']['restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ChartUuidRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CssTemplateIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.css_template.index.$get>,
) {
  return ['api', '/api/v1/css_template/', args] as const
}

export function getApiV1CssTemplateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.css_template.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplateIndexQueryKey>
  >({
    queryKey: getApiV1CssTemplateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.css_template.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1CssTemplateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.css_template.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplateIndexQueryKey>
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
      ...getApiV1CssTemplateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1CssTemplateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.css_template.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplateIndexQueryKey>
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
      ...getApiV1CssTemplateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1CssTemplateIndexMutationKey() {
  return ['api', '/api/v1/css_template/', 'POST'] as const
}

export function getPostApiV1CssTemplateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.css_template.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1CssTemplateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.css_template.index.$post>) {
      return parseResponse(client.api.v1.css_template.index.$post(args, options))
    },
  })
}

export function usePostApiV1CssTemplateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.css_template.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1CssTemplateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1CssTemplateIndexMutationKey() {
  return ['api', '/api/v1/css_template/', 'DELETE'] as const
}

export function getDeleteApiV1CssTemplateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.css_template.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CssTemplateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.css_template.index.$delete>) {
      return parseResponse(client.api.v1.css_template.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1CssTemplateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.css_template.index.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.css_template.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1CssTemplateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CssTemplateInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.css_template._info.$get>,
) {
  return ['api', '/api/v1/css_template/_info', args] as const
}

export function getApiV1CssTemplateInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.css_template._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplateInfoQueryKey>
  >({
    queryKey: getApiV1CssTemplateInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.css_template._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1CssTemplateInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.css_template._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplateInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1CssTemplateInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1CssTemplateInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.css_template._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplateInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1CssTemplateInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1CssTemplateRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/css_template/related/:column_name', args] as const
}

export function getApiV1CssTemplateRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplateRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1CssTemplateRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.css_template.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1CssTemplateRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplateRelatedColumnNameQueryKey>
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
      ...getApiV1CssTemplateRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1CssTemplateRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplateRelatedColumnNameQueryKey>
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
      ...getApiV1CssTemplateRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1CssTemplatePkQueryKey(
  args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>,
) {
  return ['api', '/api/v1/css_template/:pk', args] as const
}

export function getApiV1CssTemplatePkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplatePkQueryKey>
  >({
    queryKey: getApiV1CssTemplatePkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.css_template[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1CssTemplatePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplatePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1CssTemplatePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1CssTemplatePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CssTemplatePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1CssTemplatePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1CssTemplatePkMutationKey() {
  return ['api', '/api/v1/css_template/:pk', 'PUT'] as const
}

export function getPutApiV1CssTemplatePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.css_template)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1CssTemplatePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$put']>) {
      return parseResponse(client.api.v1.css_template[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1CssTemplatePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.css_template)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1CssTemplatePkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1CssTemplatePkMutationKey() {
  return ['api', '/api/v1/css_template/:pk', 'DELETE'] as const
}

export function getDeleteApiV1CssTemplatePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.css_template)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1CssTemplatePkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.css_template)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.css_template[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1CssTemplatePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.css_template)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1CssTemplatePkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DashboardIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.dashboard.index.$get>,
) {
  return ['api', '/api/v1/dashboard/', args] as const
}

export function getApiV1DashboardIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIndexQueryKey>
  >({
    queryKey: getApiV1DashboardIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DashboardIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DashboardIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1DashboardIndexMutationKey() {
  return ['api', '/api/v1/dashboard/', 'POST'] as const
}

export function getPostApiV1DashboardIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dashboard.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dashboard.index.$post>) {
      return parseResponse(client.api.v1.dashboard.index.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dashboard.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DashboardIndexMutationKey() {
  return ['api', '/api/v1/dashboard/', 'DELETE'] as const
}

export function getDeleteApiV1DashboardIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dashboard.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DashboardIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dashboard.index.$delete>) {
      return parseResponse(client.api.v1.dashboard.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1DashboardIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dashboard.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DashboardIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DashboardInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.dashboard._info.$get>,
) {
  return ['api', '/api/v1/dashboard/_info', args] as const
}

export function getApiV1DashboardInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardInfoQueryKey>
  >({
    queryKey: getApiV1DashboardInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DashboardInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DashboardInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DashboardExportIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.dashboard.export.index.$get>,
) {
  return ['api', '/api/v1/dashboard/export/', args] as const
}

export function getApiV1DashboardExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardExportIndexQueryKey>
  >({
    queryKey: getApiV1DashboardExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardExportIndexQueryKey>
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
      ...getApiV1DashboardExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardExportIndexQueryKey>
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
      ...getApiV1DashboardExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/export_xlsx/download/:job_id/', args] as const
}

export function getApiV1DashboardExportXlsxDownloadJobIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey>
  >({
    queryKey: getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard.export_xlsx.download[':job_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardExportXlsxDownloadJobIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey>
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
      ...getApiV1DashboardExportXlsxDownloadJobIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardExportXlsxDownloadJobIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey>
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
      ...getApiV1DashboardExportXlsxDownloadJobIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/export_xlsx/status/:job_id/', args] as const
}

export function getApiV1DashboardExportXlsxStatusJobIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey>
  >({
    queryKey: getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard.export_xlsx.status[':job_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardExportXlsxStatusJobIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey>
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
      ...getApiV1DashboardExportXlsxStatusJobIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardExportXlsxStatusJobIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey>
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
      ...getApiV1DashboardExportXlsxStatusJobIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardFavoriteStatusIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>,
) {
  return ['api', '/api/v1/dashboard/favorite_status/', args] as const
}

export function getApiV1DashboardFavoriteStatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardFavoriteStatusIndexQueryKey>
  >({
    queryKey: getApiV1DashboardFavoriteStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard.favorite_status.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardFavoriteStatusIndexQueryKey>
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
      ...getApiV1DashboardFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardFavoriteStatusIndexQueryKey>
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
      ...getApiV1DashboardFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DashboardImportIndexMutationKey() {
  return ['api', '/api/v1/dashboard/import/', 'POST'] as const
}

export function getPostApiV1DashboardImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dashboard.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dashboard.import.index.$post>) {
      return parseResponse(client.api.v1.dashboard.import.index.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dashboard.import.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dashboard.import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DashboardPermalinkKeyQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>,
) {
  return ['api', '/api/v1/dashboard/permalink/:key', args] as const
}

export function getApiV1DashboardPermalinkKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardPermalinkKeyQueryKey>
  >({
    queryKey: getApiV1DashboardPermalinkKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard.permalink[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardPermalinkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPermalinkKeyQueryKey>
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
      ...getApiV1DashboardPermalinkKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardPermalinkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPermalinkKeyQueryKey>
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
      ...getApiV1DashboardPermalinkKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/dashboard/related/:column_name', args] as const
}

export function getApiV1DashboardRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1DashboardRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardRelatedColumnNameQueryKey>
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
      ...getApiV1DashboardRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardRelatedColumnNameQueryKey>
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
      ...getApiV1DashboardRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug', args] as const
}

export function getApiV1DashboardIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugQueryKey>
  >({
    queryKey: getApiV1DashboardIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugQueryKey>
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
      ...getApiV1DashboardIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugQueryKey>
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
      ...getApiV1DashboardIdOrSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardIdOrSlugChartsQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/charts', args] as const
}

export function getApiV1DashboardIdOrSlugChartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugChartsQueryKey>
  >({
    queryKey: getApiV1DashboardIdOrSlugChartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].charts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardIdOrSlugCharts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugChartsQueryKey>
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
      ...getApiV1DashboardIdOrSlugChartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardIdOrSlugCharts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugChartsQueryKey>
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
      ...getApiV1DashboardIdOrSlugChartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DashboardIdOrSlugCopyIndexMutationKey() {
  return ['api', '/api/v1/dashboard/:id_or_slug/copy/', 'POST'] as const
}

export function getPostApiV1DashboardIdOrSlugCopyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['copy']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['copy']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardIdOrSlugCopyIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':id_or_slug']['copy']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.dashboard[':id_or_slug'].copy.index.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardIdOrSlugCopyIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':id_or_slug']['copy']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['copy']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardIdOrSlugCopyIndexMutationOptions<
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

export function getApiV1DashboardIdOrSlugDatasetsQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/datasets', args] as const
}

export function getApiV1DashboardIdOrSlugDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugDatasetsQueryKey>
  >({
    queryKey: getApiV1DashboardIdOrSlugDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].datasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardIdOrSlugDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugDatasetsQueryKey>
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
      ...getApiV1DashboardIdOrSlugDatasetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardIdOrSlugDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugDatasetsQueryKey>
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
      ...getApiV1DashboardIdOrSlugDatasetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardIdOrSlugEmbeddedQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/embedded', args] as const
}

export function getApiV1DashboardIdOrSlugEmbeddedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugEmbeddedQueryKey>
  >({
    queryKey: getApiV1DashboardIdOrSlugEmbeddedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].embedded.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardIdOrSlugEmbedded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugEmbeddedQueryKey>
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
      ...getApiV1DashboardIdOrSlugEmbeddedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardIdOrSlugEmbedded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugEmbeddedQueryKey>
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
      ...getApiV1DashboardIdOrSlugEmbeddedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1DashboardIdOrSlugEmbeddedMutationKey() {
  return ['api', '/api/v1/dashboard/:id_or_slug/embedded', 'PUT'] as const
}

export function getPutApiV1DashboardIdOrSlugEmbeddedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DashboardIdOrSlugEmbeddedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$put']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':id_or_slug'].embedded.$put(args, options))
    },
  })
}

export function usePutApiV1DashboardIdOrSlugEmbedded<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DashboardIdOrSlugEmbeddedMutationOptions<
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

export function getPostApiV1DashboardIdOrSlugEmbeddedMutationKey() {
  return ['api', '/api/v1/dashboard/:id_or_slug/embedded', 'POST'] as const
}

export function getPostApiV1DashboardIdOrSlugEmbeddedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardIdOrSlugEmbeddedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$post']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':id_or_slug'].embedded.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardIdOrSlugEmbedded<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardIdOrSlugEmbeddedMutationOptions<
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

export function getDeleteApiV1DashboardIdOrSlugEmbeddedMutationKey() {
  return ['api', '/api/v1/dashboard/:id_or_slug/embedded', 'DELETE'] as const
}

export function getDeleteApiV1DashboardIdOrSlugEmbeddedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DashboardIdOrSlugEmbeddedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.dashboard[':id_or_slug'].embedded.$delete(args, options))
    },
  })
}

export function useDeleteApiV1DashboardIdOrSlugEmbedded<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DashboardIdOrSlugEmbeddedMutationOptions<
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

export function getApiV1DashboardIdOrSlugTabsQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/tabs', args] as const
}

export function getApiV1DashboardIdOrSlugTabsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugTabsQueryKey>
  >({
    queryKey: getApiV1DashboardIdOrSlugTabsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].tabs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardIdOrSlugTabs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugTabsQueryKey>
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
      ...getApiV1DashboardIdOrSlugTabsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardIdOrSlugTabs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardIdOrSlugTabsQueryKey>
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
      ...getApiV1DashboardIdOrSlugTabsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1DashboardPkMutationKey() {
  return ['api', '/api/v1/dashboard/:pk', 'PUT'] as const
}

export function getPutApiV1DashboardPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DashboardPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$put']>) {
      return parseResponse(client.api.v1.dashboard[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1DashboardPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DashboardPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DashboardPkMutationKey() {
  return ['api', '/api/v1/dashboard/:pk', 'DELETE'] as const
}

export function getDeleteApiV1DashboardPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DashboardPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.dashboard[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DashboardPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DashboardPkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1DashboardPkCacheDashboardScreenshotIndexMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/cache_dashboard_screenshot/', 'POST'] as const
}

export function getPostApiV1DashboardPkCacheDashboardScreenshotIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard)[':pk']['cache_dashboard_screenshot']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.dashboard)[':pk']['cache_dashboard_screenshot']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardPkCacheDashboardScreenshotIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':pk']['cache_dashboard_screenshot']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].cache_dashboard_screenshot.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DashboardPkCacheDashboardScreenshotIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['cache_dashboard_screenshot']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.dashboard)[':pk']['cache_dashboard_screenshot']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardPkCacheDashboardScreenshotIndexMutationOptions<
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

export function getPutApiV1DashboardPkChartCustomizationsMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/chart_customizations', 'PUT'] as const
}

export function getPutApiV1DashboardPkChartCustomizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DashboardPkChartCustomizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].chart_customizations.$put(args, options))
    },
  })
}

export function usePutApiV1DashboardPkChartCustomizations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DashboardPkChartCustomizationsMutationOptions<
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

export function getPutApiV1DashboardPkColorsMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/colors', 'PUT'] as const
}

export function getPutApiV1DashboardPkColorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['colors']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['colors']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DashboardPkColorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['colors']['$put']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].colors.$put(args, options))
    },
  })
}

export function usePutApiV1DashboardPkColors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['colors']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['colors']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DashboardPkColorsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DashboardPkExportAsExampleIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/:pk/export_as_example/', args] as const
}

export function getApiV1DashboardPkExportAsExampleIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardPkExportAsExampleIndexQueryKey>
  >({
    queryKey: getApiV1DashboardPkExportAsExampleIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].export_as_example.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardPkExportAsExampleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkExportAsExampleIndexQueryKey>
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
      ...getApiV1DashboardPkExportAsExampleIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardPkExportAsExampleIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkExportAsExampleIndexQueryKey>
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
      ...getApiV1DashboardPkExportAsExampleIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DashboardPkExportXlsxIndexMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/export_xlsx/', 'POST'] as const
}

export function getPostApiV1DashboardPkExportXlsxIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardPkExportXlsxIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].export_xlsx.index.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardPkExportXlsxIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardPkExportXlsxIndexMutationOptions<
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

export function getPostApiV1DashboardPkFavoritesIndexMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/favorites/', 'POST'] as const
}

export function getPostApiV1DashboardPkFavoritesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardPkFavoritesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].favorites.index.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardPkFavoritesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardPkFavoritesIndexMutationOptions<
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

export function getDeleteApiV1DashboardPkFavoritesIndexMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/favorites/', 'DELETE'] as const
}

export function getDeleteApiV1DashboardPkFavoritesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DashboardPkFavoritesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].favorites.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1DashboardPkFavoritesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DashboardPkFavoritesIndexMutationOptions<
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

export function getPostApiV1DashboardPkFilterStateMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/filter_state', 'POST'] as const
}

export function getPostApiV1DashboardPkFilterStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardPkFilterStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].filter_state.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardPkFilterState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardPkFilterStateMutationOptions<
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

export function getApiV1DashboardPkFilterStateKeyQueryKey(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>,
) {
  return ['api', '/api/v1/dashboard/:pk/filter_state/:key', args] as const
}

export function getApiV1DashboardPkFilterStateKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardPkFilterStateKeyQueryKey>
  >({
    queryKey: getApiV1DashboardPkFilterStateKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].filter_state[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardPkFilterStateKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkFilterStateKeyQueryKey>
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
      ...getApiV1DashboardPkFilterStateKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardPkFilterStateKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkFilterStateKeyQueryKey>
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
      ...getApiV1DashboardPkFilterStateKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1DashboardPkFilterStateKeyMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/filter_state/:key', 'PUT'] as const
}

export function getPutApiV1DashboardPkFilterStateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DashboardPkFilterStateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']
      >,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].filter_state[':key'].$put(args, options))
    },
  })
}

export function usePutApiV1DashboardPkFilterStateKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DashboardPkFilterStateKeyMutationOptions<
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

export function getDeleteApiV1DashboardPkFilterStateKeyMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/filter_state/:key', 'DELETE'] as const
}

export function getDeleteApiV1DashboardPkFilterStateKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DashboardPkFilterStateKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].filter_state[':key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1DashboardPkFilterStateKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DashboardPkFilterStateKeyMutationOptions<
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

export function getPutApiV1DashboardPkFiltersMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/filters', 'PUT'] as const
}

export function getPutApiV1DashboardPkFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['filters']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filters']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DashboardPkFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filters']['$put']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].filters.$put(args, options))
    },
  })
}

export function usePutApiV1DashboardPkFilters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['filters']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filters']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DashboardPkFiltersMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1DashboardPkPermalinkMutationKey() {
  return ['api', '/api/v1/dashboard/:pk/permalink', 'POST'] as const
}

export function getPostApiV1DashboardPkPermalinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['permalink']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['permalink']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardPkPermalinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':pk']['permalink']['$post']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':pk'].permalink.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardPkPermalink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':pk']['permalink']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':pk']['permalink']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardPkPermalinkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DashboardPkScreenshotDigestIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/:pk/screenshot/:digest/', args] as const
}

export function getApiV1DashboardPkScreenshotDigestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardPkScreenshotDigestIndexQueryKey>
  >({
    queryKey: getApiV1DashboardPkScreenshotDigestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].screenshot[':digest'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardPkScreenshotDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkScreenshotDigestIndexQueryKey>
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
      ...getApiV1DashboardPkScreenshotDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardPkScreenshotDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkScreenshotDigestIndexQueryKey>
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
      ...getApiV1DashboardPkScreenshotDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardPkThumbnailDigestIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/:pk/thumbnail/:digest/', args] as const
}

export function getApiV1DashboardPkThumbnailDigestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardPkThumbnailDigestIndexQueryKey>
  >({
    queryKey: getApiV1DashboardPkThumbnailDigestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].thumbnail[':digest'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardPkThumbnailDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkThumbnailDigestIndexQueryKey>
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
      ...getApiV1DashboardPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardPkThumbnailDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardPkThumbnailDigestIndexQueryKey>
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
      ...getApiV1DashboardPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardUuidStrActivityIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/:uuid_str/activity/', args] as const
}

export function getApiV1DashboardUuidStrActivityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardUuidStrActivityIndexQueryKey>
  >({
    queryKey: getApiV1DashboardUuidStrActivityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':uuid_str'].activity.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardUuidStrActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardUuidStrActivityIndexQueryKey>
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
      ...getApiV1DashboardUuidStrActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardUuidStrActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardUuidStrActivityIndexQueryKey>
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
      ...getApiV1DashboardUuidStrActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardUuidStrVersionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/:uuid_str/versions/', args] as const
}

export function getApiV1DashboardUuidStrVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardUuidStrVersionsIndexQueryKey>
  >({
    queryKey: getApiV1DashboardUuidStrVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':uuid_str'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardUuidStrVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardUuidStrVersionsIndexQueryKey>
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
      ...getApiV1DashboardUuidStrVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardUuidStrVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardUuidStrVersionsIndexQueryKey>
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
      ...getApiV1DashboardUuidStrVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dashboard/:uuid_str/versions/:version_uuid_str/', args] as const
}

export function getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey>
  >({
    queryKey: getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dashboard[':uuid_str'].versions[':version_uuid_str'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DashboardUuidStrVersionsVersionUuidStrIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey>
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
      ...getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DashboardUuidStrVersionsVersionUuidStrIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey>
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
      ...getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DashboardUuidStrVersionsVersionUuidStrRestoreMutationKey() {
  return ['api', '/api/v1/dashboard/:uuid_str/versions/:version_uuid_str/restore', 'POST'] as const
}

export function getPostApiV1DashboardUuidStrVersionsVersionUuidStrRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardUuidStrVersionsVersionUuidStrRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.dashboard[':uuid_str'].versions[':version_uuid_str'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1DashboardUuidStrVersionsVersionUuidStrRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardUuidStrVersionsVersionUuidStrRestoreMutationOptions<
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

export function getPostApiV1DashboardUuidPurgeMutationKey() {
  return ['api', '/api/v1/dashboard/:uuid/purge', 'POST'] as const
}

export function getPostApiV1DashboardUuidPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':uuid']['purge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardUuidPurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['purge']['$post']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':uuid'].purge.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardUuidPurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':uuid']['purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardUuidPurgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1DashboardUuidRestoreMutationKey() {
  return ['api', '/api/v1/dashboard/:uuid/restore', 'POST'] as const
}

export function getPostApiV1DashboardUuidRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':uuid']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DashboardUuidRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['restore']['$post']>,
    ) {
      return parseResponse(client.api.v1.dashboard[':uuid'].restore.$post(args, options))
    },
  })
}

export function usePostApiV1DashboardUuidRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dashboard)[':uuid']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dashboard)[':uuid']['restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DashboardUuidRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatabaseIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.database.index.$get>,
) {
  return ['api', '/api/v1/database/', args] as const
}

export function getApiV1DatabaseIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseIndexQueryKey>
  >({
    queryKey: getApiV1DatabaseIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1DatabaseIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DatabaseIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DatabaseIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DatabaseIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1DatabaseIndexMutationKey() {
  return ['api', '/api/v1/database/', 'POST'] as const
}

export function getPostApiV1DatabaseIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.database.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabaseIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.database.index.$post>) {
      return parseResponse(client.api.v1.database.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatabaseIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.database.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabaseIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatabaseInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.database._info.$get>,
) {
  return ['api', '/api/v1/database/_info', args] as const
}

export function getApiV1DatabaseInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseInfoQueryKey>
  >({
    queryKey: getApiV1DatabaseInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1DatabaseInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DatabaseInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DatabaseInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DatabaseInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DatabaseAvailableIndexQueryKey() {
  return ['api', '/api/v1/database/available/'] as const
}

export function getApiV1DatabaseAvailableIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseAvailableIndexQueryKey>
  >({
    queryKey: getApiV1DatabaseAvailableIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database.available.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabaseAvailableIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseAvailableIndexQueryKey>
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
      ...getApiV1DatabaseAvailableIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabaseAvailableIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseAvailableIndexQueryKey>
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
      ...getApiV1DatabaseAvailableIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabaseExportIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.database.export.index.$get>,
) {
  return ['api', '/api/v1/database/export/', args] as const
}

export function getApiV1DatabaseExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseExportIndexQueryKey>
  >({
    queryKey: getApiV1DatabaseExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabaseExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseExportIndexQueryKey>
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
      ...getApiV1DatabaseExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabaseExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseExportIndexQueryKey>
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
      ...getApiV1DatabaseExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatabaseImportIndexMutationKey() {
  return ['api', '/api/v1/database/import/', 'POST'] as const
}

export function getPostApiV1DatabaseImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.database.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabaseImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.database.import.index.$post>) {
      return parseResponse(client.api.v1.database.import.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatabaseImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.import.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.database.import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabaseImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatabaseOauth2IndexQueryKey(
  args: InferRequestType<typeof client.api.v1.database.oauth2.index.$get>,
) {
  return ['api', '/api/v1/database/oauth2/', args] as const
}

export function getApiV1DatabaseOauth2IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.oauth2.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseOauth2IndexQueryKey>
  >({
    queryKey: getApiV1DatabaseOauth2IndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database.oauth2.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabaseOauth2Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.oauth2.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseOauth2IndexQueryKey>
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
      ...getApiV1DatabaseOauth2IndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabaseOauth2Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.database.oauth2.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseOauth2IndexQueryKey>
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
      ...getApiV1DatabaseOauth2IndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabaseRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/database/related/:column_name', args] as const
}

export function getApiV1DatabaseRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1DatabaseRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabaseRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseRelatedColumnNameQueryKey>
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
      ...getApiV1DatabaseRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabaseRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabaseRelatedColumnNameQueryKey>
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
      ...getApiV1DatabaseRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatabaseTestConnectionIndexMutationKey() {
  return ['api', '/api/v1/database/test_connection/', 'POST'] as const
}

export function getPostApiV1DatabaseTestConnectionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.database.test_connection.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.database.test_connection.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabaseTestConnectionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.database.test_connection.index.$post>,
    ) {
      return parseResponse(client.api.v1.database.test_connection.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatabaseTestConnectionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.test_connection.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.database.test_connection.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabaseTestConnectionIndexMutationOptions<
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

export function getPostApiV1DatabaseUploadMetadataIndexMutationKey() {
  return ['api', '/api/v1/database/upload_metadata/', 'POST'] as const
}

export function getPostApiV1DatabaseUploadMetadataIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.database.upload_metadata.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.database.upload_metadata.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabaseUploadMetadataIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.database.upload_metadata.index.$post>,
    ) {
      return parseResponse(client.api.v1.database.upload_metadata.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatabaseUploadMetadataIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.upload_metadata.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.database.upload_metadata.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabaseUploadMetadataIndexMutationOptions<
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

export function getPostApiV1DatabaseValidateParametersIndexMutationKey() {
  return ['api', '/api/v1/database/validate_parameters/', 'POST'] as const
}

export function getPostApiV1DatabaseValidateParametersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.database.validate_parameters.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.database.validate_parameters.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabaseValidateParametersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.database.validate_parameters.index.$post>,
    ) {
      return parseResponse(client.api.v1.database.validate_parameters.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatabaseValidateParametersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.database.validate_parameters.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.database.validate_parameters.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabaseValidateParametersIndexMutationOptions<
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

export function getApiV1DatabasePkQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>,
) {
  return ['api', '/api/v1/database/:pk', args] as const
}

export function getApiV1DatabasePkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkQueryKey>
  >({
    queryKey: getApiV1DatabasePkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DatabasePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DatabasePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1DatabasePkMutationKey() {
  return ['api', '/api/v1/database/:pk', 'PUT'] as const
}

export function getPutApiV1DatabasePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.database)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DatabasePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.database)[':pk']['$put']>) {
      return parseResponse(client.api.v1.database[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1DatabasePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.database)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DatabasePkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DatabasePkMutationKey() {
  return ['api', '/api/v1/database/:pk', 'DELETE'] as const
}

export function getDeleteApiV1DatabasePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.database)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DatabasePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.database)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.database[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DatabasePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.database)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DatabasePkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatabasePkCatalogsIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>,
) {
  return ['api', '/api/v1/database/:pk/catalogs/', args] as const
}

export function getApiV1DatabasePkCatalogsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkCatalogsIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkCatalogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].catalogs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkCatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkCatalogsIndexQueryKey>
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
      ...getApiV1DatabasePkCatalogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkCatalogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkCatalogsIndexQueryKey>
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
      ...getApiV1DatabasePkCatalogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkConnectionQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>,
) {
  return ['api', '/api/v1/database/:pk/connection', args] as const
}

export function getApiV1DatabasePkConnectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkConnectionQueryKey>
  >({
    queryKey: getApiV1DatabasePkConnectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].connection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkConnection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkConnectionQueryKey>
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
      ...getApiV1DatabasePkConnectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkConnection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkConnectionQueryKey>
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
      ...getApiV1DatabasePkConnectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/encrypted_extra_hints/', args] as const
}

export function getApiV1DatabasePkEncryptedExtraHintsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].encrypted_extra_hints.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkEncryptedExtraHintsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey>
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
      ...getApiV1DatabasePkEncryptedExtraHintsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkEncryptedExtraHintsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey>
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
      ...getApiV1DatabasePkEncryptedExtraHintsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkFunctionNamesIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>,
) {
  return ['api', '/api/v1/database/:pk/function_names/', args] as const
}

export function getApiV1DatabasePkFunctionNamesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkFunctionNamesIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkFunctionNamesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].function_names.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkFunctionNamesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['function_names']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkFunctionNamesIndexQueryKey>
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
      ...getApiV1DatabasePkFunctionNamesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkFunctionNamesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['function_names']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkFunctionNamesIndexQueryKey>
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
      ...getApiV1DatabasePkFunctionNamesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkOauth2TokensIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>,
) {
  return ['api', '/api/v1/database/:pk/oauth2_tokens/', args] as const
}

export function getApiV1DatabasePkOauth2TokensIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkOauth2TokensIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkOauth2TokensIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].oauth2_tokens.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkOauth2TokensIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkOauth2TokensIndexQueryKey>
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
      ...getApiV1DatabasePkOauth2TokensIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkOauth2TokensIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkOauth2TokensIndexQueryKey>
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
      ...getApiV1DatabasePkOauth2TokensIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatabasePkOauth2TokensAllIndexMutationKey() {
  return ['api', '/api/v1/database/:pk/oauth2_tokens/all/', 'POST'] as const
}

export function getPostApiV1DatabasePkOauth2TokensAllIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['oauth2_tokens']['all']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['oauth2_tokens']['all']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabasePkOauth2TokensAllIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.database)[':pk']['oauth2_tokens']['all']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.database[':pk'].oauth2_tokens.all.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DatabasePkOauth2TokensAllIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['oauth2_tokens']['all']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.database)[':pk']['oauth2_tokens']['all']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabasePkOauth2TokensAllIndexMutationOptions<
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

export function getPostApiV1DatabasePkOauth2TokensDeleteIndexMutationKey() {
  return ['api', '/api/v1/database/:pk/oauth2_tokens/delete/', 'POST'] as const
}

export function getPostApiV1DatabasePkOauth2TokensDeleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['oauth2_tokens']['delete']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['oauth2_tokens']['delete']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabasePkOauth2TokensDeleteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.database)[':pk']['oauth2_tokens']['delete']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.database[':pk'].oauth2_tokens.delete.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DatabasePkOauth2TokensDeleteIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['oauth2_tokens']['delete']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.database)[':pk']['oauth2_tokens']['delete']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabasePkOauth2TokensDeleteIndexMutationOptions<
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

export function getApiV1DatabasePkRelatedObjectsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/related_objects/', args] as const
}

export function getApiV1DatabasePkRelatedObjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkRelatedObjectsIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkRelatedObjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].related_objects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkRelatedObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkRelatedObjectsIndexQueryKey>
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
      ...getApiV1DatabasePkRelatedObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkRelatedObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkRelatedObjectsIndexQueryKey>
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
      ...getApiV1DatabasePkRelatedObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSchemasIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>,
) {
  return ['api', '/api/v1/database/:pk/schemas/', args] as const
}

export function getApiV1DatabasePkSchemasIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkSchemasIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkSchemasIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].schemas.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkSchemasIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSchemasIndexQueryKey>
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
      ...getApiV1DatabasePkSchemasIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkSchemasIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSchemasIndexQueryKey>
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
      ...getApiV1DatabasePkSchemasIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/schemas_access_for_file_upload/', args] as const
}

export function getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].schemas_access_for_file_upload.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkSchemasAccessForFileUploadIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey>
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
      ...getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkSchemasAccessForFileUploadIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey>
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
      ...getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSelectStarTableNameIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/select_star/:table_name/', args] as const
}

export function getApiV1DatabasePkSelectStarTableNameIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkSelectStarTableNameIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkSelectStarTableNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].select_star[':table_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkSelectStarTableNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSelectStarTableNameIndexQueryKey>
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
      ...getApiV1DatabasePkSelectStarTableNameIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkSelectStarTableNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSelectStarTableNameIndexQueryKey>
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
      ...getApiV1DatabasePkSelectStarTableNameIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/select_star/:table_name/:schema_name/', args] as const
}

export function getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkSelectStarTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey>
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
      ...getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkSelectStarTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey>
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
      ...getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatabasePkSyncPermissionsIndexMutationKey() {
  return ['api', '/api/v1/database/:pk/sync_permissions/', 'POST'] as const
}

export function getPostApiV1DatabasePkSyncPermissionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['sync_permissions']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.database)[':pk']['sync_permissions']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabasePkSyncPermissionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.database)[':pk']['sync_permissions']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.database[':pk'].sync_permissions.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DatabasePkSyncPermissionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['sync_permissions']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.database)[':pk']['sync_permissions']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabasePkSyncPermissionsIndexMutationOptions<
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

export function getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/table/:table_name/:schema_name/', args] as const
}

export function getApiV1DatabasePkTableTableNameSchemaNameIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].table[':table_name'][':schema_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkTableTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey>
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
      ...getApiV1DatabasePkTableTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkTableTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey>
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
      ...getApiV1DatabasePkTableTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/table_extra/:table_name/:schema_name/', args] as const
}

export function getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].table_extra[':table_name'][':schema_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkTableExtraTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey>
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
      ...getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkTableExtraTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey>
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
      ...getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTableMetadataIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>,
) {
  return ['api', '/api/v1/database/:pk/table_metadata/', args] as const
}

export function getApiV1DatabasePkTableMetadataIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkTableMetadataIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkTableMetadataIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].table_metadata.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkTableMetadataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableMetadataIndexQueryKey>
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
      ...getApiV1DatabasePkTableMetadataIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkTableMetadataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableMetadataIndexQueryKey>
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
      ...getApiV1DatabasePkTableMetadataIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTableMetadataExtraIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
  >,
) {
  return ['api', '/api/v1/database/:pk/table_metadata/extra/', args] as const
}

export function getApiV1DatabasePkTableMetadataExtraIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkTableMetadataExtraIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkTableMetadataExtraIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].table_metadata.extra.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkTableMetadataExtraIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableMetadataExtraIndexQueryKey>
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
      ...getApiV1DatabasePkTableMetadataExtraIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkTableMetadataExtraIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTableMetadataExtraIndexQueryKey>
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
      ...getApiV1DatabasePkTableMetadataExtraIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTablesIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>,
) {
  return ['api', '/api/v1/database/:pk/tables/', args] as const
}

export function getApiV1DatabasePkTablesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkTablesIndexQueryKey>
  >({
    queryKey: getApiV1DatabasePkTablesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.database[':pk'].tables.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatabasePkTablesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTablesIndexQueryKey>
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
      ...getApiV1DatabasePkTablesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatabasePkTablesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatabasePkTablesIndexQueryKey>
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
      ...getApiV1DatabasePkTablesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatabasePkUploadIndexMutationKey() {
  return ['api', '/api/v1/database/:pk/upload/', 'POST'] as const
}

export function getPostApiV1DatabasePkUploadIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['upload']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.database)[':pk']['upload']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabasePkUploadIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.database)[':pk']['upload']['index']['$post']>,
    ) {
      return parseResponse(client.api.v1.database[':pk'].upload.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatabasePkUploadIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['upload']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.database)[':pk']['upload']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabasePkUploadIndexMutationOptions<
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

export function getPostApiV1DatabasePkValidateSqlIndexMutationKey() {
  return ['api', '/api/v1/database/:pk/validate_sql/', 'POST'] as const
}

export function getPostApiV1DatabasePkValidateSqlIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatabasePkValidateSqlIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.database[':pk'].validate_sql.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatabasePkValidateSqlIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatabasePkValidateSqlIndexMutationOptions<
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

export function getApiV1DatasetIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.dataset.index.$get>,
) {
  return ['api', '/api/v1/dataset/', args] as const
}

export function getApiV1DatasetIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.dataset.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetIndexQueryKey>
  >({
    queryKey: getApiV1DatasetIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1DatasetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DatasetIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DatasetIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1DatasetIndexMutationKey() {
  return ['api', '/api/v1/dataset/', 'POST'] as const
}

export function getPostApiV1DatasetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dataset.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dataset.index.$post>) {
      return parseResponse(client.api.v1.dataset.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatasetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dataset.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DatasetIndexMutationKey() {
  return ['api', '/api/v1/dataset/', 'DELETE'] as const
}

export function getDeleteApiV1DatasetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dataset.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DatasetIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dataset.index.$delete>) {
      return parseResponse(client.api.v1.dataset.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1DatasetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dataset.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DatasetIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatasetInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.dataset._info.$get>,
) {
  return ['api', '/api/v1/dataset/_info', args] as const
}

export function getApiV1DatasetInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.dataset._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetInfoQueryKey>
  >({
    queryKey: getApiV1DatasetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1DatasetInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DatasetInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DatasetInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DatasetDistinctColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/dataset/distinct/:column_name', args] as const
}

export function getApiV1DatasetDistinctColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetDistinctColumnNameQueryKey>
  >({
    queryKey: getApiV1DatasetDistinctColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset.distinct[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetDistinctColumnNameQueryKey>
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
      ...getApiV1DatasetDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetDistinctColumnNameQueryKey>
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
      ...getApiV1DatasetDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatasetDuplicateMutationKey() {
  return ['api', '/api/v1/dataset/duplicate', 'POST'] as const
}

export function getPostApiV1DatasetDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.duplicate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dataset.duplicate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetDuplicateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dataset.duplicate.$post>) {
      return parseResponse(client.api.v1.dataset.duplicate.$post(args, options))
    },
  })
}

export function usePostApiV1DatasetDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.duplicate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dataset.duplicate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetDuplicateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatasetExportIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.dataset.export.index.$get>,
) {
  return ['api', '/api/v1/dataset/export/', args] as const
}

export function getApiV1DatasetExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetExportIndexQueryKey>
  >({
    queryKey: getApiV1DatasetExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetExportIndexQueryKey>
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
      ...getApiV1DatasetExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetExportIndexQueryKey>
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
      ...getApiV1DatasetExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatasetGetOrCreateIndexMutationKey() {
  return ['api', '/api/v1/dataset/get_or_create/', 'POST'] as const
}

export function getPostApiV1DatasetGetOrCreateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.dataset.get_or_create.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dataset.get_or_create.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetGetOrCreateIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.dataset.get_or_create.index.$post>,
    ) {
      return parseResponse(client.api.v1.dataset.get_or_create.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatasetGetOrCreateIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dataset.get_or_create.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dataset.get_or_create.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetGetOrCreateIndexMutationOptions<
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

export function getPostApiV1DatasetImportIndexMutationKey() {
  return ['api', '/api/v1/dataset/import/', 'POST'] as const
}

export function getPostApiV1DatasetImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dataset.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dataset.import.index.$post>) {
      return parseResponse(client.api.v1.dataset.import.index.$post(args, options))
    },
  })
}

export function usePostApiV1DatasetImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dataset.import.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dataset.import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatasetRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/dataset/related/:column_name', args] as const
}

export function getApiV1DatasetRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1DatasetRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetRelatedColumnNameQueryKey>
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
      ...getApiV1DatasetRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetRelatedColumnNameQueryKey>
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
      ...getApiV1DatasetRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatasetRelatedObjectsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>,
) {
  return ['api', '/api/v1/dataset/related_objects/', args] as const
}

export function getApiV1DatasetRelatedObjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetRelatedObjectsIndexQueryKey>
  >({
    queryKey: getApiV1DatasetRelatedObjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset.related_objects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetRelatedObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetRelatedObjectsIndexQueryKey>
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
      ...getApiV1DatasetRelatedObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetRelatedObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetRelatedObjectsIndexQueryKey>
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
      ...getApiV1DatasetRelatedObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1DatasetWarmUpCacheMutationKey() {
  return ['api', '/api/v1/dataset/warm_up_cache', 'PUT'] as const
}

export function getPutApiV1DatasetWarmUpCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.warm_up_cache.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.dataset.warm_up_cache.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DatasetWarmUpCacheMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.dataset.warm_up_cache.$put>) {
      return parseResponse(client.api.v1.dataset.warm_up_cache.$put(args, options))
    },
  })
}

export function usePutApiV1DatasetWarmUpCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.dataset.warm_up_cache.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.dataset.warm_up_cache.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DatasetWarmUpCacheMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatasetIdOrUuidQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>,
) {
  return ['api', '/api/v1/dataset/:id_or_uuid', args] as const
}

export function getApiV1DatasetIdOrUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetIdOrUuidQueryKey>
  >({
    queryKey: getApiV1DatasetIdOrUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset[':id_or_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetIdOrUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetIdOrUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DatasetIdOrUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetIdOrUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetIdOrUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DatasetIdOrUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DatasetIdOrUuidRelatedObjectsQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>,
) {
  return ['api', '/api/v1/dataset/:id_or_uuid/related_objects', args] as const
}

export function getApiV1DatasetIdOrUuidRelatedObjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetIdOrUuidRelatedObjectsQueryKey>
  >({
    queryKey: getApiV1DatasetIdOrUuidRelatedObjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset[':id_or_uuid'].related_objects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetIdOrUuidRelatedObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetIdOrUuidRelatedObjectsQueryKey>
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
      ...getApiV1DatasetIdOrUuidRelatedObjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetIdOrUuidRelatedObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetIdOrUuidRelatedObjectsQueryKey>
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
      ...getApiV1DatasetIdOrUuidRelatedObjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1DatasetPkMutationKey() {
  return ['api', '/api/v1/dataset/:pk', 'PUT'] as const
}

export function getPutApiV1DatasetPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DatasetPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['$put']>) {
      return parseResponse(client.api.v1.dataset[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1DatasetPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dataset)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DatasetPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DatasetPkMutationKey() {
  return ['api', '/api/v1/dataset/:pk', 'DELETE'] as const
}

export function getDeleteApiV1DatasetPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DatasetPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.dataset[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DatasetPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dataset)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DatasetPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DatasetPkColumnColumnIdMutationKey() {
  return ['api', '/api/v1/dataset/:pk/column/:column_id', 'DELETE'] as const
}

export function getDeleteApiV1DatasetPkColumnColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DatasetPkColumnColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.dataset[':pk'].column[':column_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DatasetPkColumnColumnId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DatasetPkColumnColumnIdMutationOptions<
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

export function getApiV1DatasetPkDrillInfoIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>,
) {
  return ['api', '/api/v1/dataset/:pk/drill_info/', args] as const
}

export function getApiV1DatasetPkDrillInfoIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetPkDrillInfoIndexQueryKey>
  >({
    queryKey: getApiV1DatasetPkDrillInfoIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset[':pk'].drill_info.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetPkDrillInfoIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetPkDrillInfoIndexQueryKey>
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
      ...getApiV1DatasetPkDrillInfoIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetPkDrillInfoIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetPkDrillInfoIndexQueryKey>
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
      ...getApiV1DatasetPkDrillInfoIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1DatasetPkMetricMetricIdMutationKey() {
  return ['api', '/api/v1/dataset/:pk/metric/:metric_id', 'DELETE'] as const
}

export function getDeleteApiV1DatasetPkMetricMetricIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DatasetPkMetricMetricIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']
      >,
    ) {
      return parseResponse(client.api.v1.dataset[':pk'].metric[':metric_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1DatasetPkMetricMetricId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DatasetPkMetricMetricIdMutationOptions<
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

export function getPostApiV1DatasetPkPartitionMappingPreviewIndexMutationKey() {
  return ['api', '/api/v1/dataset/:pk/partition_mapping/preview/', 'POST'] as const
}

export function getPostApiV1DatasetPkPartitionMappingPreviewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dataset)[':pk']['partition_mapping']['preview']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.dataset)[':pk']['partition_mapping']['preview']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetPkPartitionMappingPreviewIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dataset)[':pk']['partition_mapping']['preview']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.dataset[':pk'].partition_mapping.preview.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DatasetPkPartitionMappingPreviewIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dataset)[':pk']['partition_mapping']['preview']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.dataset)[':pk']['partition_mapping']['preview']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetPkPartitionMappingPreviewIndexMutationOptions<
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

export function getPutApiV1DatasetPkRefreshMutationKey() {
  return ['api', '/api/v1/dataset/:pk/refresh', 'PUT'] as const
}

export function getPutApiV1DatasetPkRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['refresh']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['refresh']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1DatasetPkRefreshMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dataset)[':pk']['refresh']['$put']>,
    ) {
      return parseResponse(client.api.v1.dataset[':pk'].refresh.$put(args, options))
    },
  })
}

export function usePutApiV1DatasetPkRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['refresh']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dataset)[':pk']['refresh']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1DatasetPkRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatasetUuidStrActivityIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>,
) {
  return ['api', '/api/v1/dataset/:uuid_str/activity/', args] as const
}

export function getApiV1DatasetUuidStrActivityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetUuidStrActivityIndexQueryKey>
  >({
    queryKey: getApiV1DatasetUuidStrActivityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset[':uuid_str'].activity.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetUuidStrActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidStrActivityIndexQueryKey>
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
      ...getApiV1DatasetUuidStrActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetUuidStrActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidStrActivityIndexQueryKey>
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
      ...getApiV1DatasetUuidStrActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatasetUuidStrVersionsIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>,
) {
  return ['api', '/api/v1/dataset/:uuid_str/versions/', args] as const
}

export function getApiV1DatasetUuidStrVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetUuidStrVersionsIndexQueryKey>
  >({
    queryKey: getApiV1DatasetUuidStrVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset[':uuid_str'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetUuidStrVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidStrVersionsIndexQueryKey>
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
      ...getApiV1DatasetUuidStrVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetUuidStrVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidStrVersionsIndexQueryKey>
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
      ...getApiV1DatasetUuidStrVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
) {
  return ['api', '/api/v1/dataset/:uuid_str/versions/:version_uuid_str/', args] as const
}

export function getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey>
  >({
    queryKey: getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset[':uuid_str'].versions[':version_uuid_str'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetUuidStrVersionsVersionUuidStrIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey>
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
      ...getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetUuidStrVersionsVersionUuidStrIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey>
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
      ...getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatasetUuidStrVersionsVersionUuidStrRestoreMutationKey() {
  return ['api', '/api/v1/dataset/:uuid_str/versions/:version_uuid_str/restore', 'POST'] as const
}

export function getPostApiV1DatasetUuidStrVersionsVersionUuidStrRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetUuidStrVersionsVersionUuidStrRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.dataset[':uuid_str'].versions[':version_uuid_str'].restore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1DatasetUuidStrVersionsVersionUuidStrRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetUuidStrVersionsVersionUuidStrRestoreMutationOptions<
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

export function getPostApiV1DatasetUuidPurgeMutationKey() {
  return ['api', '/api/v1/dataset/:uuid/purge', 'POST'] as const
}

export function getPostApiV1DatasetUuidPurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetUuidPurgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge']['$post']>,
    ) {
      return parseResponse(client.api.v1.dataset[':uuid'].purge.$post(args, options))
    },
  })
}

export function usePostApiV1DatasetUuidPurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetUuidPurgeMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatasetUuidPurgeImpactQueryKey(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>,
) {
  return ['api', '/api/v1/dataset/:uuid/purge-impact', args] as const
}

export function getApiV1DatasetUuidPurgeImpactQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetUuidPurgeImpactQueryKey>
  >({
    queryKey: getApiV1DatasetUuidPurgeImpactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dataset[':uuid']['purge-impact'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasetUuidPurgeImpact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidPurgeImpactQueryKey>
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
      ...getApiV1DatasetUuidPurgeImpactQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasetUuidPurgeImpact<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasetUuidPurgeImpactQueryKey>
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
      ...getApiV1DatasetUuidPurgeImpactQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatasetUuidRestoreMutationKey() {
  return ['api', '/api/v1/dataset/:uuid/restore', 'POST'] as const
}

export function getPostApiV1DatasetUuidRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.dataset)[':uuid']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasetUuidRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.dataset)[':uuid']['restore']['$post']>,
    ) {
      return parseResponse(client.api.v1.dataset[':uuid'].restore.$post(args, options))
    },
  })
}

export function usePostApiV1DatasetUuidRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.dataset)[':uuid']['restore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasetUuidRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DatasourceIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.datasource.index.$get>,
) {
  return ['api', '/api/v1/datasource/', args] as const
}

export function getApiV1DatasourceIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.datasource.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasourceIndexQueryKey>
  >({
    queryKey: getApiV1DatasourceIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.datasource.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasourceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.datasource.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasourceIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DatasourceIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DatasourceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.datasource.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasourceIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DatasourceIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
  >,
) {
  return ['api', '/api/v1/datasource/:datasource_type/:datasource_id', args] as const
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey>
  >({
    queryKey: getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.datasource[':datasource_type'][':datasource_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1DatasourceDatasourceTypeDatasourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey>
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
      ...getApiV1DatasourceDatasourceTypeDatasourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasourceDatasourceTypeDatasourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey>
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
      ...getApiV1DatasourceDatasourceTypeDatasourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/datasource/:datasource_type/:datasource_id/column/:column_name/values/',
    args,
  ] as const
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey
    >
  >({
    queryKey: getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.datasource[':datasource_type'][':datasource_id'].column[
          ':column_name'
        ].values.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey
        >
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
      ...getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey
        >
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
      ...getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1DatasourceDatasourceTypeDatasourceIdCompatibleMutationKey() {
  return ['api', '/api/v1/datasource/:datasource_type/:datasource_id/compatible', 'POST'] as const
}

export function getPostApiV1DatasourceDatasourceTypeDatasourceIdCompatibleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['compatible']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['compatible']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasourceDatasourceTypeDatasourceIdCompatibleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['compatible']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.datasource[':datasource_type'][':datasource_id'].compatible.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV1DatasourceDatasourceTypeDatasourceIdCompatible<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['compatible']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['compatible']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1DatasourceDatasourceTypeDatasourceIdCompatibleMutationOptions<
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

export function getPostApiV1DatasourceDatasourceTypeDatasourceIdQueryMutationKey() {
  return ['api', '/api/v1/datasource/:datasource_type/:datasource_id/query', 'POST'] as const
}

export function getPostApiV1DatasourceDatasourceTypeDatasourceIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DatasourceDatasourceTypeDatasourceIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.datasource[':datasource_type'][':datasource_id'].query.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DatasourceDatasourceTypeDatasourceIdQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['query']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['query']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DatasourceDatasourceTypeDatasourceIdQueryMutationOptions<
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

export function getPostApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexMutationKey() {
  return [
    'api',
    '/api/v1/datasource/:datasource_type/:datasource_id/validate_expression/',
    'POST',
  ] as const
}

export function getPostApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['validate_expression']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['validate_expression']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['validate_expression']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.datasource[':datasource_type'][
          ':datasource_id'
        ].validate_expression.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['validate_expression']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['validate_expression']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiV1DatasourceDatasourceTypeDatasourceIdValidateExpressionIndexMutationOptions<
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

export function getApiV1EmbeddedDashboardUuidQueryKey(
  args: InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>,
) {
  return ['api', '/api/v1/embedded_dashboard/:uuid', args] as const
}

export function getApiV1EmbeddedDashboardUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmbeddedDashboardUuidQueryKey>
  >({
    queryKey: getApiV1EmbeddedDashboardUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.embedded_dashboard[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EmbeddedDashboardUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmbeddedDashboardUuidQueryKey>
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
      ...getApiV1EmbeddedDashboardUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EmbeddedDashboardUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EmbeddedDashboardUuidQueryKey>
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
      ...getApiV1EmbeddedDashboardUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ExploreIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.explore.index.$get>,
) {
  return ['api', '/api/v1/explore/', args] as const
}

export function getApiV1ExploreIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.explore.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExploreIndexQueryKey>
  >({
    queryKey: getApiV1ExploreIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.explore.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ExploreIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.explore.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ExploreIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ExploreIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ExploreIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.explore.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ExploreIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ExploreIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1ExploreFormDataMutationKey() {
  return ['api', '/api/v1/explore/form_data', 'POST'] as const
}

export function getPostApiV1ExploreFormDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.form_data.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.explore.form_data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExploreFormDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.explore.form_data.$post>) {
      return parseResponse(client.api.v1.explore.form_data.$post(args, options))
    },
  })
}

export function usePostApiV1ExploreFormData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.form_data.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.explore.form_data.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ExploreFormDataMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ExploreFormDataKeyQueryKey(
  args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>,
) {
  return ['api', '/api/v1/explore/form_data/:key', args] as const
}

export function getApiV1ExploreFormDataKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExploreFormDataKeyQueryKey>
  >({
    queryKey: getApiV1ExploreFormDataKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.explore.form_data[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ExploreFormDataKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ExploreFormDataKeyQueryKey>
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
      ...getApiV1ExploreFormDataKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ExploreFormDataKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ExploreFormDataKeyQueryKey>
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
      ...getApiV1ExploreFormDataKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1ExploreFormDataKeyMutationKey() {
  return ['api', '/api/v1/explore/form_data/:key', 'PUT'] as const
}

export function getPutApiV1ExploreFormDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ExploreFormDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$put']>,
    ) {
      return parseResponse(client.api.v1.explore.form_data[':key'].$put(args, options))
    },
  })
}

export function usePutApiV1ExploreFormDataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ExploreFormDataKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ExploreFormDataKeyMutationKey() {
  return ['api', '/api/v1/explore/form_data/:key', 'DELETE'] as const
}

export function getDeleteApiV1ExploreFormDataKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ExploreFormDataKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$delete']>,
    ) {
      return parseResponse(client.api.v1.explore.form_data[':key'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ExploreFormDataKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ExploreFormDataKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ExplorePermalinkMutationKey() {
  return ['api', '/api/v1/explore/permalink', 'POST'] as const
}

export function getPostApiV1ExplorePermalinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.permalink.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.explore.permalink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExplorePermalinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.explore.permalink.$post>) {
      return parseResponse(client.api.v1.explore.permalink.$post(args, options))
    },
  })
}

export function usePostApiV1ExplorePermalink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.permalink.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.explore.permalink.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ExplorePermalinkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ExplorePermalinkKeyQueryKey(
  args: InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>,
) {
  return ['api', '/api/v1/explore/permalink/:key', args] as const
}

export function getApiV1ExplorePermalinkKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExplorePermalinkKeyQueryKey>
  >({
    queryKey: getApiV1ExplorePermalinkKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.explore.permalink[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ExplorePermalinkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ExplorePermalinkKeyQueryKey>
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
      ...getApiV1ExplorePermalinkKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ExplorePermalinkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ExplorePermalinkKeyQueryKey>
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
      ...getApiV1ExplorePermalinkKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1LogIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.log.index.$get>,
) {
  return ['api', '/api/v1/log/', args] as const
}

export function getApiV1LogIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.log.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogIndexQueryKey>
  >({
    queryKey: getApiV1LogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1LogIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.log.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1LogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1LogIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.log.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1LogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1LogIndexMutationKey() {
  return ['api', '/api/v1/log/', 'POST'] as const
}

export function getPostApiV1LogIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.log.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LogIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.log.index.$post>) {
      return parseResponse(client.api.v1.log.index.$post(args, options))
    },
  })
}

export function usePostApiV1LogIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.log.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LogIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1LogRecentActivityIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>,
) {
  return ['api', '/api/v1/log/recent_activity/', args] as const
}

export function getApiV1LogRecentActivityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogRecentActivityIndexQueryKey>
  >({
    queryKey: getApiV1LogRecentActivityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log.recent_activity.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1LogRecentActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LogRecentActivityIndexQueryKey>
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
      ...getApiV1LogRecentActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1LogRecentActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LogRecentActivityIndexQueryKey>
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
      ...getApiV1LogRecentActivityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1LogPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>,
) {
  return ['api', '/api/v1/log/:pk', args] as const
}

export function getApiV1LogPkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogPkQueryKey>
  >({
    queryKey: getApiV1LogPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.log[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1LogPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LogPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1LogPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1LogPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1LogPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1LogPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1MeIndexQueryKey() {
  return ['api', '/api/v1/me/'] as const
}

export function getApiV1MeIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeIndexQueryKey>
  >({
    queryKey: getApiV1MeIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.me.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1MeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1MeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MeIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1MeIndexMutationKey() {
  return ['api', '/api/v1/me/', 'PUT'] as const
}

export function getPutApiV1MeIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.me.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1MeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.me.index.$put>) {
      return parseResponse(client.api.v1.me.index.$put(args, options))
    },
  })
}

export function usePutApiV1MeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.me.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1MeIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MeApiKeyScopesIndexQueryKey() {
  return ['api', '/api/v1/me/api_key_scopes/'] as const
}

export function getApiV1MeApiKeyScopesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeApiKeyScopesIndexQueryKey>
  >({
    queryKey: getApiV1MeApiKeyScopesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.me.api_key_scopes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1MeApiKeyScopesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeApiKeyScopesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MeApiKeyScopesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1MeApiKeyScopesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeApiKeyScopesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MeApiKeyScopesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1MeRolesIndexQueryKey() {
  return ['api', '/api/v1/me/roles/'] as const
}

export function getApiV1MeRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeRolesIndexQueryKey>
  >({
    queryKey: getApiV1MeRolesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.me.roles.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1MeRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeRolesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MeRolesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1MeRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeRolesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MeRolesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1MenuIndexQueryKey() {
  return ['api', '/api/v1/menu/'] as const
}

export function getApiV1MenuIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MenuIndexQueryKey>
  >({
    queryKey: getApiV1MenuIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.menu.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1MenuIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MenuIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MenuIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1MenuIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MenuIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MenuIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1QueryIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.query.index.$get>,
) {
  return ['api', '/api/v1/query/', args] as const
}

export function getApiV1QueryIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.query.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryIndexQueryKey>
  >({
    queryKey: getApiV1QueryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.query.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1QueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.query.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1QueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1QueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.query.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1QueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1QueryDistinctColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/query/distinct/:column_name', args] as const
}

export function getApiV1QueryDistinctColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryDistinctColumnNameQueryKey>
  >({
    queryKey: getApiV1QueryDistinctColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.query.distinct[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1QueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryDistinctColumnNameQueryKey>
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
      ...getApiV1QueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1QueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryDistinctColumnNameQueryKey>
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
      ...getApiV1QueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1QueryRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/query/related/:column_name', args] as const
}

export function getApiV1QueryRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1QueryRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.query.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1QueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryRelatedColumnNameQueryKey>
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
      ...getApiV1QueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1QueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryRelatedColumnNameQueryKey>
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
      ...getApiV1QueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1QueryStopMutationKey() {
  return ['api', '/api/v1/query/stop', 'POST'] as const
}

export function getPostApiV1QueryStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.stop.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.query.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1QueryStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.query.stop.$post>) {
      return parseResponse(client.api.v1.query.stop.$post(args, options))
    },
  })
}

export function usePostApiV1QueryStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.stop.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.query.stop.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1QueryStopMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1QueryUpdatedSinceQueryKey(
  args: InferRequestType<typeof client.api.v1.query.updated_since.$get>,
) {
  return ['api', '/api/v1/query/updated_since', args] as const
}

export function getApiV1QueryUpdatedSinceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.query.updated_since.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryUpdatedSinceQueryKey>
  >({
    queryKey: getApiV1QueryUpdatedSinceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.query.updated_since.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1QueryUpdatedSince<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.query.updated_since.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryUpdatedSinceQueryKey>
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
      ...getApiV1QueryUpdatedSinceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1QueryUpdatedSince<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.query.updated_since.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryUpdatedSinceQueryKey>
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
      ...getApiV1QueryUpdatedSinceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1QueryPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>,
) {
  return ['api', '/api/v1/query/:pk', args] as const
}

export function getApiV1QueryPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryPkQueryKey>
  >({
    queryKey: getApiV1QueryPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.query[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1QueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1QueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1QueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1QueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1QueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ReportIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.report.index.$get>,
) {
  return ['api', '/api/v1/report/', args] as const
}

export function getApiV1ReportIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.report.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportIndexQueryKey>
  >({
    queryKey: getApiV1ReportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ReportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.report.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ReportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ReportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.report.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ReportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1ReportIndexMutationKey() {
  return ['api', '/api/v1/report/', 'POST'] as const
}

export function getPostApiV1ReportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.report.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.report.index.$post>) {
      return parseResponse(client.api.v1.report.index.$post(args, options))
    },
  })
}

export function usePostApiV1ReportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.report.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ReportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ReportIndexMutationKey() {
  return ['api', '/api/v1/report/', 'DELETE'] as const
}

export function getDeleteApiV1ReportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.report.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ReportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.report.index.$delete>) {
      return parseResponse(client.api.v1.report.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ReportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.report.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ReportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ReportInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.report._info.$get>,
) {
  return ['api', '/api/v1/report/_info', args] as const
}

export function getApiV1ReportInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.report._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportInfoQueryKey>
  >({
    queryKey: getApiV1ReportInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ReportInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.report._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ReportInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ReportInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.report._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ReportInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ReportConfigurationIndexQueryKey() {
  return ['api', '/api/v1/report/configuration/'] as const
}

export function getApiV1ReportConfigurationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportConfigurationIndexQueryKey>
  >({
    queryKey: getApiV1ReportConfigurationIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report.configuration.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ReportConfigurationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportConfigurationIndexQueryKey>
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
      ...getApiV1ReportConfigurationIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ReportConfigurationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportConfigurationIndexQueryKey>
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
      ...getApiV1ReportConfigurationIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1ReportConfigurationIndexMutationKey() {
  return ['api', '/api/v1/report/configuration/', 'PUT'] as const
}

export function getPutApiV1ReportConfigurationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.report.configuration.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ReportConfigurationIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.report.configuration.index.$put>) {
      return parseResponse(client.api.v1.report.configuration.index.$put(args, options))
    },
  })
}

export function usePutApiV1ReportConfigurationIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.report.configuration.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ReportConfigurationIndexMutationOptions<
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

export function getApiV1ReportRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/report/related/:column_name', args] as const
}

export function getApiV1ReportRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1ReportRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ReportRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportRelatedColumnNameQueryKey>
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
      ...getApiV1ReportRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ReportRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportRelatedColumnNameQueryKey>
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
      ...getApiV1ReportRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ReportSlackChannelsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>,
) {
  return ['api', '/api/v1/report/slack_channels/', args] as const
}

export function getApiV1ReportSlackChannelsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportSlackChannelsIndexQueryKey>
  >({
    queryKey: getApiV1ReportSlackChannelsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report.slack_channels.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ReportSlackChannelsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportSlackChannelsIndexQueryKey>
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
      ...getApiV1ReportSlackChannelsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ReportSlackChannelsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportSlackChannelsIndexQueryKey>
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
      ...getApiV1ReportSlackChannelsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1ReportSubscribeMutationKey() {
  return ['api', '/api/v1/report/subscribe', 'POST'] as const
}

export function getPostApiV1ReportSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.subscribe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.report.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.report.subscribe.$post>) {
      return parseResponse(client.api.v1.report.subscribe.$post(args, options))
    },
  })
}

export function usePostApiV1ReportSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.subscribe.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.report.subscribe.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ReportSubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ReportPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>,
) {
  return ['api', '/api/v1/report/:pk', args] as const
}

export function getApiV1ReportPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportPkQueryKey>
  >({
    queryKey: getApiV1ReportPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ReportPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ReportPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ReportPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ReportPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1ReportPkMutationKey() {
  return ['api', '/api/v1/report/:pk', 'PUT'] as const
}

export function getPutApiV1ReportPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.report)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ReportPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.report)[':pk']['$put']>) {
      return parseResponse(client.api.v1.report[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1ReportPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.report)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ReportPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ReportPkMutationKey() {
  return ['api', '/api/v1/report/:pk', 'DELETE'] as const
}

export function getDeleteApiV1ReportPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.report)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ReportPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.report)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.report[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ReportPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.report)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ReportPkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportPkExecuteMutationKey() {
  return ['api', '/api/v1/report/:pk/execute', 'POST'] as const
}

export function getPostApiV1ReportPkExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['execute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.report)[':pk']['execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportPkExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.report)[':pk']['execute']['$post']>,
    ) {
      return parseResponse(client.api.v1.report[':pk'].execute.$post(args, options))
    },
  })
}

export function usePostApiV1ReportPkExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['execute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.report)[':pk']['execute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ReportPkExecuteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ReportPkLogIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>,
) {
  return ['api', '/api/v1/report/:pk/log/', args] as const
}

export function getApiV1ReportPkLogIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportPkLogIndexQueryKey>
  >({
    queryKey: getApiV1ReportPkLogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report[':pk'].log.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ReportPkLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportPkLogIndexQueryKey>
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
      ...getApiV1ReportPkLogIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ReportPkLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportPkLogIndexQueryKey>
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
      ...getApiV1ReportPkLogIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ReportPkLogLogIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>,
) {
  return ['api', '/api/v1/report/:pk/log/:log_id', args] as const
}

export function getApiV1ReportPkLogLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportPkLogLogIdQueryKey>
  >({
    queryKey: getApiV1ReportPkLogLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.report[':pk'].log[':log_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ReportPkLogLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportPkLogLogIdQueryKey>
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
      ...getApiV1ReportPkLogLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ReportPkLogLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ReportPkLogLogIdQueryKey>
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
      ...getApiV1ReportPkLogLogIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1RowlevelsecurityIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>,
) {
  return ['api', '/api/v1/rowlevelsecurity/', args] as const
}

export function getApiV1RowlevelsecurityIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityIndexQueryKey>
  >({
    queryKey: getApiV1RowlevelsecurityIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.rowlevelsecurity.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1RowlevelsecurityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityIndexQueryKey>
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
      ...getApiV1RowlevelsecurityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1RowlevelsecurityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityIndexQueryKey>
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
      ...getApiV1RowlevelsecurityIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1RowlevelsecurityIndexMutationKey() {
  return ['api', '/api/v1/rowlevelsecurity/', 'POST'] as const
}

export function getPostApiV1RowlevelsecurityIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RowlevelsecurityIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$post>) {
      return parseResponse(client.api.v1.rowlevelsecurity.index.$post(args, options))
    },
  })
}

export function usePostApiV1RowlevelsecurityIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1RowlevelsecurityIndexMutationOptions<
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

export function getDeleteApiV1RowlevelsecurityIndexMutationKey() {
  return ['api', '/api/v1/rowlevelsecurity/', 'DELETE'] as const
}

export function getDeleteApiV1RowlevelsecurityIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RowlevelsecurityIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$delete>) {
      return parseResponse(client.api.v1.rowlevelsecurity.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1RowlevelsecurityIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1RowlevelsecurityIndexMutationOptions<
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

export function getApiV1RowlevelsecurityInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>,
) {
  return ['api', '/api/v1/rowlevelsecurity/_info', args] as const
}

export function getApiV1RowlevelsecurityInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityInfoQueryKey>
  >({
    queryKey: getApiV1RowlevelsecurityInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.rowlevelsecurity._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1RowlevelsecurityInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityInfoQueryKey>
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
      ...getApiV1RowlevelsecurityInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1RowlevelsecurityInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityInfoQueryKey>
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
      ...getApiV1RowlevelsecurityInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1RowlevelsecurityRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/rowlevelsecurity/related/:column_name', args] as const
}

export function getApiV1RowlevelsecurityRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1RowlevelsecurityRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.rowlevelsecurity.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1RowlevelsecurityRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityRelatedColumnNameQueryKey>
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
      ...getApiV1RowlevelsecurityRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1RowlevelsecurityRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityRelatedColumnNameQueryKey>
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
      ...getApiV1RowlevelsecurityRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1RowlevelsecurityPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>,
) {
  return ['api', '/api/v1/rowlevelsecurity/:pk', args] as const
}

export function getApiV1RowlevelsecurityPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityPkQueryKey>
  >({
    queryKey: getApiV1RowlevelsecurityPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.rowlevelsecurity[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1RowlevelsecurityPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityPkQueryKey>
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
      ...getApiV1RowlevelsecurityPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1RowlevelsecurityPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RowlevelsecurityPkQueryKey>
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
      ...getApiV1RowlevelsecurityPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1RowlevelsecurityPkMutationKey() {
  return ['api', '/api/v1/rowlevelsecurity/:pk', 'PUT'] as const
}

export function getPutApiV1RowlevelsecurityPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1RowlevelsecurityPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$put']>,
    ) {
      return parseResponse(client.api.v1.rowlevelsecurity[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1RowlevelsecurityPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1RowlevelsecurityPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1RowlevelsecurityPkMutationKey() {
  return ['api', '/api/v1/rowlevelsecurity/:pk', 'DELETE'] as const
}

export function getDeleteApiV1RowlevelsecurityPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1RowlevelsecurityPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.rowlevelsecurity[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1RowlevelsecurityPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1RowlevelsecurityPkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SavedQueryIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.saved_query.index.$get>,
) {
  return ['api', '/api/v1/saved_query/', args] as const
}

export function getApiV1SavedQueryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryIndexQueryKey>
  >({
    queryKey: getApiV1SavedQueryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.saved_query.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SavedQueryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SavedQueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SavedQueryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SavedQueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1SavedQueryIndexMutationKey() {
  return ['api', '/api/v1/saved_query/', 'POST'] as const
}

export function getPostApiV1SavedQueryIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.saved_query.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SavedQueryIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.saved_query.index.$post>) {
      return parseResponse(client.api.v1.saved_query.index.$post(args, options))
    },
  })
}

export function usePostApiV1SavedQueryIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.saved_query.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SavedQueryIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SavedQueryIndexMutationKey() {
  return ['api', '/api/v1/saved_query/', 'DELETE'] as const
}

export function getDeleteApiV1SavedQueryIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.saved_query.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SavedQueryIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.saved_query.index.$delete>) {
      return parseResponse(client.api.v1.saved_query.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1SavedQueryIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.saved_query.index.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.saved_query.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SavedQueryIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SavedQueryInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.saved_query._info.$get>,
) {
  return ['api', '/api/v1/saved_query/_info', args] as const
}

export function getApiV1SavedQueryInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryInfoQueryKey>
  >({
    queryKey: getApiV1SavedQueryInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.saved_query._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SavedQueryInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SavedQueryInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SavedQueryInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SavedQueryInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1SavedQueryDistinctColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/saved_query/distinct/:column_name', args] as const
}

export function getApiV1SavedQueryDistinctColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryDistinctColumnNameQueryKey>
  >({
    queryKey: getApiV1SavedQueryDistinctColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.saved_query.distinct[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SavedQueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryDistinctColumnNameQueryKey>
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
      ...getApiV1SavedQueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SavedQueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryDistinctColumnNameQueryKey>
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
      ...getApiV1SavedQueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SavedQueryExportIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.saved_query.export.index.$get>,
) {
  return ['api', '/api/v1/saved_query/export/', args] as const
}

export function getApiV1SavedQueryExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryExportIndexQueryKey>
  >({
    queryKey: getApiV1SavedQueryExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.saved_query.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SavedQueryExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryExportIndexQueryKey>
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
      ...getApiV1SavedQueryExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SavedQueryExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.saved_query.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryExportIndexQueryKey>
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
      ...getApiV1SavedQueryExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SavedQueryImportIndexMutationKey() {
  return ['api', '/api/v1/saved_query/import/', 'POST'] as const
}

export function getPostApiV1SavedQueryImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.saved_query.import.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.saved_query.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SavedQueryImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.saved_query.import.index.$post>) {
      return parseResponse(client.api.v1.saved_query.import.index.$post(args, options))
    },
  })
}

export function usePostApiV1SavedQueryImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.saved_query.import.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.saved_query.import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SavedQueryImportIndexMutationOptions<
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

export function getApiV1SavedQueryRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/saved_query/related/:column_name', args] as const
}

export function getApiV1SavedQueryRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1SavedQueryRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.saved_query.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SavedQueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryRelatedColumnNameQueryKey>
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
      ...getApiV1SavedQueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SavedQueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryRelatedColumnNameQueryKey>
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
      ...getApiV1SavedQueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SavedQueryPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>,
) {
  return ['api', '/api/v1/saved_query/:pk', args] as const
}

export function getApiV1SavedQueryPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryPkQueryKey>
  >({
    queryKey: getApiV1SavedQueryPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.saved_query[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SavedQueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SavedQueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SavedQueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SavedQueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SavedQueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1SavedQueryPkMutationKey() {
  return ['api', '/api/v1/saved_query/:pk', 'PUT'] as const
}

export function getPutApiV1SavedQueryPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SavedQueryPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$put']>) {
      return parseResponse(client.api.v1.saved_query[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1SavedQueryPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SavedQueryPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SavedQueryPkMutationKey() {
  return ['api', '/api/v1/saved_query/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SavedQueryPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SavedQueryPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.saved_query[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SavedQueryPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SavedQueryPkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SecurityCsrfTokenIndexQueryKey() {
  return ['api', '/api/v1/security/csrf_token/'] as const
}

export function getApiV1SecurityCsrfTokenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityCsrfTokenIndexQueryKey>
  >({
    queryKey: getApiV1SecurityCsrfTokenIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.csrf_token.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityCsrfTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityCsrfTokenIndexQueryKey>
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
      ...getApiV1SecurityCsrfTokenIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityCsrfTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityCsrfTokenIndexQueryKey>
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
      ...getApiV1SecurityCsrfTokenIndexQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityGroupsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.groups.index.$get>,
) {
  return ['api', '/api/v1/security/groups/', args] as const
}

export function getApiV1SecurityGroupsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.groups.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityGroupsIndexQueryKey>
  >({
    queryKey: getApiV1SecurityGroupsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.groups.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.groups.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityGroupsIndexQueryKey>
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
      ...getApiV1SecurityGroupsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.groups.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityGroupsIndexQueryKey>
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
      ...getApiV1SecurityGroupsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SecurityGroupsIndexMutationKey() {
  return ['api', '/api/v1/security/groups/', 'POST'] as const
}

export function getPostApiV1SecurityGroupsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityGroupsIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.security.groups.index.$post(undefined, options))
    },
  })
}

export function usePostApiV1SecurityGroupsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.groups.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityGroupsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SecurityGroupsInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.security.groups._info.$get>,
) {
  return ['api', '/api/v1/security/groups/_info', args] as const
}

export function getApiV1SecurityGroupsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.groups._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityGroupsInfoQueryKey>
  >({
    queryKey: getApiV1SecurityGroupsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.groups._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityGroupsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.groups._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityGroupsInfoQueryKey>
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
      ...getApiV1SecurityGroupsInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityGroupsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.groups._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityGroupsInfoQueryKey>
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
      ...getApiV1SecurityGroupsInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityGroupsPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>,
) {
  return ['api', '/api/v1/security/groups/:pk', args] as const
}

export function getApiV1SecurityGroupsPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityGroupsPkQueryKey>
  >({
    queryKey: getApiV1SecurityGroupsPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.groups[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityGroupsPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityGroupsPkQueryKey>
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
      ...getApiV1SecurityGroupsPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityGroupsPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityGroupsPkQueryKey>
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
      ...getApiV1SecurityGroupsPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1SecurityGroupsPkMutationKey() {
  return ['api', '/api/v1/security/groups/:pk', 'PUT'] as const
}

export function getPutApiV1SecurityGroupsPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecurityGroupsPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$put']>,
    ) {
      return parseResponse(client.api.v1.security.groups[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1SecurityGroupsPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SecurityGroupsPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SecurityGroupsPkMutationKey() {
  return ['api', '/api/v1/security/groups/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SecurityGroupsPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecurityGroupsPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.security.groups[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SecurityGroupsPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SecurityGroupsPkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SecurityGuestTokenIndexMutationKey() {
  return ['api', '/api/v1/security/guest_token/', 'POST'] as const
}

export function getPostApiV1SecurityGuestTokenIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.guest_token.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.security.guest_token.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityGuestTokenIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.security.guest_token.index.$post>,
    ) {
      return parseResponse(client.api.v1.security.guest_token.index.$post(args, options))
    },
  })
}

export function usePostApiV1SecurityGuestTokenIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.guest_token.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.security.guest_token.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityGuestTokenIndexMutationOptions<
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

export function getPostApiV1SecurityLoginMutationKey() {
  return ['api', '/api/v1/security/login', 'POST'] as const
}

export function getPostApiV1SecurityLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.security.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.security.login.$post>) {
      return parseResponse(client.api.v1.security.login.$post(args, options))
    },
  })
}

export function usePostApiV1SecurityLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.security.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityLoginMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SecurityPasswordRecoveryIndexMutationKey() {
  return ['api', '/api/v1/security/password_recovery/', 'POST'] as const
}

export function getPostApiV1SecurityPasswordRecoveryIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.password_recovery.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.security.password_recovery.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityPasswordRecoveryIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.security.password_recovery.index.$post>,
    ) {
      return parseResponse(client.api.v1.security.password_recovery.index.$post(args, options))
    },
  })
}

export function usePostApiV1SecurityPasswordRecoveryIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.password_recovery.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.security.password_recovery.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityPasswordRecoveryIndexMutationOptions<
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

export function getPostApiV1SecurityPasswordRecoveryResetIndexMutationKey() {
  return ['api', '/api/v1/security/password_recovery/reset/', 'POST'] as const
}

export function getPostApiV1SecurityPasswordRecoveryResetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.password_recovery.reset.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.security.password_recovery.reset.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityPasswordRecoveryResetIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.security.password_recovery.reset.index.$post>,
    ) {
      return parseResponse(
        client.api.v1.security.password_recovery.reset.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1SecurityPasswordRecoveryResetIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.password_recovery.reset.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.security.password_recovery.reset.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityPasswordRecoveryResetIndexMutationOptions<
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

export function getApiV1SecurityPermissionsResourcesIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>,
) {
  return ['api', '/api/v1/security/permissions-resources/', args] as const
}

export function getApiV1SecurityPermissionsResourcesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsResourcesIndexQueryKey>
  >({
    queryKey: getApiV1SecurityPermissionsResourcesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security['permissions-resources'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityPermissionsResourcesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security)['permissions-resources']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsResourcesIndexQueryKey>
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
      ...getApiV1SecurityPermissionsResourcesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityPermissionsResourcesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security)['permissions-resources']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsResourcesIndexQueryKey>
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
      ...getApiV1SecurityPermissionsResourcesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SecurityPermissionsResourcesIndexMutationKey() {
  return ['api', '/api/v1/security/permissions-resources/', 'POST'] as const
}

export function getPostApiV1SecurityPermissionsResourcesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityPermissionsResourcesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.security)['permissions-resources']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.security['permissions-resources'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1SecurityPermissionsResourcesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security)['permissions-resources']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.security)['permissions-resources']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityPermissionsResourcesIndexMutationOptions<
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

export function getApiV1SecurityPermissionsResourcesInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>,
) {
  return ['api', '/api/v1/security/permissions-resources/_info', args] as const
}

export function getApiV1SecurityPermissionsResourcesInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsResourcesInfoQueryKey>
  >({
    queryKey: getApiV1SecurityPermissionsResourcesInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security['permissions-resources']._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityPermissionsResourcesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security)['permissions-resources']['_info']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsResourcesInfoQueryKey>
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
      ...getApiV1SecurityPermissionsResourcesInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityPermissionsResourcesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security)['permissions-resources']['_info']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsResourcesInfoQueryKey>
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
      ...getApiV1SecurityPermissionsResourcesInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityPermissionsResourcesPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>,
) {
  return ['api', '/api/v1/security/permissions-resources/:pk', args] as const
}

export function getApiV1SecurityPermissionsResourcesPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsResourcesPkQueryKey>
  >({
    queryKey: getApiV1SecurityPermissionsResourcesPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security['permissions-resources'][':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityPermissionsResourcesPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsResourcesPkQueryKey>
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
      ...getApiV1SecurityPermissionsResourcesPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityPermissionsResourcesPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsResourcesPkQueryKey>
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
      ...getApiV1SecurityPermissionsResourcesPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1SecurityPermissionsResourcesPkMutationKey() {
  return ['api', '/api/v1/security/permissions-resources/:pk', 'PUT'] as const
}

export function getPutApiV1SecurityPermissionsResourcesPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecurityPermissionsResourcesPkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.security)['permissions-resources'][':pk']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.security['permissions-resources'][':pk'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1SecurityPermissionsResourcesPk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SecurityPermissionsResourcesPkMutationOptions<
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

export function getDeleteApiV1SecurityPermissionsResourcesPkMutationKey() {
  return ['api', '/api/v1/security/permissions-resources/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SecurityPermissionsResourcesPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecurityPermissionsResourcesPkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.security)['permissions-resources'][':pk']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.security['permissions-resources'][':pk'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1SecurityPermissionsResourcesPk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security)['permissions-resources'][':pk']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.security)['permissions-resources'][':pk']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SecurityPermissionsResourcesPkMutationOptions<
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

export function getApiV1SecurityPermissionsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.permissions.index.$get>,
) {
  return ['api', '/api/v1/security/permissions/', args] as const
}

export function getApiV1SecurityPermissionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.permissions.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsIndexQueryKey>
  >({
    queryKey: getApiV1SecurityPermissionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.permissions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityPermissionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.permissions.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsIndexQueryKey>
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
      ...getApiV1SecurityPermissionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityPermissionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.permissions.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsIndexQueryKey>
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
      ...getApiV1SecurityPermissionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityPermissionsInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.security.permissions._info.$get>,
) {
  return ['api', '/api/v1/security/permissions/_info', args] as const
}

export function getApiV1SecurityPermissionsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.permissions._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsInfoQueryKey>
  >({
    queryKey: getApiV1SecurityPermissionsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.permissions._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityPermissionsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.permissions._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsInfoQueryKey>
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
      ...getApiV1SecurityPermissionsInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityPermissionsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.permissions._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsInfoQueryKey>
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
      ...getApiV1SecurityPermissionsInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityPermissionsPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>,
) {
  return ['api', '/api/v1/security/permissions/:pk', args] as const
}

export function getApiV1SecurityPermissionsPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsPkQueryKey>
  >({
    queryKey: getApiV1SecurityPermissionsPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.permissions[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityPermissionsPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsPkQueryKey>
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
      ...getApiV1SecurityPermissionsPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityPermissionsPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityPermissionsPkQueryKey>
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
      ...getApiV1SecurityPermissionsPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SecurityRefreshMutationKey() {
  return ['api', '/api/v1/security/refresh', 'POST'] as const
}

export function getPostApiV1SecurityRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.refresh.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityRefreshMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.security.refresh.$post(undefined, options))
    },
  })
}

export function usePostApiV1SecurityRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.refresh.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SecurityResourcesIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.resources.index.$get>,
) {
  return ['api', '/api/v1/security/resources/', args] as const
}

export function getApiV1SecurityResourcesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.resources.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityResourcesIndexQueryKey>
  >({
    queryKey: getApiV1SecurityResourcesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.resources.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityResourcesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.resources.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityResourcesIndexQueryKey>
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
      ...getApiV1SecurityResourcesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityResourcesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.resources.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityResourcesIndexQueryKey>
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
      ...getApiV1SecurityResourcesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SecurityResourcesIndexMutationKey() {
  return ['api', '/api/v1/security/resources/', 'POST'] as const
}

export function getPostApiV1SecurityResourcesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.resources.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.security.resources.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityResourcesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.security.resources.index.$post>) {
      return parseResponse(client.api.v1.security.resources.index.$post(args, options))
    },
  })
}

export function usePostApiV1SecurityResourcesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.resources.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.security.resources.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityResourcesIndexMutationOptions<
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

export function getApiV1SecurityResourcesInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.security.resources._info.$get>,
) {
  return ['api', '/api/v1/security/resources/_info', args] as const
}

export function getApiV1SecurityResourcesInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.resources._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityResourcesInfoQueryKey>
  >({
    queryKey: getApiV1SecurityResourcesInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.resources._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityResourcesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.resources._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityResourcesInfoQueryKey>
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
      ...getApiV1SecurityResourcesInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityResourcesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.resources._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityResourcesInfoQueryKey>
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
      ...getApiV1SecurityResourcesInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityResourcesPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>,
) {
  return ['api', '/api/v1/security/resources/:pk', args] as const
}

export function getApiV1SecurityResourcesPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityResourcesPkQueryKey>
  >({
    queryKey: getApiV1SecurityResourcesPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.resources[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityResourcesPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityResourcesPkQueryKey>
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
      ...getApiV1SecurityResourcesPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityResourcesPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityResourcesPkQueryKey>
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
      ...getApiV1SecurityResourcesPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1SecurityResourcesPkMutationKey() {
  return ['api', '/api/v1/security/resources/:pk', 'PUT'] as const
}

export function getPutApiV1SecurityResourcesPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecurityResourcesPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$put']>,
    ) {
      return parseResponse(client.api.v1.security.resources[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1SecurityResourcesPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SecurityResourcesPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SecurityResourcesPkMutationKey() {
  return ['api', '/api/v1/security/resources/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SecurityResourcesPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecurityResourcesPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.security.resources[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SecurityResourcesPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SecurityResourcesPkMutationOptions<
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

export function getApiV1SecurityRolesIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.roles.index.$get>,
) {
  return ['api', '/api/v1/security/roles/', args] as const
}

export function getApiV1SecurityRolesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesIndexQueryKey>
  >({
    queryKey: getApiV1SecurityRolesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.roles.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesIndexQueryKey>
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
      ...getApiV1SecurityRolesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesIndexQueryKey>
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
      ...getApiV1SecurityRolesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SecurityRolesIndexMutationKey() {
  return ['api', '/api/v1/security/roles/', 'POST'] as const
}

export function getPostApiV1SecurityRolesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.security.roles.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityRolesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.security.roles.index.$post>) {
      return parseResponse(client.api.v1.security.roles.index.$post(args, options))
    },
  })
}

export function usePostApiV1SecurityRolesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.roles.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.security.roles.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityRolesIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SecurityRolesInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.security.roles._info.$get>,
) {
  return ['api', '/api/v1/security/roles/_info', args] as const
}

export function getApiV1SecurityRolesInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesInfoQueryKey>
  >({
    queryKey: getApiV1SecurityRolesInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.roles._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityRolesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesInfoQueryKey>
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
      ...getApiV1SecurityRolesInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityRolesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesInfoQueryKey>
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
      ...getApiV1SecurityRolesInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityRolesSearchIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.roles.search.index.$get>,
) {
  return ['api', '/api/v1/security/roles/search/', args] as const
}

export function getApiV1SecurityRolesSearchIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles.search.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesSearchIndexQueryKey>
  >({
    queryKey: getApiV1SecurityRolesSearchIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.roles.search.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityRolesSearchIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles.search.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesSearchIndexQueryKey>
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
      ...getApiV1SecurityRolesSearchIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityRolesSearchIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.roles.search.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesSearchIndexQueryKey>
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
      ...getApiV1SecurityRolesSearchIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityRolesPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>,
) {
  return ['api', '/api/v1/security/roles/:pk', args] as const
}

export function getApiV1SecurityRolesPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesPkQueryKey>
  >({
    queryKey: getApiV1SecurityRolesPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.roles[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityRolesPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SecurityRolesPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityRolesPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SecurityRolesPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1SecurityRolesPkMutationKey() {
  return ['api', '/api/v1/security/roles/:pk', 'PUT'] as const
}

export function getPutApiV1SecurityRolesPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecurityRolesPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$put']>) {
      return parseResponse(client.api.v1.security.roles[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1SecurityRolesPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SecurityRolesPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SecurityRolesPkMutationKey() {
  return ['api', '/api/v1/security/roles/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SecurityRolesPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecurityRolesPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.security.roles[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SecurityRolesPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SecurityRolesPkMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1SecurityRolesRoleIdGroupsMutationKey() {
  return ['api', '/api/v1/security/roles/:role_id/groups', 'PUT'] as const
}

export function getPutApiV1SecurityRolesRoleIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.roles)[':role_id']['groups']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['groups']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecurityRolesRoleIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['groups']['$put']>,
    ) {
      return parseResponse(client.api.v1.security.roles[':role_id'].groups.$put(args, options))
    },
  })
}

export function usePutApiV1SecurityRolesRoleIdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.security.roles)[':role_id']['groups']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['groups']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SecurityRolesRoleIdGroupsMutationOptions<
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

export function getPostApiV1SecurityRolesRoleIdPermissionsMutationKey() {
  return ['api', '/api/v1/security/roles/:role_id/permissions', 'POST'] as const
}

export function getPostApiV1SecurityRolesRoleIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.security.roles)[':role_id']['permissions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityRolesRoleIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.security.roles)[':role_id']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.security.roles[':role_id'].permissions.$post(args, options),
      )
    },
  })
}

export function usePostApiV1SecurityRolesRoleIdPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security.roles)[':role_id']['permissions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['permissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityRolesRoleIdPermissionsMutationOptions<
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

export function getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
  >,
) {
  return ['api', '/api/v1/security/roles/:role_id/permissions/', args] as const
}

export function getApiV1SecurityRolesRoleIdPermissionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey>
  >({
    queryKey: getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.roles[':role_id'].permissions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityRolesRoleIdPermissionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey>
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
      ...getApiV1SecurityRolesRoleIdPermissionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityRolesRoleIdPermissionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey>
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
      ...getApiV1SecurityRolesRoleIdPermissionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1SecurityRolesRoleIdUsersMutationKey() {
  return ['api', '/api/v1/security/roles/:role_id/users', 'PUT'] as const
}

export function getPutApiV1SecurityRolesRoleIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.roles)[':role_id']['users']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecurityRolesRoleIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['users']['$put']>,
    ) {
      return parseResponse(client.api.v1.security.roles[':role_id'].users.$put(args, options))
    },
  })
}

export function usePutApiV1SecurityRolesRoleIdUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.security.roles)[':role_id']['users']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.roles)[':role_id']['users']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SecurityRolesRoleIdUsersMutationOptions<
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

export function getApiV1SecuritySubjectIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.subject.index.$get>,
) {
  return ['api', '/api/v1/security/subject/', args] as const
}

export function getApiV1SecuritySubjectIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.subject.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecuritySubjectIndexQueryKey>
  >({
    queryKey: getApiV1SecuritySubjectIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.subject.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecuritySubjectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.subject.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecuritySubjectIndexQueryKey>
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
      ...getApiV1SecuritySubjectIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecuritySubjectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.subject.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecuritySubjectIndexQueryKey>
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
      ...getApiV1SecuritySubjectIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecuritySubjectInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.security.subject._info.$get>,
) {
  return ['api', '/api/v1/security/subject/_info', args] as const
}

export function getApiV1SecuritySubjectInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.subject._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecuritySubjectInfoQueryKey>
  >({
    queryKey: getApiV1SecuritySubjectInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.subject._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecuritySubjectInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.subject._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecuritySubjectInfoQueryKey>
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
      ...getApiV1SecuritySubjectInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecuritySubjectInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.subject._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecuritySubjectInfoQueryKey>
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
      ...getApiV1SecuritySubjectInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecuritySubjectPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>,
) {
  return ['api', '/api/v1/security/subject/:pk', args] as const
}

export function getApiV1SecuritySubjectPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecuritySubjectPkQueryKey>
  >({
    queryKey: getApiV1SecuritySubjectPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.subject[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecuritySubjectPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecuritySubjectPkQueryKey>
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
      ...getApiV1SecuritySubjectPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecuritySubjectPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecuritySubjectPkQueryKey>
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
      ...getApiV1SecuritySubjectPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityUserRegistrationsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>,
) {
  return ['api', '/api/v1/security/user_registrations/', args] as const
}

export function getApiV1SecurityUserRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUserRegistrationsIndexQueryKey>
  >({
    queryKey: getApiV1SecurityUserRegistrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.user_registrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityUserRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUserRegistrationsIndexQueryKey>
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
      ...getApiV1SecurityUserRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityUserRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUserRegistrationsIndexQueryKey>
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
      ...getApiV1SecurityUserRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityUserRegistrationsInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>,
) {
  return ['api', '/api/v1/security/user_registrations/_info', args] as const
}

export function getApiV1SecurityUserRegistrationsInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUserRegistrationsInfoQueryKey>
  >({
    queryKey: getApiV1SecurityUserRegistrationsInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.user_registrations._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityUserRegistrationsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUserRegistrationsInfoQueryKey>
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
      ...getApiV1SecurityUserRegistrationsInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityUserRegistrationsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUserRegistrationsInfoQueryKey>
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
      ...getApiV1SecurityUserRegistrationsInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityUserRegistrationsPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>,
) {
  return ['api', '/api/v1/security/user_registrations/:pk', args] as const
}

export function getApiV1SecurityUserRegistrationsPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUserRegistrationsPkQueryKey>
  >({
    queryKey: getApiV1SecurityUserRegistrationsPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.user_registrations[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityUserRegistrationsPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUserRegistrationsPkQueryKey>
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
      ...getApiV1SecurityUserRegistrationsPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityUserRegistrationsPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUserRegistrationsPkQueryKey>
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
      ...getApiV1SecurityUserRegistrationsPkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1SecurityUserRegistrationsPkMutationKey() {
  return ['api', '/api/v1/security/user_registrations/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SecurityUserRegistrationsPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecurityUserRegistrationsPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.security.user_registrations[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SecurityUserRegistrationsPk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SecurityUserRegistrationsPkMutationOptions<
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

export function getApiV1SecurityUsersIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.security.users.index.$get>,
) {
  return ['api', '/api/v1/security/users/', args] as const
}

export function getApiV1SecurityUsersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.users.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUsersIndexQueryKey>
  >({
    queryKey: getApiV1SecurityUsersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.users.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityUsersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.users.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUsersIndexQueryKey>
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
      ...getApiV1SecurityUsersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityUsersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.users.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUsersIndexQueryKey>
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
      ...getApiV1SecurityUsersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SecurityUsersIndexMutationKey() {
  return ['api', '/api/v1/security/users/', 'POST'] as const
}

export function getPostApiV1SecurityUsersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users.index.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SecurityUsersIndexMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.security.users.index.$post(undefined, options))
    },
  })
}

export function usePostApiV1SecurityUsersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.users.index.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SecurityUsersIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SecurityUsersInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.security.users._info.$get>,
) {
  return ['api', '/api/v1/security/users/_info', args] as const
}

export function getApiV1SecurityUsersInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.users._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUsersInfoQueryKey>
  >({
    queryKey: getApiV1SecurityUsersInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.users._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityUsersInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.users._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUsersInfoQueryKey>
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
      ...getApiV1SecurityUsersInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityUsersInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.security.users._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUsersInfoQueryKey>
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
      ...getApiV1SecurityUsersInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SecurityUsersPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>,
) {
  return ['api', '/api/v1/security/users/:pk', args] as const
}

export function getApiV1SecurityUsersPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUsersPkQueryKey>
  >({
    queryKey: getApiV1SecurityUsersPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.security.users[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SecurityUsersPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUsersPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SecurityUsersPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SecurityUsersPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SecurityUsersPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SecurityUsersPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1SecurityUsersPkMutationKey() {
  return ['api', '/api/v1/security/users/:pk', 'PUT'] as const
}

export function getPutApiV1SecurityUsersPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.users)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SecurityUsersPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$put']>) {
      return parseResponse(client.api.v1.security.users[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1SecurityUsersPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.users)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SecurityUsersPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SecurityUsersPkMutationKey() {
  return ['api', '/api/v1/security/users/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SecurityUsersPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.users)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecurityUsersPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.security.users[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SecurityUsersPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.users)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SecurityUsersPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SecurityUsersPkSessionsMutationKey() {
  return ['api', '/api/v1/security/users/:pk/sessions', 'DELETE'] as const
}

export function getDeleteApiV1SecurityUsersPkSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['sessions']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.security.users)[':pk']['sessions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SecurityUsersPkSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.security.users)[':pk']['sessions']['$delete']>,
    ) {
      return parseResponse(client.api.v1.security.users[':pk'].sessions.$delete(args, options))
    },
  })
}

export function useDeleteApiV1SecurityUsersPkSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.security.users)[':pk']['sessions']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.security.users)[':pk']['sessions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SecurityUsersPkSessionsMutationOptions<
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

export function getApiV1SemanticLayerIndexQueryKey() {
  return ['api', '/api/v1/semantic_layer/'] as const
}

export function getApiV1SemanticLayerIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerIndexQueryKey>
  >({
    queryKey: getApiV1SemanticLayerIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.semantic_layer.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SemanticLayerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SemanticLayerIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SemanticLayerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SemanticLayerIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1SemanticLayerIndexMutationKey() {
  return ['api', '/api/v1/semantic_layer/', 'POST'] as const
}

export function getPostApiV1SemanticLayerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.semantic_layer.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SemanticLayerIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.semantic_layer.index.$post>) {
      return parseResponse(client.api.v1.semantic_layer.index.$post(args, options))
    },
  })
}

export function usePostApiV1SemanticLayerIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.semantic_layer.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SemanticLayerIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SemanticLayerConnectionsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>,
) {
  return ['api', '/api/v1/semantic_layer/connections/', args] as const
}

export function getApiV1SemanticLayerConnectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerConnectionsIndexQueryKey>
  >({
    queryKey: getApiV1SemanticLayerConnectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.semantic_layer.connections.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SemanticLayerConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerConnectionsIndexQueryKey>
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
      ...getApiV1SemanticLayerConnectionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SemanticLayerConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerConnectionsIndexQueryKey>
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
      ...getApiV1SemanticLayerConnectionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SemanticLayerSchemaConfigurationMutationKey() {
  return ['api', '/api/v1/semantic_layer/schema/configuration', 'POST'] as const
}

export function getPostApiV1SemanticLayerSchemaConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.semantic_layer.schema.configuration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.semantic_layer.schema.configuration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SemanticLayerSchemaConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.semantic_layer.schema.configuration.$post>,
    ) {
      return parseResponse(client.api.v1.semantic_layer.schema.configuration.$post(args, options))
    },
  })
}

export function usePostApiV1SemanticLayerSchemaConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.schema.configuration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.semantic_layer.schema.configuration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SemanticLayerSchemaConfigurationMutationOptions<
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

export function getApiV1SemanticLayerTypesQueryKey() {
  return ['api', '/api/v1/semantic_layer/types'] as const
}

export function getApiV1SemanticLayerTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerTypesQueryKey>
  >({
    queryKey: getApiV1SemanticLayerTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.semantic_layer.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SemanticLayerTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SemanticLayerTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SemanticLayerTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SemanticLayerTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1SemanticLayerUuidQueryKey(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>,
) {
  return ['api', '/api/v1/semantic_layer/:uuid', args] as const
}

export function getApiV1SemanticLayerUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerUuidQueryKey>
  >({
    queryKey: getApiV1SemanticLayerUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.semantic_layer[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SemanticLayerUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerUuidQueryKey>
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
      ...getApiV1SemanticLayerUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SemanticLayerUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticLayerUuidQueryKey>
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
      ...getApiV1SemanticLayerUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1SemanticLayerUuidMutationKey() {
  return ['api', '/api/v1/semantic_layer/:uuid', 'PUT'] as const
}

export function getPutApiV1SemanticLayerUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SemanticLayerUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$put']>,
    ) {
      return parseResponse(client.api.v1.semantic_layer[':uuid'].$put(args, options))
    },
  })
}

export function usePutApiV1SemanticLayerUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SemanticLayerUuidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SemanticLayerUuidMutationKey() {
  return ['api', '/api/v1/semantic_layer/:uuid', 'DELETE'] as const
}

export function getDeleteApiV1SemanticLayerUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SemanticLayerUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$delete']>,
    ) {
      return parseResponse(client.api.v1.semantic_layer[':uuid'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SemanticLayerUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SemanticLayerUuidMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SemanticLayerUuidClearCacheMutationKey() {
  return ['api', '/api/v1/semantic_layer/:uuid/clear_cache', 'POST'] as const
}

export function getPostApiV1SemanticLayerUuidClearCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['clear_cache']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['clear_cache']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SemanticLayerUuidClearCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.semantic_layer)[':uuid']['clear_cache']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.semantic_layer[':uuid'].clear_cache.$post(args, options))
    },
  })
}

export function usePostApiV1SemanticLayerUuidClearCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['clear_cache']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['clear_cache']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SemanticLayerUuidClearCacheMutationOptions<
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

export function getPostApiV1SemanticLayerUuidSchemaRuntimeMutationKey() {
  return ['api', '/api/v1/semantic_layer/:uuid/schema/runtime', 'POST'] as const
}

export function getPostApiV1SemanticLayerUuidSchemaRuntimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['schema']['runtime']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['schema']['runtime']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SemanticLayerUuidSchemaRuntimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.semantic_layer)[':uuid']['schema']['runtime']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.semantic_layer[':uuid'].schema.runtime.$post(args, options),
      )
    },
  })
}

export function usePostApiV1SemanticLayerUuidSchemaRuntime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.semantic_layer)[':uuid']['schema']['runtime']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.semantic_layer)[':uuid']['schema']['runtime']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SemanticLayerUuidSchemaRuntimeMutationOptions<
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

export function getPostApiV1SemanticLayerUuidViewsMutationKey() {
  return ['api', '/api/v1/semantic_layer/:uuid/views', 'POST'] as const
}

export function getPostApiV1SemanticLayerUuidViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SemanticLayerUuidViewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>,
    ) {
      return parseResponse(client.api.v1.semantic_layer[':uuid'].views.$post(args, options))
    },
  })
}

export function usePostApiV1SemanticLayerUuidViews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SemanticLayerUuidViewsMutationOptions<
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

export function getPostApiV1SemanticViewIndexMutationKey() {
  return ['api', '/api/v1/semantic_view/', 'POST'] as const
}

export function getPostApiV1SemanticViewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_view.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.semantic_view.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SemanticViewIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.semantic_view.index.$post>) {
      return parseResponse(client.api.v1.semantic_view.index.$post(args, options))
    },
  })
}

export function usePostApiV1SemanticViewIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_view.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.semantic_view.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SemanticViewIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SemanticViewIndexMutationKey() {
  return ['api', '/api/v1/semantic_view/', 'DELETE'] as const
}

export function getDeleteApiV1SemanticViewIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_view.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.semantic_view.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SemanticViewIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.semantic_view.index.$delete>) {
      return parseResponse(client.api.v1.semantic_view.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1SemanticViewIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.semantic_view.index.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.semantic_view.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SemanticViewIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1SemanticViewPkMutationKey() {
  return ['api', '/api/v1/semantic_view/:pk', 'PUT'] as const
}

export function getPutApiV1SemanticViewPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1SemanticViewPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$put']>) {
      return parseResponse(client.api.v1.semantic_view[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1SemanticViewPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1SemanticViewPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1SemanticViewPkMutationKey() {
  return ['api', '/api/v1/semantic_view/:pk', 'DELETE'] as const
}

export function getDeleteApiV1SemanticViewPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SemanticViewPkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$delete']>,
    ) {
      return parseResponse(client.api.v1.semantic_view[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SemanticViewPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SemanticViewPkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SemanticViewPkStructureQueryKey(
  args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>,
) {
  return ['api', '/api/v1/semantic_view/:pk/structure', args] as const
}

export function getApiV1SemanticViewPkStructureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticViewPkStructureQueryKey>
  >({
    queryKey: getApiV1SemanticViewPkStructureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.semantic_view[':pk'].structure.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SemanticViewPkStructure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticViewPkStructureQueryKey>
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
      ...getApiV1SemanticViewPkStructureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SemanticViewPkStructure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SemanticViewPkStructureQueryKey>
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
      ...getApiV1SemanticViewPkStructureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SqllabIndexQueryKey() {
  return ['api', '/api/v1/sqllab/'] as const
}

export function getApiV1SqllabIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabIndexQueryKey>
  >({
    queryKey: getApiV1SqllabIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.sqllab.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SqllabIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SqllabIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SqllabIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SqllabIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1SqllabEstimateIndexMutationKey() {
  return ['api', '/api/v1/sqllab/estimate/', 'POST'] as const
}

export function getPostApiV1SqllabEstimateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.estimate.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.sqllab.estimate.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SqllabEstimateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.sqllab.estimate.index.$post>) {
      return parseResponse(client.api.v1.sqllab.estimate.index.$post(args, options))
    },
  })
}

export function usePostApiV1SqllabEstimateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.sqllab.estimate.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.sqllab.estimate.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SqllabEstimateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SqllabExecuteIndexMutationKey() {
  return ['api', '/api/v1/sqllab/execute/', 'POST'] as const
}

export function getPostApiV1SqllabExecuteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.execute.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.sqllab.execute.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SqllabExecuteIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.sqllab.execute.index.$post>) {
      return parseResponse(client.api.v1.sqllab.execute.index.$post(args, options))
    },
  })
}

export function usePostApiV1SqllabExecuteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.sqllab.execute.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.sqllab.execute.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SqllabExecuteIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SqllabExportClientIdIndexQueryKey(
  args: InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>,
) {
  return ['api', '/api/v1/sqllab/export/:client_id/', args] as const
}

export function getApiV1SqllabExportClientIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabExportClientIdIndexQueryKey>
  >({
    queryKey: getApiV1SqllabExportClientIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.sqllab.export[':client_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SqllabExportClientIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabExportClientIdIndexQueryKey>
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
      ...getApiV1SqllabExportClientIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SqllabExportClientIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabExportClientIdIndexQueryKey>
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
      ...getApiV1SqllabExportClientIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1SqllabExportStreamingIndexMutationKey() {
  return ['api', '/api/v1/sqllab/export_streaming/', 'POST'] as const
}

export function getPostApiV1SqllabExportStreamingIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.sqllab.export_streaming.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.sqllab.export_streaming.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SqllabExportStreamingIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.sqllab.export_streaming.index.$post>,
    ) {
      return parseResponse(client.api.v1.sqllab.export_streaming.index.$post(args, options))
    },
  })
}

export function usePostApiV1SqllabExportStreamingIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.sqllab.export_streaming.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.sqllab.export_streaming.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SqllabExportStreamingIndexMutationOptions<
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

export function getPostApiV1SqllabFormatSqlIndexMutationKey() {
  return ['api', '/api/v1/sqllab/format_sql/', 'POST'] as const
}

export function getPostApiV1SqllabFormatSqlIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.sqllab.format_sql.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.sqllab.format_sql.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SqllabFormatSqlIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.sqllab.format_sql.index.$post>) {
      return parseResponse(client.api.v1.sqllab.format_sql.index.$post(args, options))
    },
  })
}

export function usePostApiV1SqllabFormatSqlIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.sqllab.format_sql.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.sqllab.format_sql.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SqllabFormatSqlIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1SqllabPermalinkMutationKey() {
  return ['api', '/api/v1/sqllab/permalink', 'POST'] as const
}

export function getPostApiV1SqllabPermalinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.permalink.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.sqllab.permalink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SqllabPermalinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.sqllab.permalink.$post>) {
      return parseResponse(client.api.v1.sqllab.permalink.$post(args, options))
    },
  })
}

export function usePostApiV1SqllabPermalink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.permalink.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.sqllab.permalink.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1SqllabPermalinkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SqllabPermalinkKeyQueryKey(
  args: InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>,
) {
  return ['api', '/api/v1/sqllab/permalink/:key', args] as const
}

export function getApiV1SqllabPermalinkKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabPermalinkKeyQueryKey>
  >({
    queryKey: getApiV1SqllabPermalinkKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.sqllab.permalink[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SqllabPermalinkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabPermalinkKeyQueryKey>
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
      ...getApiV1SqllabPermalinkKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SqllabPermalinkKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabPermalinkKeyQueryKey>
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
      ...getApiV1SqllabPermalinkKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1SqllabResultsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.sqllab.results.index.$get>,
) {
  return ['api', '/api/v1/sqllab/results/', args] as const
}

export function getApiV1SqllabResultsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.sqllab.results.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabResultsIndexQueryKey>
  >({
    queryKey: getApiV1SqllabResultsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.sqllab.results.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1SqllabResultsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.sqllab.results.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabResultsIndexQueryKey>
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
      ...getApiV1SqllabResultsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1SqllabResultsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.sqllab.results.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SqllabResultsIndexQueryKey>
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
      ...getApiV1SqllabResultsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1TagIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.tag.index.$get>,
) {
  return ['api', '/api/v1/tag/', args] as const
}

export function getApiV1TagIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.tag.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagIndexQueryKey>
  >({
    queryKey: getApiV1TagIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1TagIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1TagIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1TagIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1TagIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1TagIndexMutationKey() {
  return ['api', '/api/v1/tag/', 'POST'] as const
}

export function getPostApiV1TagIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tag.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tag.index.$post>) {
      return parseResponse(client.api.v1.tag.index.$post(args, options))
    },
  })
}

export function usePostApiV1TagIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.tag.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1TagIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1TagIndexMutationKey() {
  return ['api', '/api/v1/tag/', 'DELETE'] as const
}

export function getDeleteApiV1TagIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.tag.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TagIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tag.index.$delete>) {
      return parseResponse(client.api.v1.tag.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1TagIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.tag.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1TagIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.tag._info.$get>,
) {
  return ['api', '/api/v1/tag/_info', args] as const
}

export function getApiV1TagInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.tag._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagInfoQueryKey>
  >({
    queryKey: getApiV1TagInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1TagInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1TagInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1TagInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1TagInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1TagBulkCreateMutationKey() {
  return ['api', '/api/v1/tag/bulk_create', 'POST'] as const
}

export function getPostApiV1TagBulkCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.bulk_create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.tag.bulk_create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagBulkCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.tag.bulk_create.$post>) {
      return parseResponse(client.api.v1.tag.bulk_create.$post(args, options))
    },
  })
}

export function usePostApiV1TagBulkCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.bulk_create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.tag.bulk_create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1TagBulkCreateMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TagFavoriteStatusIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>,
) {
  return ['api', '/api/v1/tag/favorite_status/', args] as const
}

export function getApiV1TagFavoriteStatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagFavoriteStatusIndexQueryKey>
  >({
    queryKey: getApiV1TagFavoriteStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag.favorite_status.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1TagFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagFavoriteStatusIndexQueryKey>
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
      ...getApiV1TagFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1TagFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagFavoriteStatusIndexQueryKey>
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
      ...getApiV1TagFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1TagGetObjectsIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>,
) {
  return ['api', '/api/v1/tag/get_objects/', args] as const
}

export function getApiV1TagGetObjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagGetObjectsIndexQueryKey>
  >({
    queryKey: getApiV1TagGetObjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag.get_objects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1TagGetObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagGetObjectsIndexQueryKey>
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
      ...getApiV1TagGetObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1TagGetObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagGetObjectsIndexQueryKey>
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
      ...getApiV1TagGetObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1TagRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/tag/related/:column_name', args] as const
}

export function getApiV1TagRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1TagRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1TagRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagRelatedColumnNameQueryKey>
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
      ...getApiV1TagRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1TagRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagRelatedColumnNameQueryKey>
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
      ...getApiV1TagRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1TagObjectTypeObjectIdIndexMutationKey() {
  return ['api', '/api/v1/tag/:object_type/:object_id/', 'POST'] as const
}

export function getPostApiV1TagObjectTypeObjectIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.tag)[':object_type'][':object_id']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':object_type'][':object_id']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagObjectTypeObjectIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tag)[':object_type'][':object_id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.tag[':object_type'][':object_id'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1TagObjectTypeObjectIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.tag)[':object_type'][':object_id']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tag)[':object_type'][':object_id']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1TagObjectTypeObjectIdIndexMutationOptions<
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

export function getDeleteApiV1TagObjectTypeObjectIdTagIndexMutationKey() {
  return ['api', '/api/v1/tag/:object_type/:object_id/:tag/', 'DELETE'] as const
}

export function getDeleteApiV1TagObjectTypeObjectIdTagIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.tag)[':object_type'][':object_id'][':tag']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.tag)[':object_type'][':object_id'][':tag']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TagObjectTypeObjectIdTagIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.tag)[':object_type'][':object_id'][':tag']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.tag[':object_type'][':object_id'][':tag'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1TagObjectTypeObjectIdTagIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.tag)[':object_type'][':object_id'][':tag']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.tag)[':object_type'][':object_id'][':tag']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1TagObjectTypeObjectIdTagIndexMutationOptions<
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

export function getApiV1TagPkQueryKey(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>,
) {
  return ['api', '/api/v1/tag/:pk', args] as const
}

export function getApiV1TagPkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagPkQueryKey>
  >({
    queryKey: getApiV1TagPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.tag[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1TagPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1TagPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1TagPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TagPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1TagPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1TagPkMutationKey() {
  return ['api', '/api/v1/tag/:pk', 'PUT'] as const
}

export function getPutApiV1TagPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1TagPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$put']>) {
      return parseResponse(client.api.v1.tag[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1TagPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.tag)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1TagPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1TagPkMutationKey() {
  return ['api', '/api/v1/tag/:pk', 'DELETE'] as const
}

export function getDeleteApiV1TagPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TagPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.tag)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.tag[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1TagPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.tag)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1TagPkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1TagPkFavoritesIndexMutationKey() {
  return ['api', '/api/v1/tag/:pk/favorites/', 'POST'] as const
}

export function getPostApiV1TagPkFavoritesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TagPkFavoritesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>,
    ) {
      return parseResponse(client.api.v1.tag[':pk'].favorites.index.$post(args, options))
    },
  })
}

export function usePostApiV1TagPkFavoritesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1TagPkFavoritesIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1TagPkFavoritesIndexMutationKey() {
  return ['api', '/api/v1/tag/:pk/favorites/', 'DELETE'] as const
}

export function getDeleteApiV1TagPkFavoritesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1TagPkFavoritesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$delete']>,
    ) {
      return parseResponse(client.api.v1.tag[':pk'].favorites.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1TagPkFavoritesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1TagPkFavoritesIndexMutationOptions<
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

export function getApiV1ThemeIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.theme.index.$get>,
) {
  return ['api', '/api/v1/theme/', args] as const
}

export function getApiV1ThemeIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.theme.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeIndexQueryKey>
  >({
    queryKey: getApiV1ThemeIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.theme.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ThemeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.theme.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ThemeIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ThemeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.theme.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ThemeIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1ThemeIndexMutationKey() {
  return ['api', '/api/v1/theme/', 'POST'] as const
}

export function getPostApiV1ThemeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.theme.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ThemeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.theme.index.$post>) {
      return parseResponse(client.api.v1.theme.index.$post(args, options))
    },
  })
}

export function usePostApiV1ThemeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.theme.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ThemeIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ThemeIndexMutationKey() {
  return ['api', '/api/v1/theme/', 'DELETE'] as const
}

export function getDeleteApiV1ThemeIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.theme.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ThemeIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.theme.index.$delete>) {
      return parseResponse(client.api.v1.theme.index.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ThemeIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.theme.index.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ThemeIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ThemeInfoQueryKey(
  args: InferRequestType<typeof client.api.v1.theme._info.$get>,
) {
  return ['api', '/api/v1/theme/_info', args] as const
}

export function getApiV1ThemeInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.theme._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeInfoQueryKey>
  >({
    queryKey: getApiV1ThemeInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.theme._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ThemeInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.theme._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ThemeInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ThemeInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.theme._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ThemeInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ThemeExportIndexQueryKey(
  args: InferRequestType<typeof client.api.v1.theme.export.index.$get>,
) {
  return ['api', '/api/v1/theme/export/', args] as const
}

export function getApiV1ThemeExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.theme.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeExportIndexQueryKey>
  >({
    queryKey: getApiV1ThemeExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.theme.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ThemeExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.theme.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeExportIndexQueryKey>
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
      ...getApiV1ThemeExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ThemeExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.theme.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeExportIndexQueryKey>
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
      ...getApiV1ThemeExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1ThemeImportIndexMutationKey() {
  return ['api', '/api/v1/theme/import/', 'POST'] as const
}

export function getPostApiV1ThemeImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.theme.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ThemeImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.theme.import.index.$post>) {
      return parseResponse(client.api.v1.theme.import.index.$post(args, options))
    },
  })
}

export function usePostApiV1ThemeImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.import.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.theme.import.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ThemeImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ThemeRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>,
) {
  return ['api', '/api/v1/theme/related/:column_name', args] as const
}

export function getApiV1ThemeRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeRelatedColumnNameQueryKey>
  >({
    queryKey: getApiV1ThemeRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.theme.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ThemeRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeRelatedColumnNameQueryKey>
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
      ...getApiV1ThemeRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ThemeRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeRelatedColumnNameQueryKey>
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
      ...getApiV1ThemeRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ThemeSystemQueryKey() {
  return ['api', '/api/v1/theme/system'] as const
}

export function getApiV1ThemeSystemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeSystemQueryKey>
  >({
    queryKey: getApiV1ThemeSystemQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.theme.system.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ThemeSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ThemeSystemQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ThemeSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemeSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ThemeSystemQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV1ThemeUnsetSystemDarkMutationKey() {
  return ['api', '/api/v1/theme/unset_system_dark', 'DELETE'] as const
}

export function getDeleteApiV1ThemeUnsetSystemDarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.theme.unset_system_dark.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ThemeUnsetSystemDarkMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.theme.unset_system_dark.$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1ThemeUnsetSystemDark<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.theme.unset_system_dark.$delete>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ThemeUnsetSystemDarkMutationOptions<
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

export function getDeleteApiV1ThemeUnsetSystemDefaultMutationKey() {
  return ['api', '/api/v1/theme/unset_system_default', 'DELETE'] as const
}

export function getDeleteApiV1ThemeUnsetSystemDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.theme.unset_system_default.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ThemeUnsetSystemDefaultMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.theme.unset_system_default.$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1ThemeUnsetSystemDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.theme.unset_system_default.$delete>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ThemeUnsetSystemDefaultMutationOptions<
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

export function getApiV1ThemePkQueryKey(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>,
) {
  return ['api', '/api/v1/theme/:pk', args] as const
}

export function getApiV1ThemePkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemePkQueryKey>
  >({
    queryKey: getApiV1ThemePkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.theme[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ThemePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ThemePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ThemePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ThemePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ThemePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1ThemePkMutationKey() {
  return ['api', '/api/v1/theme/:pk', 'PUT'] as const
}

export function getPutApiV1ThemePkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.theme)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ThemePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$put']>) {
      return parseResponse(client.api.v1.theme[':pk'].$put(args, options))
    },
  })
}

export function usePutApiV1ThemePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.theme)[':pk']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ThemePkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1ThemePkMutationKey() {
  return ['api', '/api/v1/theme/:pk', 'DELETE'] as const
}

export function getDeleteApiV1ThemePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.theme)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ThemePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.theme)[':pk']['$delete']>) {
      return parseResponse(client.api.v1.theme[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ThemePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.theme)[':pk']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ThemePkMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1ThemePkSetSystemDarkMutationKey() {
  return ['api', '/api/v1/theme/:pk/set_system_dark', 'PUT'] as const
}

export function getPutApiV1ThemePkSetSystemDarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['set_system_dark']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_dark']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ThemePkSetSystemDarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_dark']['$put']>,
    ) {
      return parseResponse(client.api.v1.theme[':pk'].set_system_dark.$put(args, options))
    },
  })
}

export function usePutApiV1ThemePkSetSystemDark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['set_system_dark']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_dark']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ThemePkSetSystemDarkMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiV1ThemePkSetSystemDefaultMutationKey() {
  return ['api', '/api/v1/theme/:pk/set_system_default', 'PUT'] as const
}

export function getPutApiV1ThemePkSetSystemDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ThemePkSetSystemDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>,
    ) {
      return parseResponse(client.api.v1.theme[':pk'].set_system_default.$put(args, options))
    },
  })
}

export function usePutApiV1ThemePkSetSystemDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ThemePkSetSystemDefaultMutationOptions<
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

export function getApiV1UserUserIdAvatarPngQueryKey(
  args: InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>,
) {
  return ['api', '/api/v1/user/:user_id/avatar.png', args] as const
}

export function getApiV1UserUserIdAvatarPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UserUserIdAvatarPngQueryKey>
  >({
    queryKey: getApiV1UserUserIdAvatarPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.user[':user_id']['avatar.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1UserUserIdAvatarPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UserUserIdAvatarPngQueryKey>
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
      ...getApiV1UserUserIdAvatarPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1UserUserIdAvatarPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UserUserIdAvatarPngQueryKey>
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
      ...getApiV1UserUserIdAvatarPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
