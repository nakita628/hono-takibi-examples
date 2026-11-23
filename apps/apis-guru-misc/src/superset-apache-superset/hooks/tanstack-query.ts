import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
) {
  return ['annotation_layer', '/annotation_layer/', args] as const
}

export function getAnnotationLayerIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerIndexQueryKey>
  >({
    queryKey: getAnnotationLayerIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotation_layer.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationLayerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationLayerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnnotationLayerIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnnotationLayerIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationLayerIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnnotationLayerIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.annotation_layer.index.$delete>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
) {
  return ['annotation_layer', '/annotation_layer/_info', args] as const
}

export function getAnnotationLayerInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerInfoQueryKey>
  >({
    queryKey: getAnnotationLayerInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotation_layer._info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationLayerInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationLayerInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnnotationLayerInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnnotationLayerInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationLayerInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnnotationLayerInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnnotationLayerRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
) {
  return ['annotation_layer', '/annotation_layer/related/:column_name', args] as const
}

export function getAnnotationLayerRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnnotationLayerRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotation_layer.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAnnotationLayerRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationLayerRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAnnotationLayerRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnnotationLayerPkQueryKey(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
) {
  return ['annotation_layer', '/annotation_layer/:pk', args] as const
}

export function getAnnotationLayerPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationLayerPkQueryKey>
  >({
    queryKey: getAnnotationLayerPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotation_layer[':pk'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnnotationLayerPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAnnotationLayerPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnnotationLayerPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnnotationLayerPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationLayerPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnnotationLayerPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
) {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/', args] as const
}

export function getAnnotationLayerPkAnnotationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnnotationLayerPkAnnotationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotation_layer[':pk'].annotation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAnnotationLayerPkAnnotationIndexQueryKey>
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
      ...getAnnotationLayerPkAnnotationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationLayerPkAnnotationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAnnotationLayerPkAnnotationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
        InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
) {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/:annotation_id', args] as const
}

export function getAnnotationLayerPkAnnotationAnnotationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnnotationLayerPkAnnotationAnnotationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotation_layer[':pk'].annotation[':annotation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAnnotationLayerPkAnnotationAnnotationIdQueryKey>
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
      ...getAnnotationLayerPkAnnotationAnnotationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnnotationLayerPkAnnotationAnnotationId<
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
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAnnotationLayerPkAnnotationAnnotationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.async_event.index.$get>,
) {
  return ['async_event', '/async_event/', args] as const
}

export function getAsyncEventIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.async_event.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAsyncEventIndexQueryKey>
  >({
    queryKey: getAsyncEventIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.async_event.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAsyncEventIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.async_event.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAsyncEventIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAsyncEventIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAsyncEventIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.async_event.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAsyncEventIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAsyncEventIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getChartIndexQueryKey(args: InferRequestType<typeof client.chart.index.$get>) {
  return ['chart', '/chart/', args] as const
}

export function getChartIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chart.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChartIndexQueryKey>
  >({
    queryKey: getChartIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chart.index.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.chart.index.$delete>,
        TOnMutateResult
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

export function getChartInfoQueryKey(args: InferRequestType<typeof client.chart._info.$get>) {
  return ['chart', '/chart/_info', args] as const
}

export function getChartInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chart._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChartInfoQueryKey>
  >({
    queryKey: getChartInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChartInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.data.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.chart.data.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
) {
  return ['chart', '/chart/data/:cache_key', args] as const
}

export function getChartDataCacheKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartDataCacheKeyQueryKey>
  >({
    queryKey: getChartDataCacheKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart.data[':cache_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartDataCacheKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChartDataCacheKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartDataCacheKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartDataCacheKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartDataCacheKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartDataCacheKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartExportIndexQueryKey(
  args: InferRequestType<typeof client.chart.export.index.$get>,
) {
  return ['chart', '/chart/export/', args] as const
}

export function getChartExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chart.export.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartExportIndexQueryKey>
  >({
    queryKey: getChartExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart.export.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartFavoriteStatusIndexQueryKey(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
) {
  return ['chart', '/chart/favorite_status/', args] as const
}

export function getChartFavoriteStatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChartFavoriteStatusIndexQueryKey>
  >({
    queryKey: getChartFavoriteStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart.favorite_status.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChartFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChartFavoriteStatusIndexQueryKey>
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
      ...getChartFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartFavoriteStatusIndexQueryKey>
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
      ...getChartFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
) {
  return ['chart', '/chart/related/:column_name', args] as const
}

export function getChartRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChartRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChartRelatedColumnNameQueryKey>
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
      ...getChartRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChartRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartPkQueryKey(args: InferRequestType<(typeof client.chart)[':pk']['$get']>) {
  return ['chart', '/chart/:pk', args] as const
}

export function getChartPkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.chart)[':pk']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChartPkQueryKey>
  >({
    queryKey: getChartPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChartPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChartPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/cache_screenshot/', args] as const
}

export function getChartPkCacheScreenshotIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChartPkCacheScreenshotIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart[':pk'].cache_screenshot.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getChartPkCacheScreenshotIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartPkCacheScreenshotIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChartPkCacheScreenshotIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartPkDataIndexQueryKey(
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/data/', args] as const
}

export function getChartPkDataIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChartPkDataIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart[':pk'].data.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChartPkDataIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartPkDataIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChartPkDataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartPkDataIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChartPkScreenshotDigestIndexQueryKey(
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/screenshot/:digest/', args] as const
}

export function getChartPkScreenshotDigestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChartPkScreenshotDigestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart[':pk'].screenshot[':digest'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChartPkScreenshotDigestIndexQueryKey>
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
      ...getChartPkScreenshotDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartPkScreenshotDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getChartPkScreenshotDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChartPkThumbnailDigestIndexQueryKey(
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/thumbnail/:digest/', args] as const
}

export function getChartPkThumbnailDigestIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChartPkThumbnailDigestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart[':pk'].thumbnail[':digest'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getChartPkThumbnailDigestIndexQueryKey>
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
      ...getChartPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChartPkThumbnailDigestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getChartPkThumbnailDigestIndexQueryKey>
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
      ...getChartPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCssTemplateIndexQueryKey(
  args: InferRequestType<typeof client.css_template.index.$get>,
) {
  return ['css_template', '/css_template/', args] as const
}

export function getCssTemplateIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.css_template.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCssTemplateIndexQueryKey>
  >({
    queryKey: getCssTemplateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.css_template.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCssTemplateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.css_template.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssTemplateIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCssTemplateIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCssTemplateIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.css_template.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssTemplateIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCssTemplateIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.css_template._info.$get>,
) {
  return ['css_template', '/css_template/_info', args] as const
}

export function getCssTemplateInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.css_template._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCssTemplateInfoQueryKey>
  >({
    queryKey: getCssTemplateInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.css_template._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCssTemplateInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.css_template._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssTemplateInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCssTemplateInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCssTemplateInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.css_template._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssTemplateInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCssTemplateInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCssTemplateRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
) {
  return ['css_template', '/css_template/related/:column_name', args] as const
}

export function getCssTemplateRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCssTemplateRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.css_template.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCssTemplateRelatedColumnNameQueryKey>
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
      ...getCssTemplateRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCssTemplateRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getCssTemplateRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCssTemplatePkQueryKey(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
) {
  return ['css_template', '/css_template/:pk', args] as const
}

export function getCssTemplatePkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCssTemplatePkQueryKey>
  >({
    queryKey: getCssTemplatePkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.css_template[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCssTemplatePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssTemplatePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCssTemplatePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCssTemplatePk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCssTemplatePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCssTemplatePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.dashboard.index.$get>,
) {
  return ['dashboard', '/dashboard/', args] as const
}

export function getDashboardIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dashboard.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardIndexQueryKey>
  >({
    queryKey: getDashboardIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDashboardIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDashboardIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDashboardIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.dashboard.index.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.dashboard._info.$get>,
) {
  return ['dashboard', '/dashboard/_info', args] as const
}

export function getDashboardInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dashboard._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardInfoQueryKey>
  >({
    queryKey: getDashboardInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDashboardInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDashboardInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDashboardInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDashboardInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDashboardExportIndexQueryKey(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
) {
  return ['dashboard', '/dashboard/export/', args] as const
}

export function getDashboardExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardExportIndexQueryKey>
  >({
    queryKey: getDashboardExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDashboardExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDashboardExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDashboardExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDashboardExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDashboardFavoriteStatusIndexQueryKey(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
) {
  return ['dashboard', '/dashboard/favorite_status/', args] as const
}

export function getDashboardFavoriteStatusIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDashboardFavoriteStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard.favorite_status.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDashboardFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDashboardFavoriteStatusIndexQueryKey>
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
      ...getDashboardFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDashboardFavoriteStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDashboardFavoriteStatusIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
) {
  return ['dashboard', '/dashboard/related/:column_name', args] as const
}

export function getDashboardRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDashboardRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDashboardRelatedColumnNameQueryKey>
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
      ...getDashboardRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDashboardRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDashboardRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDashboardIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
) {
  return ['dashboard', '/dashboard/:id_or_slug', args] as const
}

export function getDashboardIdOrSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardIdOrSlugQueryKey>
  >({
    queryKey: getDashboardIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard[':id_or_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDashboardIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDashboardIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDashboardIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDashboardIdOrSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardIdOrSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDashboardIdOrSlugQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDashboardIdOrSlugChartsQueryKey(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
) {
  return ['dashboard', '/dashboard/:id_or_slug/charts', args] as const
}

export function getDashboardIdOrSlugChartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDashboardIdOrSlugChartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard[':id_or_slug'].charts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDashboardIdOrSlugChartsQueryKey>
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
      ...getDashboardIdOrSlugChartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDashboardIdOrSlugCharts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDashboardIdOrSlugChartsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDashboardIdOrSlugDatasetsQueryKey(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
) {
  return ['dashboard', '/dashboard/:id_or_slug/datasets', args] as const
}

export function getDashboardIdOrSlugDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDashboardIdOrSlugDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard[':id_or_slug'].datasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDashboardIdOrSlugDatasetsQueryKey>
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
      ...getDashboardIdOrSlugDatasetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDashboardIdOrSlugDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDashboardIdOrSlugDatasetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
) {
  return ['dashboard', '/dashboard/:pk/thumbnail/:digest/', args] as const
}

export function getDashboardPkThumbnailDigestIndexQueryOptions<
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
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDashboardPkThumbnailDigestIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard[':pk'].thumbnail[':digest'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDashboardPkThumbnailDigestIndexQueryKey>
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
      ...getDashboardPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDashboardPkThumbnailDigestIndex<
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
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getDashboardPkThumbnailDigestIndexQueryKey>
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
      ...getDashboardPkThumbnailDigestIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabaseIndexQueryKey(
  args: InferRequestType<typeof client.database.index.$get>,
) {
  return ['database', '/database/', args] as const
}

export function getDatabaseIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.database.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseIndexQueryKey>
  >({
    queryKey: getDatabaseIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabaseIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.database.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabaseIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabaseIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.database.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabaseIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.database.index.$post>,
        TOnMutateResult
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

export function getDatabaseInfoQueryKey(args: InferRequestType<typeof client.database._info.$get>) {
  return ['database', '/database/_info', args] as const
}

export function getDatabaseInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.database._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseInfoQueryKey>
  >({
    queryKey: getDatabaseInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabaseInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.database._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabaseInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabaseInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.database._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabaseInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatabaseAvailableIndexQueryKey() {
  return ['database', '/database/available/'] as const
}

export function getDatabaseAvailableIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseAvailableIndexQueryKey>
  >({
    queryKey: getDatabaseAvailableIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.database.available.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseAvailableIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabaseAvailableIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabaseAvailableIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseAvailableIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabaseAvailableIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatabaseExportIndexQueryKey(
  args: InferRequestType<typeof client.database.export.index.$get>,
) {
  return ['database', '/database/export/', args] as const
}

export function getDatabaseExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.database.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabaseExportIndexQueryKey>
  >({
    queryKey: getDatabaseExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database.export.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabaseExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.database.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabaseExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabaseExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.database.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabaseExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabaseExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.database.test_connection.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.database.test_connection.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.database)[':pk']['$get']>,
) {
  return ['database', '/database/:pk', args] as const
}

export function getDatabasePkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.database)[':pk']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasePkQueryKey>
  >({
    queryKey: getDatabasePkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabasePk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabasePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabasePk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasePkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabasePkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
) {
  return ['database', '/database/:pk/function_names/', args] as const
}

export function getDatabasePkFunctionNamesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasePkFunctionNamesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database[':pk'].function_names.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasePkFunctionNamesIndexQueryKey>
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
      ...getDatabasePkFunctionNamesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasePkFunctionNamesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getDatabasePkFunctionNamesIndexQueryKey>
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
      ...getDatabasePkFunctionNamesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasePkRelatedObjectsIndexQueryKey(
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
) {
  return ['database', '/database/:pk/related_objects/', args] as const
}

export function getDatabasePkRelatedObjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasePkRelatedObjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database[':pk'].related_objects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasePkRelatedObjectsIndexQueryKey>
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
      ...getDatabasePkRelatedObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasePkRelatedObjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getDatabasePkRelatedObjectsIndexQueryKey>
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
      ...getDatabasePkRelatedObjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasePkSchemasIndexQueryKey(
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
) {
  return ['database', '/database/:pk/schemas/', args] as const
}

export function getDatabasePkSchemasIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasePkSchemasIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database[':pk'].schemas.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasePkSchemasIndexQueryKey>
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
      ...getDatabasePkSchemasIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasePkSchemasIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDatabasePkSchemasIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasePkSelectStarTableNameIndexQueryKey(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
) {
  return ['database', '/database/:pk/select_star/:table_name/', args] as const
}

export function getDatabasePkSelectStarTableNameIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasePkSelectStarTableNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database[':pk'].select_star[':table_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasePkSelectStarTableNameIndexQueryKey>
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
      ...getDatabasePkSelectStarTableNameIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasePkSelectStarTableNameIndex<
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
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDatabasePkSelectStarTableNameIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
) {
  return ['database', '/database/:pk/select_star/:table_name/:schema_name/', args] as const
}

export function getDatabasePkSelectStarTableNameSchemaNameIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasePkSelectStarTableNameSchemaNameIndexQueryKey>
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
      ...getDatabasePkSelectStarTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasePkSelectStarTableNameSchemaNameIndex<
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
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDatabasePkSelectStarTableNameSchemaNameIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatabasePkTableTableNameSchemaNameIndexQueryKey(
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
) {
  return ['database', '/database/:pk/table/:table_name/:schema_name/', args] as const
}

export function getDatabasePkTableTableNameSchemaNameIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasePkTableTableNameSchemaNameIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.database[':pk'].table[':table_name'][':schema_name'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasePkTableTableNameSchemaNameIndexQueryKey>
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
      ...getDatabasePkTableTableNameSchemaNameIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasePkTableTableNameSchemaNameIndex<
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
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDatabasePkTableTableNameSchemaNameIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatasetIndexQueryKey(args: InferRequestType<typeof client.dataset.index.$get>) {
  return ['dataset', '/dataset/', args] as const
}

export function getDatasetIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dataset.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetIndexQueryKey>
  >({
    queryKey: getDatasetIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataset.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatasetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataset.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatasetIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatasetIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataset.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatasetIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.dataset.index.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.dataset.index.$delete>,
        TOnMutateResult
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

export function getDatasetInfoQueryKey(args: InferRequestType<typeof client.dataset._info.$get>) {
  return ['dataset', '/dataset/_info', args] as const
}

export function getDatasetInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dataset._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetInfoQueryKey>
  >({
    queryKey: getDatasetInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataset._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatasetInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataset._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatasetInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatasetInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataset._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatasetInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatasetDistinctColumnNameQueryKey(
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
) {
  return ['dataset', '/dataset/distinct/:column_name', args] as const
}

export function getDatasetDistinctColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetDistinctColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataset.distinct[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatasetDistinctColumnNameQueryKey>
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
      ...getDatasetDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatasetDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDatasetDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatasetExportIndexQueryKey(
  args: InferRequestType<typeof client.dataset.export.index.$get>,
) {
  return ['dataset', '/dataset/export/', args] as const
}

export function getDatasetExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dataset.export.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetExportIndexQueryKey>
  >({
    queryKey: getDatasetExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataset.export.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatasetExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataset.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatasetExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatasetExportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dataset.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetExportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatasetExportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
) {
  return ['dataset', '/dataset/related/:column_name', args] as const
}

export function getDatasetRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataset.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatasetRelatedColumnNameQueryKey>
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
      ...getDatasetRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatasetRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDatasetRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatasetPkQueryKey(
  args: InferRequestType<(typeof client.dataset)[':pk']['$get']>,
) {
  return ['dataset', '/dataset/:pk', args] as const
}

export function getDatasetPkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.dataset)[':pk']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetPkQueryKey>
  >({
    queryKey: getDatasetPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataset[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatasetPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatasetPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatasetPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatasetPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
) {
  return ['dataset', '/dataset/:pk/related_objects', args] as const
}

export function getDatasetPkRelatedObjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatasetPkRelatedObjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dataset[':pk'].related_objects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatasetPkRelatedObjectsQueryKey>
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
      ...getDatasetPkRelatedObjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatasetPkRelatedObjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDatasetPkRelatedObjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLogIndexQueryKey(args: InferRequestType<typeof client.log.index.$get>) {
  return ['log', '/log/', args] as const
}

export function getLogIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.log.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogIndexQueryKey>
  >({
    queryKey: getLogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.log.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.log.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.log.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.log.index.$post>,
        TOnMutateResult
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

export function getLogPkQueryKey(args: InferRequestType<(typeof client.log)[':pk']['$get']>) {
  return ['log', '/log/:pk', args] as const
}

export function getLogPkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.log)[':pk']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogPkQueryKey>
  >({
    queryKey: getLogPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.log[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.log)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.log)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMenuIndexQueryKey() {
  return ['menu', '/menu/'] as const
}

export function getMenuIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMenuIndexQueryKey>
  >({
    queryKey: getMenuIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.menu.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMenuIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMenuIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMenuIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMenuIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMenuIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMenuIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenapiVersionOpenapiQueryKey(
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
) {
  return ['openapi', '/openapi/:version/_openapi', args] as const
}

export function getOpenapiVersionOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOpenapiVersionOpenapiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.openapi[':version']._openapi.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOpenapiVersionOpenapiQueryKey>
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
      ...getOpenapiVersionOpenapiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOpenapiVersionOpenapi<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getOpenapiVersionOpenapiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueryIndexQueryKey(args: InferRequestType<typeof client.query.index.$get>) {
  return ['query', '/query/', args] as const
}

export function getQueryIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryIndexQueryKey>
  >({
    queryKey: getQueryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.query.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.query.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueryDistinctColumnNameQueryKey(
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
) {
  return ['query', '/query/distinct/:column_name', args] as const
}

export function getQueryDistinctColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getQueryDistinctColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.distinct[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getQueryDistinctColumnNameQueryKey>
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
      ...getQueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getQueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueryRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
) {
  return ['query', '/query/related/:column_name', args] as const
}

export function getQueryRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getQueryRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getQueryRelatedColumnNameQueryKey>
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
      ...getQueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getQueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueryPkQueryKey(args: InferRequestType<(typeof client.query)[':pk']['$get']>) {
  return ['query', '/query/:pk', args] as const
}

export function getQueryPkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.query)[':pk']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryPkQueryKey>
  >({
    queryKey: getQueryPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueryPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueryPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReportIndexQueryKey(args: InferRequestType<typeof client.report.index.$get>) {
  return ['report', '/report/', args] as const
}

export function getReportIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportIndexQueryKey>
  >({
    queryKey: getReportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.report.index.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.report.index.$delete>,
        TOnMutateResult
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

export function getReportInfoQueryKey(args: InferRequestType<typeof client.report._info.$get>) {
  return ['report', '/report/_info', args] as const
}

export function getReportInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportInfoQueryKey>
  >({
    queryKey: getReportInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReportInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReportRelatedColumnNameQueryKey(
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
) {
  return ['report', '/report/related/:column_name', args] as const
}

export function getReportRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getReportRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getReportRelatedColumnNameQueryKey>
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
      ...getReportRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getReportRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportPkQueryKey(args: InferRequestType<(typeof client.report)[':pk']['$get']>) {
  return ['report', '/report/:pk', args] as const
}

export function getReportPkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.report)[':pk']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportPkQueryKey>
  >({
    queryKey: getReportPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReportPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportPk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
) {
  return ['report', '/report/:pk/log/', args] as const
}

export function getReportPkLogIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getReportPkLogIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report[':pk'].log.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getReportPkLogIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportPkLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportPkLogIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportPkLogIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReportPkLogLogIdQueryKey(
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
) {
  return ['report', '/report/:pk/log/:log_id', args] as const
}

export function getReportPkLogLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getReportPkLogLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report[':pk'].log[':log_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getReportPkLogLogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportPkLogLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportPkLogLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportPkLogLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSavedQueryIndexQueryKey(
  args: InferRequestType<typeof client.saved_query.index.$get>,
) {
  return ['saved_query', '/saved_query/', args] as const
}

export function getSavedQueryIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saved_query.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryIndexQueryKey>
  >({
    queryKey: getSavedQueryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saved_query.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSavedQueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saved_query.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSavedQueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSavedQueryIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saved_query.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSavedQueryIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.saved_query._info.$get>,
) {
  return ['saved_query', '/saved_query/_info', args] as const
}

export function getSavedQueryInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saved_query._info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryInfoQueryKey>
  >({
    queryKey: getSavedQueryInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saved_query._info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSavedQueryInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saved_query._info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSavedQueryInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSavedQueryInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saved_query._info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSavedQueryInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSavedQueryDistinctColumnNameQueryKey(
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
) {
  return ['saved_query', '/saved_query/distinct/:column_name', args] as const
}

export function getSavedQueryDistinctColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSavedQueryDistinctColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saved_query.distinct[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSavedQueryDistinctColumnNameQueryKey>
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
      ...getSavedQueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSavedQueryDistinctColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSavedQueryDistinctColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSavedQueryExportIndexQueryKey(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
) {
  return ['saved_query', '/saved_query/export/', args] as const
}

export function getSavedQueryExportIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryExportIndexQueryKey>
  >({
    queryKey: getSavedQueryExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saved_query.export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSavedQueryExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryExportIndexQueryKey>
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
      ...getSavedQueryExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSavedQueryExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryExportIndexQueryKey>
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
      ...getSavedQueryExportIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.import.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.saved_query.import.index.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
) {
  return ['saved_query', '/saved_query/related/:column_name', args] as const
}

export function getSavedQueryRelatedColumnNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSavedQueryRelatedColumnNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saved_query.related[':column_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSavedQueryRelatedColumnNameQueryKey>
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
      ...getSavedQueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSavedQueryRelatedColumnName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSavedQueryRelatedColumnNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSavedQueryPkQueryKey(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
) {
  return ['saved_query', '/saved_query/:pk', args] as const
}

export function getSavedQueryPkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSavedQueryPkQueryKey>
  >({
    queryKey: getSavedQueryPkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saved_query[':pk'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSavedQueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSavedQueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSavedQueryPk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSavedQueryPkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSavedQueryPkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.saved_query)[':pk']['$delete']>,
        TOnMutateResult
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

export function getSecurityCsrfTokenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecurityCsrfTokenIndexQueryKey>
  >({
    queryKey: getSecurityCsrfTokenIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.security.csrf_token.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityCsrfTokenIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSecurityCsrfTokenIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSecurityCsrfTokenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecurityCsrfTokenIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSecurityCsrfTokenIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.security.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.security.login.$post>,
        TOnMutateResult
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
