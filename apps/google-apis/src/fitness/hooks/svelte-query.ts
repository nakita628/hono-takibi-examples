import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createUserIdDataSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['dataSources']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['dataSources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdDataSourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUserIdDataSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserIdDataSourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUserIdDataSourcesDataSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['dataSources'][':dataSourceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserIdDataSourcesDataSourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutUserIdDataSourcesDataSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserIdDataSourcesDataSourceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserIdDataSourcesDataSourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserIdDataSourcesDataSourceIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUserIdDataSourcesDataSourceIdDataPointChanges<
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
  args: () => InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['dataPointChanges']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserIdDataSourcesDataSourceIdDataPointChangesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createUserIdDataSourcesDataSourceIdDatasetsDatasetId<
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
  args: () => InferRequestType<
    (typeof client)[':userId']['dataSources'][':dataSourceId']['datasets'][':datasetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserIdDataSourcesDataSourceIdDatasetsDatasetIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchUserIdDataSourcesDataSourceIdDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserIdDataSourcesDataSourceIdDatasetsDatasetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUserIdDatasetAggregate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserIdDatasetAggregateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUserIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':userId']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':userId']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserIdSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUserIdSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserIdSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUserIdSessionsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserIdSessionsSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
