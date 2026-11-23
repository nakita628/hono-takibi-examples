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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1AdvancedDataTypeConvertQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>>,
) {
  return ['api', '/api/v1/advanced_data_type/convert', toValue(args)] as const
}

export function getApiV1AdvancedDataTypeConvertQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AdvancedDataTypeConvertQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.advanced_data_type.convert.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.advanced_data_type.convert.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AdvancedDataTypeConvertQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.advanced_data_type.convert.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdvancedDataTypeConvertQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AdvancedDataTypeConvertQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.advanced_data_type.convert.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AdvancedDataTypeTypesQueryKey() {
  return ['api', '/api/v1/advanced_data_type/types'] as const
}

export function getApiV1AdvancedDataTypeTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AdvancedDataTypeTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.advanced_data_type.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AdvancedDataTypeTypesQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.advanced_data_type.types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdvancedDataTypeTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AdvancedDataTypeTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.advanced_data_type.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AnnotationLayerIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.annotation_layer.index.$get>>,
) {
  return ['api', '/api/v1/annotation_layer/', toValue(args)] as const
}

export function getApiV1AnnotationLayerIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.annotation_layer.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AnnotationLayerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.annotation_layer.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AnnotationLayerIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.annotation_layer.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AnnotationLayerIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AnnotationLayerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.annotation_layer.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.annotation_layer._info.$get>>,
) {
  return ['api', '/api/v1/annotation_layer/_info', toValue(args)] as const
}

export function getApiV1AnnotationLayerInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.annotation_layer._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AnnotationLayerInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.annotation_layer._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AnnotationLayerInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.annotation_layer._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AnnotationLayerInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.annotation_layer._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AnnotationLayerInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.annotation_layer._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AnnotationLayerRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/annotation_layer/related/:column_name', toValue(args)] as const
}

export function getApiV1AnnotationLayerRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AnnotationLayerRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.annotation_layer.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.annotation_layer.related)[':column_name']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.annotation_layer.related)[':column_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AnnotationLayerRelatedColumnNameQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.annotation_layer.related)[':column_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AnnotationLayerRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.annotation_layer.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AnnotationLayerPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/annotation_layer/:pk', toValue(args)] as const
}

export function getApiV1AnnotationLayerPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AnnotationLayerPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AnnotationLayerPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.annotation_layer)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnotationLayerPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AnnotationLayerPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.annotation_layer[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/', toValue(args)] as const
}

export function getApiV1AnnotationLayerPkAnnotationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AnnotationLayerPkAnnotationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.annotation_layer)[':pk']['annotation']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1AnnotationLayerPkAnnotationIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AnnotationLayerPkAnnotationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.annotation_layer[':pk'].annotation.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/annotation_layer/:pk/annotation/:annotation_id', toValue(args)] as const
}

export function getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AnnotationLayerPkAnnotationAnnotationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.annotation_layer[':pk'].annotation[':annotation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1AssetsExportIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AssetsExportIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.assets.export.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AssetsExportIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.assets.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AssetsExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AssetsExportIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.assets.export.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1AvailableDomainsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AvailableDomainsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.available_domains.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AvailableDomainsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.available_domains.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AvailableDomainsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AvailableDomainsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.available_domains.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.index.$get>>,
) {
  return ['api', '/api/v1/chart/', toValue(args)] as const
}

export function getApiV1ChartIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChartIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ChartIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart._info.$get>>,
) {
  return ['api', '/api/v1/chart/_info', toValue(args)] as const
}

export function getApiV1ChartInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChartInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ChartInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.export.index.$get>>,
) {
  return ['api', '/api/v1/chart/export/', toValue(args)] as const
}

export function getApiV1ChartExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChartExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChartExportIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartFavoriteStatusIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>>,
) {
  return ['api', '/api/v1/chart/favorite_status/', toValue(args)] as const
}

export function getApiV1ChartFavoriteStatusIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartFavoriteStatusIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart.favorite_status.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.favorite_status.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChartFavoriteStatusIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.chart.favorite_status.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartFavoriteStatusIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartFavoriteStatusIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart.favorite_status.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.chart.import.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.chart.import.index.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/related/:column_name', toValue(args)] as const
}

export function getApiV1ChartRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChartRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.chart.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.chart.warm_up_cache.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.chart.warm_up_cache.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>,
) {
  return ['api', '/api/v1/chart/:id_or_uuid', toValue(args)] as const
}

export function getApiV1ChartIdOrUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartIdOrUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':id_or_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ChartIdOrUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChartIdOrUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.chart)[':id_or_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartIdOrUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartIdOrUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':id_or_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/:pk/cache_screenshot/', toValue(args)] as const
}

export function getApiV1ChartPkCacheScreenshotIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartPkCacheScreenshotIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':pk'].cache_screenshot.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ChartPkCacheScreenshotIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':pk']['cache_screenshot']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkCacheScreenshotIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartPkCacheScreenshotIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':pk'].cache_screenshot.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartPkDataIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/:pk/data/', toValue(args)] as const
}

export function getApiV1ChartPkDataIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartPkDataIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':pk'].data.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ChartPkDataIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['data']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkDataIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartPkDataIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':pk'].data.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartPkDeckLayersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/:pk/deck_layers/', toValue(args)] as const
}

export function getApiV1ChartPkDeckLayersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartPkDeckLayersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':pk'].deck_layers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ChartPkDeckLayersIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.chart)[':pk']['deck_layers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkDeckLayersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartPkDeckLayersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':pk'].deck_layers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/:pk/screenshot/:digest/', toValue(args)] as const
}

export function getApiV1ChartPkScreenshotDigestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartPkScreenshotDigestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':pk'].screenshot[':digest'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['screenshot'][':digest']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1ChartPkScreenshotDigestIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartPkScreenshotDigestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':pk'].screenshot[':digest'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartPkThumbnailDigestIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/:pk/thumbnail/:digest/', toValue(args)] as const
}

export function getApiV1ChartPkThumbnailDigestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartPkThumbnailDigestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1ChartPkThumbnailDigestIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartPkThumbnailDigestIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartPkThumbnailDigestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartUuidStrActivityIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/:uuid_str/activity/', toValue(args)] as const
}

export function getApiV1ChartUuidStrActivityIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartUuidStrActivityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':uuid_str'].activity.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ChartUuidStrActivityIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':uuid_str']['activity']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartUuidStrActivityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartUuidStrActivityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':uuid_str'].activity.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartUuidStrVersionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/chart/:uuid_str/versions/', toValue(args)] as const
}

export function getApiV1ChartUuidStrVersionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartUuidStrVersionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':uuid_str'].versions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1ChartUuidStrVersionsIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.chart)[':uuid_str']['versions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartUuidStrVersionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartUuidStrVersionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':uuid_str'].versions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/chart/:uuid_str/versions/:version_uuid_str/', toValue(args)] as const
}

export function getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart[':uuid_str'].versions[':version_uuid_str'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.chart)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartUuidStrVersionsVersionUuidStrIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart[':uuid_str'].versions[':version_uuid_str'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.css_template.index.$get>>,
) {
  return ['api', '/api/v1/css_template/', toValue(args)] as const
}

export function getApiV1CssTemplateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.css_template.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CssTemplateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.css_template.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CssTemplateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.css_template.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CssTemplateIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CssTemplateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.css_template.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.css_template.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.css_template.index.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.css_template._info.$get>>,
) {
  return ['api', '/api/v1/css_template/_info', toValue(args)] as const
}

export function getApiV1CssTemplateInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.css_template._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CssTemplateInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.css_template._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CssTemplateInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.css_template._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1CssTemplateInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.css_template._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplateInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CssTemplateInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.css_template._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CssTemplateRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/css_template/related/:column_name', toValue(args)] as const
}

export function getApiV1CssTemplateRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CssTemplateRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.css_template.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CssTemplateRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.css_template.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplateRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CssTemplateRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.css_template.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CssTemplatePkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/css_template/:pk', toValue(args)] as const
}

export function getApiV1CssTemplatePkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CssTemplatePkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.css_template[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CssTemplatePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.css_template)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CssTemplatePkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.css_template)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CssTemplatePkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CssTemplatePkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.css_template[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard.index.$get>>,
) {
  return ['api', '/api/v1/dashboard/', toValue(args)] as const
}

export function getApiV1DashboardIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DashboardIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.dashboard.index.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.dashboard.index.$delete>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard._info.$get>>,
) {
  return ['api', '/api/v1/dashboard/_info', toValue(args)] as const
}

export function getApiV1DashboardInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DashboardInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DashboardInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard.export.index.$get>>,
) {
  return ['api', '/api/v1/dashboard/export/', toValue(args)] as const
}

export function getApiV1DashboardExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DashboardExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dashboard.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardExportIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dashboard.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/dashboard/export_xlsx/download/:job_id/', toValue(args)] as const
}

export function getApiV1DashboardExportXlsxDownloadJobIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard.export_xlsx.download[':job_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard.export_xlsx.download)[':job_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardExportXlsxDownloadJobIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard.export_xlsx.download[':job_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/dashboard/export_xlsx/status/:job_id/', toValue(args)] as const
}

export function getApiV1DashboardExportXlsxStatusJobIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard.export_xlsx.status[':job_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard.export_xlsx.status)[':job_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardExportXlsxStatusJobIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard.export_xlsx.status[':job_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardFavoriteStatusIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>
  >,
) {
  return ['api', '/api/v1/dashboard/favorite_status/', toValue(args)] as const
}

export function getApiV1DashboardFavoriteStatusIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardFavoriteStatusIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard.favorite_status.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.dashboard.favorite_status.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardFavoriteStatusIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.dashboard.favorite_status.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardFavoriteStatusIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardFavoriteStatusIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard.favorite_status.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/permalink/:key', toValue(args)] as const
}

export function getApiV1DashboardPermalinkKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardPermalinkKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard.permalink[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardPermalinkKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dashboard.permalink)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardPermalinkKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardPermalinkKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard.permalink[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/related/:column_name', toValue(args)] as const
}

export function getApiV1DashboardRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>
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
                  ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dashboard.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug', toValue(args)] as const
}

export function getApiV1DashboardIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardIdOrSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardIdOrSlugChartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/charts', toValue(args)] as const
}

export function getApiV1DashboardIdOrSlugChartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardIdOrSlugChartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].charts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>
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
                  ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardIdOrSlugChartsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['charts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugChartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardIdOrSlugChartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':id_or_slug'].charts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.dashboard)[':id_or_slug']['copy']['index']['$post']
          >,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/datasets', toValue(args)] as const
}

export function getApiV1DashboardIdOrSlugDatasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardIdOrSlugDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardIdOrSlugDatasetsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['datasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardIdOrSlugDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':id_or_slug'].datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardIdOrSlugEmbeddedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/embedded', toValue(args)] as const
}

export function getApiV1DashboardIdOrSlugEmbeddedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardIdOrSlugEmbeddedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].embedded.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardIdOrSlugEmbeddedQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['embedded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugEmbeddedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardIdOrSlugEmbeddedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':id_or_slug'].embedded.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:id_or_slug/tabs', toValue(args)] as const
}

export function getApiV1DashboardIdOrSlugTabsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardIdOrSlugTabsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':id_or_slug'].tabs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardIdOrSlugTabsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dashboard)[':id_or_slug']['tabs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardIdOrSlugTabsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardIdOrSlugTabsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':id_or_slug'].tabs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.dashboard)[':pk']['chart_customizations']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:pk/export_as_example/', toValue(args)] as const
}

export function getApiV1DashboardPkExportAsExampleIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardPkExportAsExampleIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].export_as_example.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['export_as_example']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardPkExportAsExampleIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardPkExportAsExampleIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':pk'].export_as_example.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.dashboard)[':pk']['export_xlsx']['index']['$post']
          >,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.dashboard)[':pk']['favorites']['index']['$delete']
          >,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:pk/filter_state/:key', toValue(args)] as const
}

export function getApiV1DashboardPkFilterStateKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardPkFilterStateKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].filter_state[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DashboardPkFilterStateKeyQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardPkFilterStateKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardPkFilterStateKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':pk'].filter_state[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.dashboard)[':pk']['filter_state'][':key']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/dashboard/:pk/screenshot/:digest/', toValue(args)] as const
}

export function getApiV1DashboardPkScreenshotDigestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardPkScreenshotDigestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].screenshot[':digest'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':pk']['screenshot'][':digest']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardPkScreenshotDigestIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardPkScreenshotDigestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':pk'].screenshot[':digest'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardPkThumbnailDigestIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/dashboard/:pk/thumbnail/:digest/', toValue(args)] as const
}

export function getApiV1DashboardPkThumbnailDigestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardPkThumbnailDigestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardPkThumbnailDigestIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardPkThumbnailDigestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardUuidStrActivityIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:uuid_str/activity/', toValue(args)] as const
}

export function getApiV1DashboardUuidStrActivityIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardUuidStrActivityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':uuid_str'].activity.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardUuidStrActivityIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['activity']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardUuidStrActivityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardUuidStrActivityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':uuid_str'].activity.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardUuidStrVersionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/dashboard/:uuid_str/versions/', toValue(args)] as const
}

export function getApiV1DashboardUuidStrVersionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardUuidStrVersionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':uuid_str'].versions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardUuidStrVersionsIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.dashboard)[':uuid_str']['versions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DashboardUuidStrVersionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardUuidStrVersionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':uuid_str'].versions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/dashboard/:uuid_str/versions/:version_uuid_str/', toValue(args)] as const
}

export function getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dashboard[':uuid_str'].versions[':version_uuid_str'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dashboard)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DashboardUuidStrVersionsVersionUuidStrIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dashboard[':uuid_str'].versions[':version_uuid_str'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.index.$get>>,
) {
  return ['api', '/api/v1/database/', toValue(args)] as const
}

export function getApiV1DatabaseIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabaseIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatabaseIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DatabaseIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabaseIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database._info.$get>>,
) {
  return ['api', '/api/v1/database/_info', toValue(args)] as const
}

export function getApiV1DatabaseInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabaseInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatabaseInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DatabaseInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabaseInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabaseAvailableIndexQueryKey() {
  return ['api', '/api/v1/database/available/'] as const
}

export function getApiV1DatabaseAvailableIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DatabaseAvailableIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database.available.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatabaseAvailableIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.database.available.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseAvailableIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DatabaseAvailableIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database.available.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabaseExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.export.index.$get>>,
) {
  return ['api', '/api/v1/database/export/', toValue(args)] as const
}

export function getApiV1DatabaseExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabaseExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatabaseExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatabaseExportIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabaseExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.oauth2.index.$get>>,
) {
  return ['api', '/api/v1/database/oauth2/', toValue(args)] as const
}

export function getApiV1DatabaseOauth2IndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.oauth2.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabaseOauth2IndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database.oauth2.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatabaseOauth2Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.database.oauth2.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatabaseOauth2IndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.database.oauth2.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseOauth2IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabaseOauth2IndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database.oauth2.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabaseRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/database/related/:column_name', toValue(args)] as const
}

export function getApiV1DatabaseRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabaseRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatabaseRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.database.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabaseRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabaseRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/database/:pk', toValue(args)] as const
}

export function getApiV1DatabasePkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatabasePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.database)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatabasePkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/catalogs/', toValue(args)] as const
}

export function getApiV1DatabasePkCatalogsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkCatalogsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].catalogs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatabasePkCatalogsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['catalogs']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkCatalogsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkCatalogsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].catalogs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkConnectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/connection', toValue(args)] as const
}

export function getApiV1DatabasePkConnectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkConnectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].connection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['connection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatabasePkConnectionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['connection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkConnectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkConnectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].connection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/database/:pk/encrypted_extra_hints/', toValue(args)] as const
}

export function getApiV1DatabasePkEncryptedExtraHintsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].encrypted_extra_hints.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['encrypted_extra_hints']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkEncryptedExtraHintsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].encrypted_extra_hints.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkFunctionNamesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/function_names/', toValue(args)] as const
}

export function getApiV1DatabasePkFunctionNamesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkFunctionNamesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].function_names.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkFunctionNamesIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['function_names']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkFunctionNamesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkFunctionNamesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].function_names.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkOauth2TokensIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/oauth2_tokens/', toValue(args)] as const
}

export function getApiV1DatabasePkOauth2TokensIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkOauth2TokensIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].oauth2_tokens.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatabasePkOauth2TokensIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['oauth2_tokens']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkOauth2TokensIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkOauth2TokensIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].oauth2_tokens.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/related_objects/', toValue(args)] as const
}

export function getApiV1DatabasePkRelatedObjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkRelatedObjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].related_objects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkRelatedObjectsIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['related_objects']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkRelatedObjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkRelatedObjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].related_objects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSchemasIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/schemas/', toValue(args)] as const
}

export function getApiV1DatabasePkSchemasIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkSchemasIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].schemas.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatabasePkSchemasIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['schemas']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkSchemasIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkSchemasIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].schemas.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/database/:pk/schemas_access_for_file_upload/', toValue(args)] as const
}

export function getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].schemas_access_for_file_upload.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['schemas_access_for_file_upload']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkSchemasAccessForFileUploadIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].schemas_access_for_file_upload.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSelectStarTableNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/database/:pk/select_star/:table_name/', toValue(args)] as const
}

export function getApiV1DatabasePkSelectStarTableNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkSelectStarTableNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].select_star[':table_name'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['select_star'][':table_name']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkSelectStarTableNameIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkSelectStarTableNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].select_star[':table_name'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/database/:pk/select_star/:table_name/:schema_name/',
    toValue(args),
  ] as const
}

export function getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkSelectStarTableNameSchemaNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/database/:pk/table/:table_name/:schema_name/', toValue(args)] as const
}

export function getApiV1DatabasePkTableTableNameSchemaNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].table[':table_name'][':schema_name'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkTableTableNameSchemaNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].table[':table_name'][':schema_name'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/database/:pk/table_extra/:table_name/:schema_name/',
    toValue(args),
  ] as const
}

export function getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].table_extra[':table_name'][':schema_name'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table_extra'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkTableExtraTableNameSchemaNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].table_extra[':table_name'][':schema_name'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTableMetadataIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/table_metadata/', toValue(args)] as const
}

export function getApiV1DatabasePkTableMetadataIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkTableMetadataIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].table_metadata.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkTableMetadataIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.database)[':pk']['table_metadata']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkTableMetadataIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkTableMetadataIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].table_metadata.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTableMetadataExtraIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/database/:pk/table_metadata/extra/', toValue(args)] as const
}

export function getApiV1DatabasePkTableMetadataExtraIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkTableMetadataExtraIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].table_metadata.extra.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.database)[':pk']['table_metadata']['extra']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatabasePkTableMetadataExtraIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkTableMetadataExtraIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].table_metadata.extra.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatabasePkTablesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/database/:pk/tables/', toValue(args)] as const
}

export function getApiV1DatabasePkTablesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatabasePkTablesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.database[':pk'].tables.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>
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
                  ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatabasePkTablesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.database)[':pk']['tables']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatabasePkTablesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatabasePkTablesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.database[':pk'].tables.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.database)[':pk']['validate_sql']['index']['$post']
          >,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.index.$get>>,
) {
  return ['api', '/api/v1/dataset/', toValue(args)] as const
}

export function getApiV1DatasetIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatasetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DatasetIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset._info.$get>>,
) {
  return ['api', '/api/v1/dataset/_info', toValue(args)] as const
}

export function getApiV1DatasetInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatasetInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DatasetInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatasetDistinctColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/dataset/distinct/:column_name', toValue(args)] as const
}

export function getApiV1DatasetDistinctColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetDistinctColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset.distinct[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetDistinctColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dataset.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetDistinctColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetDistinctColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset.distinct[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.dataset.duplicate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.dataset.duplicate.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.export.index.$get>>,
) {
  return ['api', '/api/v1/dataset/export/', toValue(args)] as const
}

export function getApiV1DatasetExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatasetExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetExportIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dataset.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/dataset/related/:column_name', toValue(args)] as const
}

export function getApiV1DatasetRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dataset.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatasetRelatedObjectsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>>,
) {
  return ['api', '/api/v1/dataset/related_objects/', toValue(args)] as const
}

export function getApiV1DatasetRelatedObjectsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetRelatedObjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset.related_objects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.dataset.related_objects.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetRelatedObjectsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.dataset.related_objects.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetRelatedObjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetRelatedObjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset.related_objects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>,
) {
  return ['api', '/api/v1/dataset/:id_or_uuid', toValue(args)] as const
}

export function getApiV1DatasetIdOrUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetIdOrUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset[':id_or_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetIdOrUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetIdOrUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetIdOrUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset[':id_or_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatasetIdOrUuidRelatedObjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
  >,
) {
  return ['api', '/api/v1/dataset/:id_or_uuid/related_objects', toValue(args)] as const
}

export function getApiV1DatasetIdOrUuidRelatedObjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetIdOrUuidRelatedObjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset[':id_or_uuid'].related_objects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetIdOrUuidRelatedObjectsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':id_or_uuid']['related_objects']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetIdOrUuidRelatedObjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetIdOrUuidRelatedObjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset[':id_or_uuid'].related_objects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.dataset)[':pk']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.dataset)[':pk']['column'][':column_id']['$delete']
          >,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/dataset/:pk/drill_info/', toValue(args)] as const
}

export function getApiV1DatasetPkDrillInfoIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetPkDrillInfoIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset[':pk'].drill_info.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetPkDrillInfoIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':pk']['drill_info']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetPkDrillInfoIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetPkDrillInfoIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset[':pk'].drill_info.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.dataset)[':pk']['metric'][':metric_id']['$delete']
          >,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/dataset/:uuid_str/activity/', toValue(args)] as const
}

export function getApiV1DatasetUuidStrActivityIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetUuidStrActivityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset[':uuid_str'].activity.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetUuidStrActivityIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['activity']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetUuidStrActivityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetUuidStrActivityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset[':uuid_str'].activity.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatasetUuidStrVersionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/dataset/:uuid_str/versions/', toValue(args)] as const
}

export function getApiV1DatasetUuidStrVersionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetUuidStrVersionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset[':uuid_str'].versions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetUuidStrVersionsIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.dataset)[':uuid_str']['versions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetUuidStrVersionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetUuidStrVersionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset[':uuid_str'].versions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/dataset/:uuid_str/versions/:version_uuid_str/', toValue(args)] as const
}

export function getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset[':uuid_str'].versions[':version_uuid_str'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.dataset)[':uuid_str']['versions'][':version_uuid_str']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetUuidStrVersionsVersionUuidStrIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset[':uuid_str'].versions[':version_uuid_str'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>
  >,
) {
  return ['api', '/api/v1/dataset/:uuid/purge-impact', toValue(args)] as const
}

export function getApiV1DatasetUuidPurgeImpactQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasetUuidPurgeImpactQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dataset[':uuid']['purge-impact'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1DatasetUuidPurgeImpactQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.dataset)[':uuid']['purge-impact']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasetUuidPurgeImpactQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasetUuidPurgeImpactQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dataset[':uuid']['purge-impact'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.datasource.index.$get>>,
) {
  return ['api', '/api/v1/datasource/', toValue(args)] as const
}

export function getApiV1DatasourceIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.datasource.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasourceIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.datasource.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DatasourceIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.datasource.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DatasourceIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.datasource.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DatasourceIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasourceIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.datasource.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
    >
  >,
) {
  return ['api', '/api/v1/datasource/:datasource_type/:datasource_id', toValue(args)] as const
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.datasource[':datasource_type'][':datasource_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DatasourceDatasourceTypeDatasourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.datasource[':datasource_type'][':datasource_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/datasource/:datasource_type/:datasource_id/column/:column_name/values/',
    toValue(args),
  ] as const
}

export function getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.datasource[':datasource_type'][':datasource_id'].column[
          ':column_name'
        ].values.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.datasource)[':datasource_type'][':datasource_id']['column'][':column_name']['values']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1DatasourceDatasourceTypeDatasourceIdColumnColumnNameValuesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.datasource[':datasource_type'][':datasource_id'].column[
            ':column_name'
          ].values.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>
  >,
) {
  return ['api', '/api/v1/embedded_dashboard/:uuid', toValue(args)] as const
}

export function getApiV1EmbeddedDashboardUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EmbeddedDashboardUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.embedded_dashboard[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1EmbeddedDashboardUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.embedded_dashboard)[':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EmbeddedDashboardUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EmbeddedDashboardUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.embedded_dashboard[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ExploreIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.explore.index.$get>>,
) {
  return ['api', '/api/v1/explore/', toValue(args)] as const
}

export function getApiV1ExploreIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.explore.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExploreIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.explore.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExploreIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.explore.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ExploreIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.explore.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExploreIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExploreIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.explore.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.explore.form_data.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.explore.form_data.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>
  >,
) {
  return ['api', '/api/v1/explore/form_data/:key', toValue(args)] as const
}

export function getApiV1ExploreFormDataKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExploreFormDataKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.explore.form_data[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.explore.form_data)[':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ExploreFormDataKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.explore.form_data)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExploreFormDataKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExploreFormDataKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.explore.form_data[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.explore.permalink.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.explore.permalink.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>
  >,
) {
  return ['api', '/api/v1/explore/permalink/:key', toValue(args)] as const
}

export function getApiV1ExplorePermalinkKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ExplorePermalinkKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.explore.permalink[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.explore.permalink)[':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ExplorePermalinkKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.explore.permalink)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExplorePermalinkKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ExplorePermalinkKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.explore.permalink[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.index.$get>>,
) {
  return ['api', '/api/v1/log/', toValue(args)] as const
}

export function getApiV1LogIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1LogIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>>,
) {
  return ['api', '/api/v1/log/recent_activity/', toValue(args)] as const
}

export function getApiV1LogRecentActivityIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogRecentActivityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log.recent_activity.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogRecentActivityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.log.recent_activity.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1LogRecentActivityIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.log.recent_activity.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogRecentActivityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogRecentActivityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log.recent_activity.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LogPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/log/:pk', toValue(args)] as const
}

export function getApiV1LogPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LogPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.log[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LogPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.log)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1LogPkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.log)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LogPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LogPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.log[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MeIndexQueryKey() {
  return ['api', '/api/v1/me/'] as const
}

export function getApiV1MeIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MeIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.me.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1MeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1MeIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MeIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.me.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.index.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.me.index.$put>,
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

export function getApiV1MeApiKeyScopesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MeApiKeyScopesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.me.api_key_scopes.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MeApiKeyScopesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.api_key_scopes.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeApiKeyScopesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MeApiKeyScopesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.me.api_key_scopes.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MeRolesIndexQueryKey() {
  return ['api', '/api/v1/me/roles/'] as const
}

export function getApiV1MeRolesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MeRolesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.me.roles.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MeRolesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1MeRolesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.roles.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MeRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MeRolesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.me.roles.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MenuIndexQueryKey() {
  return ['api', '/api/v1/menu/'] as const
}

export function getApiV1MenuIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MenuIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.menu.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MenuIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1MenuIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.menu.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MenuIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MenuIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.menu.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1QueryIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.query.index.$get>>,
) {
  return ['api', '/api/v1/query/', toValue(args)] as const
}

export function getApiV1QueryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.query.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QueryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.query.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.query.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1QueryIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QueryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.query.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1QueryDistinctColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/query/distinct/:column_name', toValue(args)] as const
}

export function getApiV1QueryDistinctColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QueryDistinctColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.query.distinct[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1QueryDistinctColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.query.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryDistinctColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QueryDistinctColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.query.distinct[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1QueryRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/query/related/:column_name', toValue(args)] as const
}

export function getApiV1QueryRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QueryRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.query.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.query.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1QueryRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.query.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QueryRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.query.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.query.updated_since.$get>>,
) {
  return ['api', '/api/v1/query/updated_since', toValue(args)] as const
}

export function getApiV1QueryUpdatedSinceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.query.updated_since.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QueryUpdatedSinceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.query.updated_since.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QueryUpdatedSince<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.query.updated_since.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1QueryUpdatedSinceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.query.updated_since.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryUpdatedSinceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QueryUpdatedSinceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.query.updated_since.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1QueryPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/query/:pk', toValue(args)] as const
}

export function getApiV1QueryPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1QueryPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.query[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1QueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.query)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1QueryPkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.query)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1QueryPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.query[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report.index.$get>>,
) {
  return ['api', '/api/v1/report/', toValue(args)] as const
}

export function getApiV1ReportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ReportIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report._info.$get>>,
) {
  return ['api', '/api/v1/report/_info', toValue(args)] as const
}

export function getApiV1ReportInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReportInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReportInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ReportInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.report._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReportInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReportConfigurationIndexQueryKey() {
  return ['api', '/api/v1/report/configuration/'] as const
}

export function getApiV1ReportConfigurationIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ReportConfigurationIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report.configuration.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReportConfigurationIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.report.configuration.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportConfigurationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ReportConfigurationIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report.configuration.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/report/related/:column_name', toValue(args)] as const
}

export function getApiV1ReportRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReportRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReportRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.report.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReportRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReportSlackChannelsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>>,
) {
  return ['api', '/api/v1/report/slack_channels/', toValue(args)] as const
}

export function getApiV1ReportSlackChannelsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReportSlackChannelsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report.slack_channels.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.report.slack_channels.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReportSlackChannelsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.report.slack_channels.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportSlackChannelsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReportSlackChannelsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report.slack_channels.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/report/:pk', toValue(args)] as const
}

export function getApiV1ReportPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReportPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ReportPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.report)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReportPkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReportPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.report)[':pk']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/report/:pk/log/', toValue(args)] as const
}

export function getApiV1ReportPkLogIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReportPkLogIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report[':pk'].log.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReportPkLogIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportPkLogIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReportPkLogIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report[':pk'].log.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ReportPkLogLogIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>
  >,
) {
  return ['api', '/api/v1/report/:pk/log/:log_id', toValue(args)] as const
}

export function getApiV1ReportPkLogLogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ReportPkLogLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.report[':pk'].log[':log_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ReportPkLogLogIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.report)[':pk']['log'][':log_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ReportPkLogLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ReportPkLogLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.report[':pk'].log[':log_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RowlevelsecurityIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>>,
) {
  return ['api', '/api/v1/rowlevelsecurity/', toValue(args)] as const
}

export function getApiV1RowlevelsecurityIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RowlevelsecurityIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.rowlevelsecurity.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RowlevelsecurityIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rowlevelsecurity.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1RowlevelsecurityIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RowlevelsecurityIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.rowlevelsecurity.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>>,
) {
  return ['api', '/api/v1/rowlevelsecurity/_info', toValue(args)] as const
}

export function getApiV1RowlevelsecurityInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RowlevelsecurityInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.rowlevelsecurity._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RowlevelsecurityInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.rowlevelsecurity._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1RowlevelsecurityInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.rowlevelsecurity._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RowlevelsecurityInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.rowlevelsecurity._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RowlevelsecurityRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/rowlevelsecurity/related/:column_name', toValue(args)] as const
}

export function getApiV1RowlevelsecurityRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RowlevelsecurityRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.rowlevelsecurity.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1RowlevelsecurityRelatedColumnNameQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.rowlevelsecurity.related)[':column_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RowlevelsecurityRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.rowlevelsecurity.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RowlevelsecurityPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/rowlevelsecurity/:pk', toValue(args)] as const
}

export function getApiV1RowlevelsecurityPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RowlevelsecurityPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.rowlevelsecurity[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RowlevelsecurityPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.rowlevelsecurity)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RowlevelsecurityPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RowlevelsecurityPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.rowlevelsecurity[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query.index.$get>>,
) {
  return ['api', '/api/v1/saved_query/', toValue(args)] as const
}

export function getApiV1SavedQueryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SavedQueryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.saved_query.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SavedQueryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SavedQueryIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SavedQueryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.saved_query.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.saved_query.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.saved_query.index.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query._info.$get>>,
) {
  return ['api', '/api/v1/saved_query/_info', toValue(args)] as const
}

export function getApiV1SavedQueryInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SavedQueryInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.saved_query._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SavedQueryInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SavedQueryInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SavedQueryInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.saved_query._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SavedQueryDistinctColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/saved_query/distinct/:column_name', toValue(args)] as const
}

export function getApiV1SavedQueryDistinctColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SavedQueryDistinctColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.saved_query.distinct[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SavedQueryDistinctColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.saved_query.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryDistinctColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SavedQueryDistinctColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.saved_query.distinct[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SavedQueryExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query.export.index.$get>>,
) {
  return ['api', '/api/v1/saved_query/export/', toValue(args)] as const
}

export function getApiV1SavedQueryExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SavedQueryExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.saved_query.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SavedQueryExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.saved_query.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SavedQueryExportIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.saved_query.export.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SavedQueryExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.saved_query.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/saved_query/related/:column_name', toValue(args)] as const
}

export function getApiV1SavedQueryRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SavedQueryRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.saved_query.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SavedQueryRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.saved_query.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SavedQueryRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.saved_query.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SavedQueryPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/saved_query/:pk', toValue(args)] as const
}

export function getApiV1SavedQueryPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SavedQueryPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.saved_query[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SavedQueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.saved_query)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SavedQueryPkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.saved_query)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SavedQueryPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SavedQueryPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.saved_query[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1SecurityCsrfTokenIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SecurityCsrfTokenIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.csrf_token.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityCsrfTokenIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.csrf_token.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityCsrfTokenIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SecurityCsrfTokenIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.csrf_token.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityGroupsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.groups.index.$get>>,
) {
  return ['api', '/api/v1/security/groups/', toValue(args)] as const
}

export function getApiV1SecurityGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.groups.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityGroupsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.groups.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.groups.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityGroupsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityGroupsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityGroupsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.groups.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.groups._info.$get>>,
) {
  return ['api', '/api/v1/security/groups/_info', toValue(args)] as const
}

export function getApiV1SecurityGroupsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.groups._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityGroupsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.groups._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityGroupsInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.groups._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityGroupsInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.groups._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityGroupsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityGroupsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.groups._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityGroupsPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/security/groups/:pk', toValue(args)] as const
}

export function getApiV1SecurityGroupsPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityGroupsPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.groups[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.groups)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityGroupsPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.security.groups)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityGroupsPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityGroupsPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.groups[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.v1.security.password_recovery.reset.index.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.security.password_recovery.reset.index.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/security/permissions-resources/', toValue(args)] as const
}

export function getApiV1SecurityPermissionsResourcesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityPermissionsResourcesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security['permissions-resources'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1SecurityPermissionsResourcesIndexQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsResourcesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityPermissionsResourcesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security['permissions-resources'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
  >,
) {
  return ['api', '/api/v1/security/permissions-resources/_info', toValue(args)] as const
}

export function getApiV1SecurityPermissionsResourcesInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityPermissionsResourcesInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security['permissions-resources']._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1SecurityPermissionsResourcesInfoQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources']['_info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsResourcesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityPermissionsResourcesInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security['permissions-resources']._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityPermissionsResourcesPkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>
  >,
) {
  return ['api', '/api/v1/security/permissions-resources/:pk', toValue(args)] as const
}

export function getApiV1SecurityPermissionsResourcesPkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityPermissionsResourcesPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security['permissions-resources'][':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.security)['permissions-resources'][':pk']['$get']
                  >
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
                  ReturnType<
                    (typeof client.api.v1.security)['permissions-resources'][':pk']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityPermissionsResourcesPkQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsResourcesPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityPermissionsResourcesPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security['permissions-resources'][':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.security)['permissions-resources'][':pk']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.security)['permissions-resources'][':pk']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.permissions.index.$get>>,
) {
  return ['api', '/api/v1/security/permissions/', toValue(args)] as const
}

export function getApiV1SecurityPermissionsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.permissions.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityPermissionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.permissions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.permissions.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityPermissionsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.permissions.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityPermissionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.permissions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityPermissionsInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.permissions._info.$get>>,
) {
  return ['api', '/api/v1/security/permissions/_info', toValue(args)] as const
}

export function getApiV1SecurityPermissionsInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.permissions._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityPermissionsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.permissions._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.permissions._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityPermissionsInfoQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.permissions._info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityPermissionsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.permissions._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityPermissionsPkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>
  >,
) {
  return ['api', '/api/v1/security/permissions/:pk', toValue(args)] as const
}

export function getApiV1SecurityPermissionsPkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityPermissionsPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.permissions[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.permissions)[':pk']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityPermissionsPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.security.permissions)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityPermissionsPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityPermissionsPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.permissions[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.resources.index.$get>>,
) {
  return ['api', '/api/v1/security/resources/', toValue(args)] as const
}

export function getApiV1SecurityResourcesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.resources.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityResourcesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.resources.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityResourcesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.resources.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityResourcesIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.resources.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityResourcesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityResourcesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.resources.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.resources._info.$get>>,
) {
  return ['api', '/api/v1/security/resources/_info', toValue(args)] as const
}

export function getApiV1SecurityResourcesInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.resources._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityResourcesInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.resources._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityResourcesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.resources._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityResourcesInfoQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.resources._info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityResourcesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityResourcesInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.resources._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityResourcesPkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>
  >,
) {
  return ['api', '/api/v1/security/resources/:pk', toValue(args)] as const
}

export function getApiV1SecurityResourcesPkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityResourcesPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.resources[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.resources)[':pk']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityResourcesPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.security.resources)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityResourcesPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityResourcesPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.resources[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles.index.$get>>,
) {
  return ['api', '/api/v1/security/roles/', toValue(args)] as const
}

export function getApiV1SecurityRolesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityRolesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.roles.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityRolesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityRolesIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityRolesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.roles.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles._info.$get>>,
) {
  return ['api', '/api/v1/security/roles/_info', toValue(args)] as const
}

export function getApiV1SecurityRolesInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityRolesInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.roles._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityRolesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityRolesInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.roles._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityRolesInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.roles._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityRolesSearchIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles.search.index.$get>>,
) {
  return ['api', '/api/v1/security/roles/search/', toValue(args)] as const
}

export function getApiV1SecurityRolesSearchIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles.search.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityRolesSearchIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.roles.search.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.roles.search.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityRolesSearchIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.roles.search.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesSearchIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityRolesSearchIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.roles.search.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityRolesPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/security/roles/:pk', toValue(args)] as const
}

export function getApiV1SecurityRolesPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityRolesPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.roles[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.roles)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityRolesPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.security.roles)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityRolesPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityRolesPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.roles[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.security.roles)[':role_id']['permissions']['$post']
          >,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v1/security/roles/:role_id/permissions/', toValue(args)] as const
}

export function getApiV1SecurityRolesRoleIdPermissionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.roles[':role_id'].permissions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.security.roles)[':role_id']['permissions']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityRolesRoleIdPermissionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.roles[':role_id'].permissions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.subject.index.$get>>,
) {
  return ['api', '/api/v1/security/subject/', toValue(args)] as const
}

export function getApiV1SecuritySubjectIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.subject.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecuritySubjectIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.subject.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecuritySubjectIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.subject.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecuritySubjectIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecuritySubjectIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecuritySubjectIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.subject.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecuritySubjectInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.subject._info.$get>>,
) {
  return ['api', '/api/v1/security/subject/_info', toValue(args)] as const
}

export function getApiV1SecuritySubjectInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.subject._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecuritySubjectInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.subject._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecuritySubjectInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.subject._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecuritySubjectInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.subject._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecuritySubjectInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecuritySubjectInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.subject._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecuritySubjectPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/security/subject/:pk', toValue(args)] as const
}

export function getApiV1SecuritySubjectPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecuritySubjectPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.subject[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.subject)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecuritySubjectPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.security.subject)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecuritySubjectPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecuritySubjectPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.subject[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityUserRegistrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>
  >,
) {
  return ['api', '/api/v1/security/user_registrations/', toValue(args)] as const
}

export function getApiV1SecurityUserRegistrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityUserRegistrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.user_registrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.security.user_registrations.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityUserRegistrationsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.user_registrations.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUserRegistrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityUserRegistrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.user_registrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityUserRegistrationsInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>
  >,
) {
  return ['api', '/api/v1/security/user_registrations/_info', toValue(args)] as const
}

export function getApiV1SecurityUserRegistrationsInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityUserRegistrationsInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.user_registrations._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.security.user_registrations._info.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityUserRegistrationsInfoQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.security.user_registrations._info.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUserRegistrationsInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityUserRegistrationsInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.user_registrations._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityUserRegistrationsPkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>
  >,
) {
  return ['api', '/api/v1/security/user_registrations/:pk', toValue(args)] as const
}

export function getApiV1SecurityUserRegistrationsPkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityUserRegistrationsPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.user_registrations[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>
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
                  ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityUserRegistrationsPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.security.user_registrations)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUserRegistrationsPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityUserRegistrationsPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.user_registrations[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.users.index.$get>>,
) {
  return ['api', '/api/v1/security/users/', toValue(args)] as const
}

export function getApiV1SecurityUsersIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.users.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityUsersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.users.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityUsersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.users.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityUsersIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUsersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityUsersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.users.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.users._info.$get>>,
) {
  return ['api', '/api/v1/security/users/_info', toValue(args)] as const
}

export function getApiV1SecurityUsersInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.users._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityUsersInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.users._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SecurityUsersInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.security.users._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityUsersInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.security.users._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUsersInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityUsersInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.users._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SecurityUsersPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/security/users/:pk', toValue(args)] as const
}

export function getApiV1SecurityUsersPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SecurityUsersPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.security.users[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.security.users)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SecurityUsersPkQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.security.users)[':pk']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SecurityUsersPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SecurityUsersPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.security.users[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1SemanticLayerIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SemanticLayerIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.semantic_layer.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SemanticLayerIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SemanticLayerIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.semantic_layer.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>
  >,
) {
  return ['api', '/api/v1/semantic_layer/connections/', toValue(args)] as const
}

export function getApiV1SemanticLayerConnectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SemanticLayerConnectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.semantic_layer.connections.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.v1.semantic_layer.connections.index.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SemanticLayerConnectionsIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.semantic_layer.connections.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerConnectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SemanticLayerConnectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.semantic_layer.connections.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1SemanticLayerTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SemanticLayerTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.semantic_layer.types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SemanticLayerTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.semantic_layer.types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SemanticLayerTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.semantic_layer.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SemanticLayerUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>,
) {
  return ['api', '/api/v1/semantic_layer/:uuid', toValue(args)] as const
}

export function getApiV1SemanticLayerUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SemanticLayerUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.semantic_layer[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SemanticLayerUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticLayerUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SemanticLayerUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.semantic_layer[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.semantic_layer)[':uuid']['views']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>
  >,
) {
  return ['api', '/api/v1/semantic_view/:pk/structure', toValue(args)] as const
}

export function getApiV1SemanticViewPkStructureQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SemanticViewPkStructureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.semantic_view[':pk'].structure.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>
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
                  ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SemanticViewPkStructureQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.semantic_view)[':pk']['structure']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SemanticViewPkStructureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SemanticViewPkStructureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.semantic_view[':pk'].structure.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SqllabIndexQueryKey() {
  return ['api', '/api/v1/sqllab/'] as const
}

export function getApiV1SqllabIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SqllabIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sqllab.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SqllabIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SqllabIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SqllabIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sqllab.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>
  >,
) {
  return ['api', '/api/v1/sqllab/export/:client_id/', toValue(args)] as const
}

export function getApiV1SqllabExportClientIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SqllabExportClientIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sqllab.export[':client_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1SqllabExportClientIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.sqllab.export)[':client_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabExportClientIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SqllabExportClientIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sqllab.export[':client_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>,
) {
  return ['api', '/api/v1/sqllab/permalink/:key', toValue(args)] as const
}

export function getApiV1SqllabPermalinkKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SqllabPermalinkKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sqllab.permalink[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SqllabPermalinkKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.sqllab.permalink)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabPermalinkKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SqllabPermalinkKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sqllab.permalink[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SqllabResultsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sqllab.results.index.$get>>,
) {
  return ['api', '/api/v1/sqllab/results/', toValue(args)] as const
}

export function getApiV1SqllabResultsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sqllab.results.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SqllabResultsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sqllab.results.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SqllabResultsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.sqllab.results.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1SqllabResultsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sqllab.results.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SqllabResultsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SqllabResultsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sqllab.results.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.index.$get>>,
) {
  return ['api', '/api/v1/tag/', toValue(args)] as const
}

export function getApiV1TagIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TagIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag._info.$get>>,
) {
  return ['api', '/api/v1/tag/_info', toValue(args)] as const
}

export function getApiV1TagInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TagInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>>,
) {
  return ['api', '/api/v1/tag/favorite_status/', toValue(args)] as const
}

export function getApiV1TagFavoriteStatusIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagFavoriteStatusIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.favorite_status.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.favorite_status.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1TagFavoriteStatusIndexQueryKey>
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
          Awaited<ReturnType<typeof client.api.v1.tag.favorite_status.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagFavoriteStatusIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagFavoriteStatusIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.favorite_status.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagGetObjectsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>>,
) {
  return ['api', '/api/v1/tag/get_objects/', toValue(args)] as const
}

export function getApiV1TagGetObjectsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagGetObjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.get_objects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagGetObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.tag.get_objects.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1TagGetObjectsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.tag.get_objects.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagGetObjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagGetObjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.get_objects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TagRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/tag/related/:column_name', toValue(args)] as const
}

export function getApiV1TagRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.tag.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TagRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.tag.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/tag/:pk', toValue(args)] as const
}

export function getApiV1TagPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TagPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.tag[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TagPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.tag)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1TagPkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TagPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TagPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.tag[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.tag)[':pk']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tag)[':pk']['$delete']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.tag)[':pk']['favorites']['index']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme.index.$get>>,
) {
  return ['api', '/api/v1/theme/', toValue(args)] as const
}

export function getApiV1ThemeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ThemeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.theme.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ThemeIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ThemeIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ThemeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.theme.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme._info.$get>>,
) {
  return ['api', '/api/v1/theme/_info', toValue(args)] as const
}

export function getApiV1ThemeInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ThemeInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.theme._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ThemeInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ThemeInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ThemeInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.theme._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ThemeExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme.export.index.$get>>,
) {
  return ['api', '/api/v1/theme/export/', toValue(args)] as const
}

export function getApiV1ThemeExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ThemeExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.theme.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ThemeExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.theme.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ThemeExportIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ThemeExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.theme.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.theme.import.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.theme.import.index.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>
  >,
) {
  return ['api', '/api/v1/theme/related/:column_name', toValue(args)] as const
}

export function getApiV1ThemeRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ThemeRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.theme.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.theme.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ThemeRelatedColumnNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.theme.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ThemeRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.theme.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ThemeSystemQueryKey() {
  return ['api', '/api/v1/theme/system'] as const
}

export function getApiV1ThemeSystemQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ThemeSystemQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.theme.system.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ThemeSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ThemeSystemQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.theme.system.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemeSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ThemeSystemQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.theme.system.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>>,
) {
  return ['api', '/api/v1/theme/:pk', toValue(args)] as const
}

export function getApiV1ThemePkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ThemePkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.theme[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ThemePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.theme)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1ThemePkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.theme)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ThemePkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ThemePkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.theme[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.theme)[':pk']['set_system_default']['$put']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>
  >,
) {
  return ['api', '/api/v1/user/:user_id/avatar.png', toValue(args)] as const
}

export function getApiV1UserUserIdAvatarPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UserUserIdAvatarPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.user[':user_id']['avatar.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UserUserIdAvatarPngQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.user)[':user_id']['avatar.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UserUserIdAvatarPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UserUserIdAvatarPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.user[':user_id']['avatar.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
