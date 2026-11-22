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

export function getUserIdKey() {
  return ['{userId}'] as const
}

export function getUserIdDataSourcesQueryKey(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
) {
  return [':userId', '/:userId/dataSources', args] as const
}

export function getUserIdDataSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesQueryKey>
  >({
    queryKey: getUserIdDataSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].dataSources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserIdDataSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserIdDataSourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserIdDataSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserIdDataSourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUserIdDataSourcesMutationKey() {
  return [':userId', '/:userId/dataSources', 'POST'] as const
}

export function getPostUserIdDataSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['dataSources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdDataSourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':userId']['dataSources']['$post']>) {
      return parseResponse(client[':userId'].dataSources.$post(args, options))
    },
  })
}

export function usePostUserIdDataSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['dataSources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdDataSourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserIdDataSourcesDataSourceIdQueryKey(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId', args] as const
}

export function getUserIdDataSourcesDataSourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesDataSourceIdQueryKey>
  >({
    queryKey: getUserIdDataSourcesDataSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserIdDataSourcesDataSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesDataSourceIdQueryKey>
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
      ...getUserIdDataSourcesDataSourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserIdDataSourcesDataSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesDataSourceIdQueryKey>
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
      ...getUserIdDataSourcesDataSourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUserIdDataSourcesDataSourceIdMutationKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId', 'PUT'] as const
}

export function getPutUserIdDataSourcesDataSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserIdDataSourcesDataSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>,
    ) {
      return parseResponse(client[':userId'].dataSources[':dataSourceId'].$put(args, options))
    },
  })
}

export function usePutUserIdDataSourcesDataSourceId<
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
                ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserIdDataSourcesDataSourceIdMutationOptions<
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

export function getDeleteUserIdDataSourcesDataSourceIdMutationKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId', 'DELETE'] as const
}

export function getDeleteUserIdDataSourcesDataSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserIdDataSourcesDataSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>,
    ) {
      return parseResponse(client[':userId'].dataSources[':dataSourceId'].$delete(args, options))
    },
  })
}

export function useDeleteUserIdDataSourcesDataSourceId<
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
                ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserIdDataSourcesDataSourceIdMutationOptions<
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

export function getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId/dataPointChanges', args] as const
}

export function getUserIdDataSourcesDataSourceIdDataPointChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey>
  >({
    queryKey: getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].dataPointChanges.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserIdDataSourcesDataSourceIdDataPointChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey>
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
      ...getUserIdDataSourcesDataSourceIdDataPointChangesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserIdDataSourcesDataSourceIdDataPointChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey>
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
      ...getUserIdDataSourcesDataSourceIdDataPointChangesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId/datasets/:datasetId', args] as const
}

export function getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey>
  >({
    queryKey: getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserIdDataSourcesDataSourceIdDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey>
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
      ...getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserIdDataSourcesDataSourceIdDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey>
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
      ...getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId/datasets/:datasetId', 'DELETE'] as const
}

export function getDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetId<
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
                  (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$delete']
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
  const mutationDefaults = getDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationOptions<
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

export function getPatchUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationKey() {
  return [':userId', '/:userId/dataSources/:dataSourceId/datasets/:datasetId', 'PATCH'] as const
}

export function getPatchUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
      >,
    ) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$patch(args, options),
      )
    },
  })
}

export function usePatchUserIdDataSourcesDataSourceIdDatasetsDatasetId<
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
                  (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$patch']
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
  const mutationDefaults = getPatchUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationOptions<
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

export function getPostUserIdDatasetAggregateMutationKey() {
  return [':userId', '/:userId/dataset:aggregate', 'POST'] as const
}

export function getPostUserIdDatasetAggregateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['dataset:aggregate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['dataset:aggregate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserIdDatasetAggregateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['dataset:aggregate']['$post']>,
    ) {
      return parseResponse(client[':userId']['dataset:aggregate'].$post(args, options))
    },
  })
}

export function usePostUserIdDatasetAggregate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['dataset:aggregate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['dataset:aggregate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserIdDatasetAggregateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserIdSessionsQueryKey(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
) {
  return [':userId', '/:userId/sessions', args] as const
}

export function getUserIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdSessionsQueryKey>
  >({
    queryKey: getUserIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':userId'].sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserIdSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserIdSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUserIdSessionsSessionIdMutationKey() {
  return [':userId', '/:userId/sessions/:sessionId', 'PUT'] as const
}

export function getPutUserIdSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserIdSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>,
    ) {
      return parseResponse(client[':userId'].sessions[':sessionId'].$put(args, options))
    },
  })
}

export function usePutUserIdSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserIdSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserIdSessionsSessionIdMutationKey() {
  return [':userId', '/:userId/sessions/:sessionId', 'DELETE'] as const
}

export function getDeleteUserIdSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserIdSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>,
    ) {
      return parseResponse(client[':userId'].sessions[':sessionId'].$delete(args, options))
    },
  })
}

export function useDeleteUserIdSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':userId']['sessions'][':sessionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserIdSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
