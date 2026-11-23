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

export function getUserIdKey() {
  return ['{userId}'] as const
}

export function getUserIdDataSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['dataSources']['$get']>>,
) {
  return [':userId', '/:userId/dataSources', toValue(args)] as const
}

export function getUserIdDataSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['dataSources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdDataSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].dataSources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdDataSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['dataSources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdDataSourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdDataSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].dataSources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>
  >,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId', toValue(args)] as const
}

export function getUserIdDataSourcesDataSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdDataSourcesDataSourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserIdDataSourcesDataSourceIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
          Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesDataSourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdDataSourcesDataSourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].dataSources[':dataSourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
    >
  >,
) {
  return [':userId', '/:userId/dataSources/:dataSourceId/dataPointChanges', toValue(args)] as const
}

export function getUserIdDataSourcesDataSourceIdDataPointChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].dataPointChanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
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
                    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
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
                    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdDataSourcesDataSourceIdDataPointChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].dataSources[':dataSourceId'].dataPointChanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
    >
  >,
) {
  return [
    ':userId',
    '/:userId/dataSources/:dataSourceId/datasets/:datasetId',
    toValue(args),
  ] as const
}

export function getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
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
                    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
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
                    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
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
              (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].dataSources[':dataSourceId'].datasets[':datasetId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['sessions']['$get']>>,
) {
  return [':userId', '/:userId/sessions', toValue(args)] as const
}

export function getUserIdSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['sessions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':userId'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':userId']['sessions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserIdSessionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':userId'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
