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

export function getAnnotationLayerKey() {
  return ['annotation_layer'] as const
}

export function getAsyncEventKey() {
  return ['async_event'] as const
}

export function getCachekeyKey() {
  return ['cachekey'] as const
}

export function getChartKey() {
  return ['chart'] as const
}

export function getCssTemplateKey() {
  return ['css_template'] as const
}

export function getDashboardKey() {
  return ['dashboard'] as const
}

export function getDatabaseKey() {
  return ['database'] as const
}

export function getDatasetKey() {
  return ['dataset'] as const
}

export function getLogKey() {
  return ['log'] as const
}

export function getMenuKey() {
  return ['menu'] as const
}

export function getOpenapiKey() {
  return ['openapi'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getSavedQueryKey() {
  return ['saved_query'] as const
}

export function getSecurityKey() {
  return ['security'] as const
}

export function getAnnotationLayerIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotation_layer.index.$get>>,
) {
  return ['annotation_layer', '/annotation_layer/', toValue(args)] as const
}

export function getAnnotationLayerIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotation_layer.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationLayerIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotation_layer.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationLayerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotation_layer.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
            >
          >,
          ReturnType<typeof getAnnotationLayerIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationLayerIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotation_layer.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnnotationLayerIndexMutationKey() {
  return ['annotation_layer', '/annotation_layer/', 'POST'] as const
}

export function getPostAnnotationLayerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.annotation_layer.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnnotationLayerIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.annotation_layer.index.$post>) {
      return parseResponse(client.annotation_layer.index.$post(args, options))
    },
  })
}

export function usePostAnnotationLayerIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.annotation_layer.index.$post>,
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
  const mutationDefaults = getPostAnnotationLayerIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAnnotationLayerIndexMutationKey() {
  return ['annotation_layer', '/annotation_layer/', 'DELETE'] as const
}

export function getDeleteAnnotationLayerIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.annotation_layer.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnnotationLayerIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.annotation_layer.index.$delete>) {
      return parseResponse(client.annotation_layer.index.$delete(args, options))
    },
  })
}

export function useDeleteAnnotationLayerIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.annotation_layer.index.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.annotation_layer.index.$delete>,
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
  const mutationDefaults = getDeleteAnnotationLayerIndexMutationOptions<TError, TOnMutateResult>(
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

export function getAnnotationLayerInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotation_layer._info.$get>>,
) {
  return ['annotation_layer', '/annotation_layer/_info', toValue(args)] as const
}

export function getAnnotationLayerInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotation_layer._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationLayerInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotation_layer._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationLayerInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotation_layer._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
            >
          >,
          ReturnType<typeof getAnnotationLayerInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationLayerInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotation_layer._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationLayerRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>
  >,
) {
  return ['annotation_layer', '/annotation_layer/related/:column_name', toValue(args)] as const
}

export function getAnnotationLayerRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationLayerRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotation_layer.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationLayerRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>
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
                  ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationLayerRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationLayerRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotation_layer.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationLayerPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>>,
) {
  return ['annotation_layer', '/annotation_layer/:pk', toValue(args)] as const
}

export function getAnnotationLayerPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationLayerPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotation_layer[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationLayerPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnnotationLayerPkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationLayerPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotation_layer[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnnotationLayerPkMutationKey() {
  return ['annotation_layer', '/annotation_layer/:pk', 'PUT'] as const
}

export function getPutAnnotationLayerPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.annotation_layer)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnnotationLayerPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.annotation_layer)[':pk']['$put']>) {
      return parseResponse(client.annotation_layer[':pk'].$put(args, options))
    },
  })
}

export function usePutAnnotationLayerPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.annotation_layer)[':pk']['$put']>,
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
  const mutationDefaults = getPutAnnotationLayerPkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAnnotationLayerPkMutationKey() {
  return ['annotation_layer', '/annotation_layer/:pk', 'DELETE'] as const
}

export function getDeleteAnnotationLayerPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.annotation_layer)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnnotationLayerPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.annotation_layer)[':pk']['$delete']>) {
      return parseResponse(client.annotation_layer[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteAnnotationLayerPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.annotation_layer)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteAnnotationLayerPkMutationOptions<TError, TOnMutateResult>(
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

export function getAnnotationLayerPkAnnotationIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
  >,
) {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/', toValue(args)] as const
}

export function getAnnotationLayerPkAnnotationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationLayerPkAnnotationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotation_layer[':pk'].annotation.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationLayerPkAnnotationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
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
                  ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationLayerPkAnnotationIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerPkAnnotationIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationLayerPkAnnotationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotation_layer[':pk'].annotation.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnnotationLayerPkAnnotationIndexMutationKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/', 'POST'] as const
}

export function getPostAnnotationLayerPkAnnotationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnnotationLayerPkAnnotationIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.annotation_layer)[':pk']['annotation']['index']['$post']
      >,
    ) {
      return parseResponse(client.annotation_layer[':pk'].annotation.index.$post(args, options))
    },
  })
}

export function usePostAnnotationLayerPkAnnotationIndex<
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
                    (typeof client.annotation_layer)[':pk']['annotation']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$post']>,
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
  const mutationDefaults = getPostAnnotationLayerPkAnnotationIndexMutationOptions<
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

export function getDeleteAnnotationLayerPkAnnotationIndexMutationKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/', 'DELETE'] as const
}

export function getDeleteAnnotationLayerPkAnnotationIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnnotationLayerPkAnnotationIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']
      >,
    ) {
      return parseResponse(client.annotation_layer[':pk'].annotation.index.$delete(args, options))
    },
  })
}

export function useDeleteAnnotationLayerPkAnnotationIndex<
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
                    (typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']
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
  const mutationDefaults = getDeleteAnnotationLayerPkAnnotationIndexMutationOptions<
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

export function getAnnotationLayerPkAnnotationAnnotationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
    >
  >,
) {
  return [
    'annotation_layer',
    '/annotation_layer/:pk/annotation/:annotation_id',
    toValue(args),
  ] as const
}

export function getAnnotationLayerPkAnnotationAnnotationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationLayerPkAnnotationAnnotationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotation_layer[':pk'].annotation[':annotation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationLayerPkAnnotationAnnotationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
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
                    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
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
                    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnnotationLayerPkAnnotationAnnotationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerPkAnnotationAnnotationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationLayerPkAnnotationAnnotationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotation_layer[':pk'].annotation[':annotation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnnotationLayerPkAnnotationAnnotationIdMutationKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/:annotation_id', 'PUT'] as const
}

export function getPutAnnotationLayerPkAnnotationAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAnnotationLayerPkAnnotationAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
      >,
    ) {
      return parseResponse(
        client.annotation_layer[':pk'].annotation[':annotation_id'].$put(args, options),
      )
    },
  })
}

export function usePutAnnotationLayerPkAnnotationAnnotationId<
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
                    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
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
  const mutationDefaults = getPutAnnotationLayerPkAnnotationAnnotationIdMutationOptions<
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

export function getDeleteAnnotationLayerPkAnnotationAnnotationIdMutationKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/:annotation_id', 'DELETE'] as const
}

export function getDeleteAnnotationLayerPkAnnotationAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnnotationLayerPkAnnotationAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.annotation_layer[':pk'].annotation[':annotation_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAnnotationLayerPkAnnotationAnnotationId<
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
                    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
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
  const mutationDefaults = getDeleteAnnotationLayerPkAnnotationAnnotationIdMutationOptions<
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

export function getAsyncEventIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.async_event.index.$get>>,
) {
  return ['async_event', '/async_event/', toValue(args)] as const
}

export function getAsyncEventIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.async_event.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAsyncEventIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.async_event.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAsyncEventIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.async_event.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>
            >
          >,
          ReturnType<typeof getAsyncEventIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAsyncEventIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAsyncEventIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.async_event.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCachekeyInvalidateMutationKey() {
  return ['cachekey', '/cachekey/invalidate', 'POST'] as const
}

export function getPostCachekeyInvalidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cachekey.invalidate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cachekey.invalidate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCachekeyInvalidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cachekey.invalidate.$post>) {
      return parseResponse(client.cachekey.invalidate.$post(args, options))
    },
  })
}

export function usePostCachekeyInvalidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cachekey.invalidate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cachekey.invalidate.$post>,
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
  const mutationDefaults = getPostCachekeyInvalidateMutationOptions<TError, TOnMutateResult>(
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

export function getChartIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.index.$get>>,
) {
  return ['chart', '/chart/', toValue(args)] as const
}

export function getChartIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChartIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
          >,
          ReturnType<typeof getChartIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChartIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChartIndexMutationKey() {
  return ['chart', '/chart/', 'POST'] as const
}

export function getPostChartIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.chart.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChartIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chart.index.$post>) {
      return parseResponse(client.chart.index.$post(args, options))
    },
  })
}

export function usePostChartIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.chart.index.$post>,
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
  const mutationDefaults = getPostChartIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteChartIndexMutationKey() {
  return ['chart', '/chart/', 'DELETE'] as const
}

export function getDeleteChartIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.chart.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChartIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chart.index.$delete>) {
      return parseResponse(client.chart.index.$delete(args, options))
    },
  })
}

export function useDeleteChartIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.chart.index.$delete>,
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
  const mutationDefaults = getDeleteChartIndexMutationOptions<TError, TOnMutateResult>(
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

export function getChartInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart._info.$get>>,
) {
  return ['chart', '/chart/_info', toValue(args)] as const
}

export function getChartInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart._info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChartInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
          >,
          ReturnType<typeof getChartInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChartInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChartDataMutationKey() {
  return ['chart', '/chart/data', 'POST'] as const
}

export function getPostChartDataMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.data.$post>>>>>,
    TError,
    InferRequestType<typeof client.chart.data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChartDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chart.data.$post>) {
      return parseResponse(client.chart.data.$post(args, options))
    },
  })
}

export function usePostChartData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.data.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.chart.data.$post>,
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
  const mutationDefaults = getPostChartDataMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChartDataCacheKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>>,
) {
  return ['chart', '/chart/data/:cache_key', toValue(args)] as const
}

export function getChartDataCacheKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartDataCacheKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart.data[':cache_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartDataCacheKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartDataCacheKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartDataCacheKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartDataCacheKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart.data[':cache_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.export.index.$get>>,
) {
  return ['chart', '/chart/export/', toValue(args)] as const
}

export function getChartExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>
            >
          >,
          ReturnType<typeof getChartExportIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartFavoriteStatusIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.favorite_status.index.$get>>,
) {
  return ['chart', '/chart/favorite_status/', toValue(args)] as const
}

export function getChartFavoriteStatusIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.favorite_status.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartFavoriteStatusIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart.favorite_status.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chart.favorite_status.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>
              >
            >
          >,
          ReturnType<typeof getChartFavoriteStatusIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartFavoriteStatusIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartFavoriteStatusIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart.favorite_status.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChartImportIndexMutationKey() {
  return ['chart', '/chart/import/', 'POST'] as const
}

export function getPostChartImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.import.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chart.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChartImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chart.import.index.$post>) {
      return parseResponse(client.chart.import.index.$post(args, options))
    },
  })
}

export function usePostChartImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chart.import.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chart.import.index.$post>,
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
  const mutationDefaults = getPostChartImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getChartRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart.related)[':column_name']['$get']>>,
) {
  return ['chart', '/chart/related/:column_name', toValue(args)] as const
}

export function getChartRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart.related)[':column_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart.related)[':column_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart)[':pk']['$get']>>,
) {
  return ['chart', '/chart/:pk', toValue(args)] as const
}

export function getChartPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart[':pk'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChartPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getChartPkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChartPkMutationKey() {
  return ['chart', '/chart/:pk', 'PUT'] as const
}

export function getPutChartPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.chart)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChartPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.chart)[':pk']['$put']>) {
      return parseResponse(client.chart[':pk'].$put(args, options))
    },
  })
}

export function usePutChartPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.chart)[':pk']['$put']>,
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
  const mutationDefaults = getPutChartPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteChartPkMutationKey() {
  return ['chart', '/chart/:pk', 'DELETE'] as const
}

export function getDeleteChartPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.chart)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChartPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.chart)[':pk']['$delete']>) {
      return parseResponse(client.chart[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteChartPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.chart)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteChartPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChartPkCacheScreenshotIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>
  >,
) {
  return ['chart', '/chart/:pk/cache_screenshot/', toValue(args)] as const
}

export function getChartPkCacheScreenshotIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartPkCacheScreenshotIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart[':pk'].cache_screenshot.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartPkCacheScreenshotIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>
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
                  ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChartPkCacheScreenshotIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartPkCacheScreenshotIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartPkCacheScreenshotIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart[':pk'].cache_screenshot.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartPkDataIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>>,
) {
  return ['chart', '/chart/:pk/data/', toValue(args)] as const
}

export function getChartPkDataIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartPkDataIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart[':pk'].data.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartPkDataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChartPkDataIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartPkDataIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartPkDataIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart[':pk'].data.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartPkScreenshotDigestIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
  >,
) {
  return ['chart', '/chart/:pk/screenshot/:digest/', toValue(args)] as const
}

export function getChartPkScreenshotDigestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartPkScreenshotDigestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart[':pk'].screenshot[':digest'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartPkScreenshotDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
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
                  ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChartPkScreenshotDigestIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartPkScreenshotDigestIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartPkScreenshotDigestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart[':pk'].screenshot[':digest'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChartPkThumbnailDigestIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
) {
  return ['chart', '/chart/:pk/thumbnail/:digest/', toValue(args)] as const
}

export function getChartPkThumbnailDigestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChartPkThumbnailDigestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chart[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChartPkThumbnailDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
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
                  ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChartPkThumbnailDigestIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartPkThumbnailDigestIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChartPkThumbnailDigestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chart[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCssTemplateIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.css_template.index.$get>>,
) {
  return ['css_template', '/css_template/', toValue(args)] as const
}

export function getCssTemplateIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.css_template.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCssTemplateIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.css_template.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCssTemplateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.css_template.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>
            >
          >,
          ReturnType<typeof getCssTemplateIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCssTemplateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCssTemplateIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.css_template.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCssTemplateIndexMutationKey() {
  return ['css_template', '/css_template/', 'POST'] as const
}

export function getPostCssTemplateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.css_template.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCssTemplateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.css_template.index.$post>) {
      return parseResponse(client.css_template.index.$post(args, options))
    },
  })
}

export function usePostCssTemplateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.css_template.index.$post>,
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
  const mutationDefaults = getPostCssTemplateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCssTemplateIndexMutationKey() {
  return ['css_template', '/css_template/', 'DELETE'] as const
}

export function getDeleteCssTemplateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.css_template.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCssTemplateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.css_template.index.$delete>) {
      return parseResponse(client.css_template.index.$delete(args, options))
    },
  })
}

export function useDeleteCssTemplateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.css_template.index.$delete>,
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
  const mutationDefaults = getDeleteCssTemplateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getCssTemplateInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.css_template._info.$get>>,
) {
  return ['css_template', '/css_template/_info', toValue(args)] as const
}

export function getCssTemplateInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.css_template._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCssTemplateInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.css_template._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCssTemplateInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.css_template._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>
            >
          >,
          ReturnType<typeof getCssTemplateInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCssTemplateInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCssTemplateInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.css_template._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCssTemplateRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>
  >,
) {
  return ['css_template', '/css_template/related/:column_name', toValue(args)] as const
}

export function getCssTemplateRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCssTemplateRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.css_template.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCssTemplateRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCssTemplateRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCssTemplateRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCssTemplateRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.css_template.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCssTemplatePkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.css_template)[':pk']['$get']>>,
) {
  return ['css_template', '/css_template/:pk', toValue(args)] as const
}

export function getCssTemplatePkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.css_template)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCssTemplatePkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.css_template[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCssTemplatePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.css_template)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getCssTemplatePkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCssTemplatePkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCssTemplatePkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.css_template[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCssTemplatePkMutationKey() {
  return ['css_template', '/css_template/:pk', 'PUT'] as const
}

export function getPutCssTemplatePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.css_template)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCssTemplatePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.css_template)[':pk']['$put']>) {
      return parseResponse(client.css_template[':pk'].$put(args, options))
    },
  })
}

export function usePutCssTemplatePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.css_template)[':pk']['$put']>,
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
  const mutationDefaults = getPutCssTemplatePkMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCssTemplatePkMutationKey() {
  return ['css_template', '/css_template/:pk', 'DELETE'] as const
}

export function getDeleteCssTemplatePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.css_template)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCssTemplatePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.css_template)[':pk']['$delete']>) {
      return parseResponse(client.css_template[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteCssTemplatePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.css_template)[':pk']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.css_template)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteCssTemplatePkMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.index.$get>>,
) {
  return ['dashboard', '/dashboard/', toValue(args)] as const
}

export function getDashboardIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>
            >
          >,
          ReturnType<typeof getDashboardIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDashboardIndexMutationKey() {
  return ['dashboard', '/dashboard/', 'POST'] as const
}

export function getPostDashboardIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dashboard.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboard.index.$post>) {
      return parseResponse(client.dashboard.index.$post(args, options))
    },
  })
}

export function usePostDashboardIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dashboard.index.$post>,
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
  const mutationDefaults = getPostDashboardIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDashboardIndexMutationKey() {
  return ['dashboard', '/dashboard/', 'DELETE'] as const
}

export function getDeleteDashboardIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.dashboard.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboard.index.$delete>) {
      return parseResponse(client.dashboard.index.$delete(args, options))
    },
  })
}

export function useDeleteDashboardIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dashboard.index.$delete>,
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
  const mutationDefaults = getDeleteDashboardIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard._info.$get>>,
) {
  return ['dashboard', '/dashboard/_info', toValue(args)] as const
}

export function getDashboardInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>
            >
          >,
          ReturnType<typeof getDashboardInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.export.index.$get>>,
) {
  return ['dashboard', '/dashboard/export/', toValue(args)] as const
}

export function getDashboardExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
            >
          >,
          ReturnType<typeof getDashboardExportIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardFavoriteStatusIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.favorite_status.index.$get>>,
) {
  return ['dashboard', '/dashboard/favorite_status/', toValue(args)] as const
}

export function getDashboardFavoriteStatusIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.favorite_status.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardFavoriteStatusIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard.favorite_status.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.favorite_status.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>
              >
            >
          >,
          ReturnType<typeof getDashboardFavoriteStatusIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardFavoriteStatusIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardFavoriteStatusIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard.favorite_status.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDashboardImportIndexMutationKey() {
  return ['dashboard', '/dashboard/import/', 'POST'] as const
}

export function getPostDashboardImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dashboard.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboard.import.index.$post>) {
      return parseResponse(client.dashboard.import.index.$post(args, options))
    },
  })
}

export function usePostDashboardImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.import.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dashboard.import.index.$post>,
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
  const mutationDefaults = getPostDashboardImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>
  >,
) {
  return ['dashboard', '/dashboard/related/:column_name', toValue(args)] as const
}

export function getDashboardRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardIdOrSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>>,
) {
  return ['dashboard', '/dashboard/:id_or_slug', toValue(args)] as const
}

export function getDashboardIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardIdOrSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard[':id_or_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardIdOrSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardIdOrSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard[':id_or_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardIdOrSlugChartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>
  >,
) {
  return ['dashboard', '/dashboard/:id_or_slug/charts', toValue(args)] as const
}

export function getDashboardIdOrSlugChartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardIdOrSlugChartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard[':id_or_slug'].charts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardIdOrSlugCharts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardIdOrSlugChartsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardIdOrSlugChartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardIdOrSlugChartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard[':id_or_slug'].charts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardIdOrSlugDatasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>
  >,
) {
  return ['dashboard', '/dashboard/:id_or_slug/datasets', toValue(args)] as const
}

export function getDashboardIdOrSlugDatasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardIdOrSlugDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard[':id_or_slug'].datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardIdOrSlugDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardIdOrSlugDatasetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardIdOrSlugDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardIdOrSlugDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard[':id_or_slug'].datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDashboardPkMutationKey() {
  return ['dashboard', '/dashboard/:pk', 'PUT'] as const
}

export function getPutDashboardPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboard)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDashboardPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dashboard)[':pk']['$put']>) {
      return parseResponse(client.dashboard[':pk'].$put(args, options))
    },
  })
}

export function usePutDashboardPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':pk']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.dashboard)[':pk']['$put']>,
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
  const mutationDefaults = getPutDashboardPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDashboardPkMutationKey() {
  return ['dashboard', '/dashboard/:pk', 'DELETE'] as const
}

export function getDeleteDashboardPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboard)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dashboard)[':pk']['$delete']>) {
      return parseResponse(client.dashboard[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteDashboardPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':pk']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.dashboard)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteDashboardPkMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardPkThumbnailDigestIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
) {
  return ['dashboard', '/dashboard/:pk/thumbnail/:digest/', toValue(args)] as const
}

export function getDashboardPkThumbnailDigestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardPkThumbnailDigestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardPkThumbnailDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
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
                    (typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
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
                    (typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDashboardPkThumbnailDigestIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
            ReturnType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardPkThumbnailDigestIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardPkThumbnailDigestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard[':pk'].thumbnail[':digest'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabaseIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database.index.$get>>,
) {
  return ['database', '/database/', toValue(args)] as const
}

export function getDatabaseIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabaseIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabaseIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
          >,
          ReturnType<typeof getDatabaseIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabaseIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabaseIndexMutationKey() {
  return ['database', '/database/', 'POST'] as const
}

export function getPostDatabaseIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.database.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabaseIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.database.index.$post>) {
      return parseResponse(client.database.index.$post(args, options))
    },
  })
}

export function usePostDatabaseIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.database.index.$post>,
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
  const mutationDefaults = getPostDatabaseIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDatabaseInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database._info.$get>>,
) {
  return ['database', '/database/_info', toValue(args)] as const
}

export function getDatabaseInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabaseInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabaseInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
          >,
          ReturnType<typeof getDatabaseInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabaseInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabaseAvailableIndexQueryKey() {
  return ['database', '/database/available/'] as const
}

export function getDatabaseAvailableIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDatabaseAvailableIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database.available.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabaseAvailableIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
            >
          >,
          ReturnType<typeof getDatabaseAvailableIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseAvailableIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDatabaseAvailableIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.database.available.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabaseExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database.export.index.$get>>,
) {
  return ['database', '/database/export/', toValue(args)] as const
}

export function getDatabaseExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabaseExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabaseExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.database.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
            >
          >,
          ReturnType<typeof getDatabaseExportIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabaseExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabaseImportIndexMutationKey() {
  return ['database', '/database/import/', 'POST'] as const
}

export function getPostDatabaseImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.database.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabaseImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.database.import.index.$post>) {
      return parseResponse(client.database.import.index.$post(args, options))
    },
  })
}

export function usePostDatabaseImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.database.import.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.database.import.index.$post>,
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
  const mutationDefaults = getPostDatabaseImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatabaseTestConnectionMutationKey() {
  return ['database', '/database/test_connection', 'POST'] as const
}

export function getPostDatabaseTestConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.test_connection.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.database.test_connection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabaseTestConnectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.database.test_connection.$post>) {
      return parseResponse(client.database.test_connection.$post(args, options))
    },
  })
}

export function usePostDatabaseTestConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.database.test_connection.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.database.test_connection.$post>,
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
  const mutationDefaults = getPostDatabaseTestConnectionMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatabaseValidateParametersMutationKey() {
  return ['database', '/database/validate_parameters', 'POST'] as const
}

export function getPostDatabaseValidateParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.validate_parameters.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.database.validate_parameters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabaseValidateParametersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.database.validate_parameters.$post>) {
      return parseResponse(client.database.validate_parameters.$post(args, options))
    },
  })
}

export function usePostDatabaseValidateParameters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.database.validate_parameters.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.database.validate_parameters.$post>,
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
  const mutationDefaults = getPostDatabaseValidateParametersMutationOptions<
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

export function getDatabasePkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.database)[':pk']['$get']>>,
) {
  return ['database', '/database/:pk', toValue(args)] as const
}

export function getDatabasePkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.database)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasePkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasePk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.database)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getDatabasePkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasePkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasePkMutationKey() {
  return ['database', '/database/:pk', 'PUT'] as const
}

export function getPutDatabasePkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.database)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.database)[':pk']['$put']>) {
      return parseResponse(client.database[':pk'].$put(args, options))
    },
  })
}

export function usePutDatabasePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.database)[':pk']['$put']>,
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
  const mutationDefaults = getPutDatabasePkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDatabasePkMutationKey() {
  return ['database', '/database/:pk', 'DELETE'] as const
}

export function getDeleteDatabasePkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.database)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasePkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.database)[':pk']['$delete']>) {
      return parseResponse(client.database[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteDatabasePk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.database)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteDatabasePkMutationOptions<TError, TOnMutateResult>(
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

export function getDatabasePkFunctionNamesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>
  >,
) {
  return ['database', '/database/:pk/function_names/', toValue(args)] as const
}

export function getDatabasePkFunctionNamesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasePkFunctionNamesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database[':pk'].function_names.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasePkFunctionNamesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>
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
                  ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDatabasePkFunctionNamesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkFunctionNamesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasePkFunctionNamesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database[':pk'].function_names.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasePkRelatedObjectsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>
  >,
) {
  return ['database', '/database/:pk/related_objects/', toValue(args)] as const
}

export function getDatabasePkRelatedObjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasePkRelatedObjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database[':pk'].related_objects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasePkRelatedObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>
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
                  ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDatabasePkRelatedObjectsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkRelatedObjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasePkRelatedObjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database[':pk'].related_objects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasePkSchemasIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>
  >,
) {
  return ['database', '/database/:pk/schemas/', toValue(args)] as const
}

export function getDatabasePkSchemasIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasePkSchemasIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database[':pk'].schemas.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasePkSchemasIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatabasePkSchemasIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkSchemasIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasePkSchemasIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database[':pk'].schemas.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasePkSelectStarTableNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']>
  >,
) {
  return ['database', '/database/:pk/select_star/:table_name/', toValue(args)] as const
}

export function getDatabasePkSelectStarTableNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasePkSelectStarTableNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database[':pk'].select_star[':table_name'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasePkSelectStarTableNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']>
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
                    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
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
                    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasePkSelectStarTableNameIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkSelectStarTableNameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasePkSelectStarTableNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database[':pk'].select_star[':table_name'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
    >
  >,
) {
  return ['database', '/database/:pk/select_star/:table_name/:schema_name/', toValue(args)] as const
}

export function getDatabasePkSelectStarTableNameSchemaNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDatabasePkSelectStarTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
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
                    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
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
                    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasePkTableTableNameSchemaNameIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
    >
  >,
) {
  return ['database', '/database/:pk/table/:table_name/:schema_name/', toValue(args)] as const
}

export function getDatabasePkTableTableNameSchemaNameIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasePkTableTableNameSchemaNameIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.database[':pk'].table[':table_name'][':schema_name'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasePkTableTableNameSchemaNameIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
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
                    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
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
                    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasePkTableTableNameSchemaNameIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkTableTableNameSchemaNameIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasePkTableTableNameSchemaNameIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.database[':pk'].table[':table_name'][':schema_name'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset.index.$get>>,
) {
  return ['dataset', '/dataset/', toValue(args)] as const
}

export function getDatasetIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataset.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
          >,
          ReturnType<typeof getDatasetIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataset.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetIndexMutationKey() {
  return ['dataset', '/dataset/', 'POST'] as const
}

export function getPostDatasetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dataset.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dataset.index.$post>) {
      return parseResponse(client.dataset.index.$post(args, options))
    },
  })
}

export function usePostDatasetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.dataset.index.$post>,
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
  const mutationDefaults = getPostDatasetIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatasetIndexMutationKey() {
  return ['dataset', '/dataset/', 'DELETE'] as const
}

export function getDeleteDatasetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.dataset.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dataset.index.$delete>) {
      return parseResponse(client.dataset.index.$delete(args, options))
    },
  })
}

export function useDeleteDatasetIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dataset.index.$delete>,
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
  const mutationDefaults = getDeleteDatasetIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDatasetInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset._info.$get>>,
) {
  return ['dataset', '/dataset/_info', toValue(args)] as const
}

export function getDatasetInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataset._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
          >,
          ReturnType<typeof getDatasetInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataset._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetDistinctColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>
  >,
) {
  return ['dataset', '/dataset/distinct/:column_name', toValue(args)] as const
}

export function getDatasetDistinctColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetDistinctColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataset.distinct[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetDistinctColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetDistinctColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetDistinctColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataset.distinct[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset.export.index.$get>>,
) {
  return ['dataset', '/dataset/export/', toValue(args)] as const
}

export function getDatasetExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataset.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dataset.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
            >
          >,
          ReturnType<typeof getDatasetExportIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataset.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetImportIndexMutationKey() {
  return ['dataset', '/dataset/import/', 'POST'] as const
}

export function getPostDatasetImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dataset.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dataset.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dataset.import.index.$post>) {
      return parseResponse(client.dataset.import.index.$post(args, options))
    },
  })
}

export function usePostDatasetImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dataset.import.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dataset.import.index.$post>,
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
  const mutationDefaults = getPostDatasetImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDatasetRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>>,
) {
  return ['dataset', '/dataset/related/:column_name', toValue(args)] as const
}

export function getDatasetRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataset.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataset.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataset)[':pk']['$get']>>,
) {
  return ['dataset', '/dataset/:pk', toValue(args)] as const
}

export function getDatasetPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataset)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataset[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dataset)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getDatasetPkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataset[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatasetPkMutationKey() {
  return ['dataset', '/dataset/:pk', 'PUT'] as const
}

export function getPutDatasetPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.dataset)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasetPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dataset)[':pk']['$put']>) {
      return parseResponse(client.dataset[':pk'].$put(args, options))
    },
  })
}

export function usePutDatasetPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.dataset)[':pk']['$put']>,
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
  const mutationDefaults = getPutDatasetPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDatasetPkMutationKey() {
  return ['dataset', '/dataset/:pk', 'DELETE'] as const
}

export function getDeleteDatasetPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dataset)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dataset)[':pk']['$delete']>) {
      return parseResponse(client.dataset[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteDatasetPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.dataset)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDatasetPkColumnColumnIdMutationKey() {
  return ['dataset', '/dataset/:pk/column/:column_id', 'DELETE'] as const
}

export function getDeleteDatasetPkColumnColumnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetPkColumnColumnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>,
    ) {
      return parseResponse(client.dataset[':pk'].column[':column_id'].$delete(args, options))
    },
  })
}

export function useDeleteDatasetPkColumnColumnId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetPkColumnColumnIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatasetPkMetricMetricIdMutationKey() {
  return ['dataset', '/dataset/:pk/metric/:metric_id', 'DELETE'] as const
}

export function getDeleteDatasetPkMetricMetricIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetPkMetricMetricIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>,
    ) {
      return parseResponse(client.dataset[':pk'].metric[':metric_id'].$delete(args, options))
    },
  })
}

export function useDeleteDatasetPkMetricMetricId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetPkMetricMetricIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutDatasetPkRefreshMutationKey() {
  return ['dataset', '/dataset/:pk/refresh', 'PUT'] as const
}

export function getPutDatasetPkRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['refresh']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dataset)[':pk']['refresh']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasetPkRefreshMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dataset)[':pk']['refresh']['$put']>) {
      return parseResponse(client.dataset[':pk'].refresh.$put(args, options))
    },
  })
}

export function usePutDatasetPkRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataset)[':pk']['refresh']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dataset)[':pk']['refresh']['$put']>,
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
  const mutationDefaults = getPutDatasetPkRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getDatasetPkRelatedObjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>
  >,
) {
  return ['dataset', '/dataset/:pk/related_objects', toValue(args)] as const
}

export function getDatasetPkRelatedObjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetPkRelatedObjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dataset[':pk'].related_objects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetPkRelatedObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetPkRelatedObjectsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetPkRelatedObjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetPkRelatedObjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dataset[':pk'].related_objects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.log.index.$get>>,
) {
  return ['log', '/log/', toValue(args)] as const
}

export function getLogIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.log.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.log.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.log.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
          >,
          ReturnType<typeof getLogIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.log.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLogIndexMutationKey() {
  return ['log', '/log/', 'POST'] as const
}

export function getPostLogIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.log.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLogIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.log.index.$post>) {
      return parseResponse(client.log.index.$post(args, options))
    },
  })
}

export function usePostLogIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.log.index.$post>,
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
  const mutationDefaults = getPostLogIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLogPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.log)[':pk']['$get']>>,
) {
  return ['log', '/log/:pk', toValue(args)] as const
}

export function getLogPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.log)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.log[':pk'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.log)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getLogPkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.log[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMenuIndexQueryKey() {
  return ['menu', '/menu/'] as const
}

export function getMenuIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMenuIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.menu.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMenuIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
          >,
          ReturnType<typeof getMenuIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMenuIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMenuIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.menu.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiVersionOpenapiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>>,
) {
  return ['openapi', '/openapi/:version/_openapi', toValue(args)] as const
}

export function getOpenapiVersionOpenapiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOpenapiVersionOpenapiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.openapi[':version']._openapi.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOpenapiVersionOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOpenapiVersionOpenapiQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiVersionOpenapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOpenapiVersionOpenapiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.openapi[':version']._openapi.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.index.$get>>,
) {
  return ['query', '/query/', toValue(args)] as const
}

export function getQueryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
          >,
          ReturnType<typeof getQueryIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryDistinctColumnNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>>,
) {
  return ['query', '/query/distinct/:column_name', toValue(args)] as const
}

export function getQueryDistinctColumnNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryDistinctColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.distinct[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueryDistinctColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryDistinctColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryDistinctColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.distinct[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.related)[':column_name']['$get']>>,
) {
  return ['query', '/query/related/:column_name', toValue(args)] as const
}

export function getQueryRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.related)[':column_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.related)[':column_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueryRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query)[':pk']['$get']>>,
) {
  return ['query', '/query/:pk', toValue(args)] as const
}

export function getQueryPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query[':pk'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueryPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getQueryPkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.index.$get>>,
) {
  return ['report', '/report/', toValue(args)] as const
}

export function getReportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
          >,
          ReturnType<typeof getReportIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReportIndexMutationKey() {
  return ['report', '/report/', 'POST'] as const
}

export function getPostReportIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.report.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.report.index.$post>) {
      return parseResponse(client.report.index.$post(args, options))
    },
  })
}

export function usePostReportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.report.index.$post>,
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
  const mutationDefaults = getPostReportIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteReportIndexMutationKey() {
  return ['report', '/report/', 'DELETE'] as const
}

export function getDeleteReportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.report.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.report.index.$delete>) {
      return parseResponse(client.report.index.$delete(args, options))
    },
  })
}

export function useDeleteReportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.report.index.$delete>,
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
  const mutationDefaults = getDeleteReportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getReportInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report._info.$get>>,
) {
  return ['report', '/report/_info', toValue(args)] as const
}

export function getReportInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report._info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReportInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
          >,
          ReturnType<typeof getReportInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.related)[':column_name']['$get']>>,
) {
  return ['report', '/report/related/:column_name', toValue(args)] as const
}

export function getReportRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.related)[':column_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report.related)[':column_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['$get']>>,
) {
  return ['report', '/report/:pk', toValue(args)] as const
}

export function getReportPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getReportPkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutReportPkMutationKey() {
  return ['report', '/report/:pk', 'PUT'] as const
}

export function getPutReportPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.report)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReportPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.report)[':pk']['$put']>) {
      return parseResponse(client.report[':pk'].$put(args, options))
    },
  })
}

export function usePutReportPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.report)[':pk']['$put']>,
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
  const mutationDefaults = getPutReportPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteReportPkMutationKey() {
  return ['report', '/report/:pk', 'DELETE'] as const
}

export function getDeleteReportPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.report)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.report)[':pk']['$delete']>) {
      return parseResponse(client.report[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteReportPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.report)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteReportPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReportPkLogIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>>,
) {
  return ['report', '/report/:pk/log/', toValue(args)] as const
}

export function getReportPkLogIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportPkLogIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report[':pk'].log.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportPkLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportPkLogIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPkLogIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportPkLogIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report[':pk'].log.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportPkLogLogIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>,
) {
  return ['report', '/report/:pk/log/:log_id', toValue(args)] as const
}

export function getReportPkLogLogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportPkLogLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report[':pk'].log[':log_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportPkLogLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportPkLogLogIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPkLogLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportPkLogLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report[':pk'].log[':log_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSavedQueryIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query.index.$get>>,
) {
  return ['saved_query', '/saved_query/', toValue(args)] as const
}

export function getSavedQueryIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedQueryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saved_query.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSavedQueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>
            >
          >,
          ReturnType<typeof getSavedQueryIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedQueryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saved_query.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSavedQueryIndexMutationKey() {
  return ['saved_query', '/saved_query/', 'POST'] as const
}

export function getPostSavedQueryIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.saved_query.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSavedQueryIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saved_query.index.$post>) {
      return parseResponse(client.saved_query.index.$post(args, options))
    },
  })
}

export function usePostSavedQueryIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.saved_query.index.$post>,
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
  const mutationDefaults = getPostSavedQueryIndexMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSavedQueryIndexMutationKey() {
  return ['saved_query', '/saved_query/', 'DELETE'] as const
}

export function getDeleteSavedQueryIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.saved_query.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSavedQueryIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saved_query.index.$delete>) {
      return parseResponse(client.saved_query.index.$delete(args, options))
    },
  })
}

export function useDeleteSavedQueryIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.saved_query.index.$delete>,
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
  const mutationDefaults = getDeleteSavedQueryIndexMutationOptions<TError, TOnMutateResult>(
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

export function getSavedQueryInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query._info.$get>>,
) {
  return ['saved_query', '/saved_query/_info', toValue(args)] as const
}

export function getSavedQueryInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query._info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedQueryInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saved_query._info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSavedQueryInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query._info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>
            >
          >,
          ReturnType<typeof getSavedQueryInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedQueryInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saved_query._info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSavedQueryDistinctColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>
  >,
) {
  return ['saved_query', '/saved_query/distinct/:column_name', toValue(args)] as const
}

export function getSavedQueryDistinctColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedQueryDistinctColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saved_query.distinct[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSavedQueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSavedQueryDistinctColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryDistinctColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedQueryDistinctColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saved_query.distinct[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSavedQueryExportIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query.export.index.$get>>,
) {
  return ['saved_query', '/saved_query/export/', toValue(args)] as const
}

export function getSavedQueryExportIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query.export.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedQueryExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saved_query.export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSavedQueryExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saved_query.export.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
            >
          >,
          ReturnType<typeof getSavedQueryExportIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedQueryExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saved_query.export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSavedQueryImportIndexMutationKey() {
  return ['saved_query', '/saved_query/import/', 'POST'] as const
}

export function getPostSavedQueryImportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.import.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.saved_query.import.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSavedQueryImportIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saved_query.import.index.$post>) {
      return parseResponse(client.saved_query.import.index.$post(args, options))
    },
  })
}

export function usePostSavedQueryImportIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.saved_query.import.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.saved_query.import.index.$post>,
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
  const mutationDefaults = getPostSavedQueryImportIndexMutationOptions<TError, TOnMutateResult>(
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

export function getSavedQueryRelatedColumnNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>
  >,
) {
  return ['saved_query', '/saved_query/related/:column_name', toValue(args)] as const
}

export function getSavedQueryRelatedColumnNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedQueryRelatedColumnNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saved_query.related[':column_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSavedQueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSavedQueryRelatedColumnNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryRelatedColumnNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedQueryRelatedColumnNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saved_query.related[':column_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSavedQueryPkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.saved_query)[':pk']['$get']>>,
) {
  return ['saved_query', '/saved_query/:pk', toValue(args)] as const
}

export function getSavedQueryPkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.saved_query)[':pk']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSavedQueryPkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saved_query[':pk'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSavedQueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.saved_query)[':pk']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
            >
          >,
          ReturnType<typeof getSavedQueryPkQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryPkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSavedQueryPkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saved_query[':pk'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSavedQueryPkMutationKey() {
  return ['saved_query', '/saved_query/:pk', 'PUT'] as const
}

export function getPutSavedQueryPkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.saved_query)[':pk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSavedQueryPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.saved_query)[':pk']['$put']>) {
      return parseResponse(client.saved_query[':pk'].$put(args, options))
    },
  })
}

export function usePutSavedQueryPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.saved_query)[':pk']['$put']>,
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
  const mutationDefaults = getPutSavedQueryPkMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSavedQueryPkMutationKey() {
  return ['saved_query', '/saved_query/:pk', 'DELETE'] as const
}

export function getDeleteSavedQueryPkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.saved_query)[':pk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSavedQueryPkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.saved_query)[':pk']['$delete']>) {
      return parseResponse(client.saved_query[':pk'].$delete(args, options))
    },
  })
}

export function useDeleteSavedQueryPk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.saved_query)[':pk']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.saved_query)[':pk']['$delete']>,
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
  const mutationDefaults = getDeleteSavedQueryPkMutationOptions<TError, TOnMutateResult>(
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

export function getSecurityCsrfTokenIndexQueryKey() {
  return ['security', '/security/csrf_token/'] as const
}

export function getSecurityCsrfTokenIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSecurityCsrfTokenIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.security.csrf_token.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecurityCsrfTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
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
                Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSecurityCsrfTokenIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityCsrfTokenIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSecurityCsrfTokenIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.security.csrf_token.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecurityLoginMutationKey() {
  return ['security', '/security/login', 'POST'] as const
}

export function getPostSecurityLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.security.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.security.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.security.login.$post>) {
      return parseResponse(client.security.login.$post(args, options))
    },
  })
}

export function usePostSecurityLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.security.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.security.login.$post>,
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
  const mutationDefaults = getPostSecurityLoginMutationOptions<TError, TOnMutateResult>(
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

export function getPostSecurityRefreshMutationKey() {
  return ['security', '/security/refresh', 'POST'] as const
}

export function getPostSecurityRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.security.refresh.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSecurityRefreshMutationKey(),
    async mutationFn() {
      return parseResponse(client.security.refresh.$post(undefined, options))
    },
  })
}

export function usePostSecurityRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.security.refresh.$post>>>
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
  const mutationDefaults = getPostSecurityRefreshMutationOptions<TError, TOnMutateResult>(
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
